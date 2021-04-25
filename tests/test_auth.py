from flask import session

from walterego import app, auth


def test_fetch_twitter_token():
    with app.create_app().test_request_context():
        session["twitter_token"] = "whatever"
        assert auth.fetch_twitter_token() == "whatever"
