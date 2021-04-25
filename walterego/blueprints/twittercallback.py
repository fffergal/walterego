"""Callback from Twitter after signing in."""

from flask import Blueprint, redirect, session

from walterego.auth import oauth

bp = Blueprint("twittercallback", __name__)


@bp.route("/api/v1/twittercallback")
def twittercallback():
    """Set token in session for later use, redirect to dashboard."""
    session["twitter_token"] = oauth.twitter.authorize_access_token()
    return redirect("/dashboard")
