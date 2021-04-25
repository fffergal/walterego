"""Check if signed in with Twitter."""

from flask import Blueprint, session
from requests import HTTPError

from walterego.auth import oauth

bp = Blueprint("twittercheck", __name__)


@bp.route("/api/v1/twittercheck")
def twittercheck():
    """
    Check presence of token, and if token works.

    Return an objected with signedIn true or false.

    Useful in the UI to decide whether to show a sign in button or not.
    """
    if "twitter_token" not in session:
        return {"signedIn": False}
    user_resp = oauth.twitter.get(
        "account/verify_credentials.json", params={"skip_status": "true"}
    )
    try:
        user_resp.raise_for_status()
    except HTTPError:
        return {"signedIn": False}
    return {"signedIn": True}
