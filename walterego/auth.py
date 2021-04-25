"""Auth with third party services."""

from authlib.integrations.flask_client import OAuth
from flask import session


def fetch_twitter_token():
    """
    Fetch Twitter token from Flask session.

    To be used as fetch_token for OAuth.register.
    """
    return session["twitter_token"]


oauth = OAuth()
oauth.register(
    "twitter",
    api_base_url="https://api.twitter.com/1.1/",
    request_token_url="https://api.twitter.com/oauth/request_token",
    access_token_url="https://api.twitter.com/oauth/access_token",
    authorize_url="https://api.twitter.com/oauth/authenticate",
    fetch_token=fetch_twitter_token,
)
