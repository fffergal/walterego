"""Create and configure the Flask app."""

import os

from flask import Flask

from walterego.auth import oauth
from walterego.blueprints import twittercallback, twittercheck, twitterlink

ENV_SECRETS = [
    "SECRET_KEY",
    "TWITTER_CLIENT_ID",
    "TWITTER_CLIENT_SECRET",
]


def create_app():
    """Create Flask app, configure from env vars, register blueprints."""
    app = Flask(__name__)
    app.config.update({key: os.environ[key] for key in ENV_SECRETS})
    oauth.init_app(app)

    app.register_blueprint(twittercallback.bp)
    app.register_blueprint(twittercheck.bp)
    app.register_blueprint(twitterlink.bp)

    return app
