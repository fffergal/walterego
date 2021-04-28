"""Create and configure the Flask app."""

import os
from types import SimpleNamespace

from flask import Flask
from grpc import ssl_channel_credentials
from opentelemetry import trace
from opentelemetry.exporter.otlp.proto.grpc.trace_exporter import OTLPSpanExporter
from opentelemetry.instrumentation.flask import FlaskInstrumentor
from opentelemetry.instrumentation.requests import RequestsInstrumentor
from opentelemetry.sdk.trace import TracerProvider
from opentelemetry.sdk.trace.export import BatchSpanProcessor

from walterego.auth import oauth
from walterego.blueprints import (
    stockprofile,
    twittercallback,
    twittercheck,
    twitterlink,
)

ENV_SECRETS = [
    "HONEYCOMB_WRITE_KEY",
    "SECRET_KEY",
    "TWITTER_CLIENT_ID",
    "TWITTER_CLIENT_SECRET",
]

# OpenTelemetry uses globals, so need to keep track of tracing init globally instead of
# app context.
tracing_inited_holder = SimpleNamespace(inited=False)


def add_tracing(app):
    """
    Add tracing to a Flask app.

    This is a bit different to the OpenTelemetry Python examples because Vercel does
    some forking and it needs to be handled without knowing which app runner is being
    used.
    """
    RequestsInstrumentor().instrument()
    FlaskInstrumentor().instrument_app(app)
    old_wsgi_app = app.wsgi_app

    def init_tracing_app(environ, start_response):
        if not tracing_inited_holder.inited:
            otlp_exporter = OTLPSpanExporter(
                endpoint="https://api.honeycomb.io:443",
                insecure=False,
                credentials=ssl_channel_credentials(),
                headers=(
                    ("x-honeycomb-team", app.config["HONEYCOMB_WRITE_KEY"]),
                    ("x-honeycomb-dataset", "Walter Ego"),
                ),
            )
            trace.set_tracer_provider(TracerProvider())
            tracing_inited_holder.processor = BatchSpanProcessor(otlp_exporter)
            trace.get_tracer_provider().add_span_processor(
                tracing_inited_holder.processor
            )
            tracing_inited_holder.inited = True
        try:
            return old_wsgi_app(environ, start_response)
        finally:
            tracing_inited_holder.processor.force_flush()

    app.wsgi_app = init_tracing_app


def create_app():
    """Create Flask app, configure from env vars, register blueprints."""
    app = Flask(__name__)
    app.config.update({key: os.environ[key] for key in ENV_SECRETS})

    add_tracing(app)
    oauth.init_app(app)

    app.register_blueprint(stockprofile.bp)
    app.register_blueprint(twittercallback.bp)
    app.register_blueprint(twittercheck.bp)
    app.register_blueprint(twitterlink.bp)

    return app
