from setuptools import find_packages, setup

setup(
    name="walterego",
    version="1.0.0",
    packages=find_packages(exclude=["tests.*"]),
    install_requires=[
        "Authlib~=0.15",
        "Flask~=1.1",
        "grpcio~=1.37",
        "opentelemetry-exporter-otlp~=1.1",
        "opentelemetry-instrumentation-flask~=0.20b0",
        "opentelemetry-instrumentation-requests~=0.20b0",
        "opentelemetry-sdk~=1.1",
        "requests~=2.25",
    ],
)
