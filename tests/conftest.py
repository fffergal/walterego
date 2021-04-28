import pytest

import walterego.app


@pytest.fixture(autouse=True)
def secrets(monkeypatch):
    for secret in walterego.app.ENV_SECRETS:
        monkeypatch.setenv(secret, "whatever")
