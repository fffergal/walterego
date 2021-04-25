"""Link or Sign in with Twitter."""


from flask import Blueprint, url_for

from walterego.auth import oauth

bp = Blueprint("twitterlink", __name__)


@bp.route("/api/v1/twitterlink")
def twitterlink():
    """Redirect to Twitter to start OAuth flow."""
    return oauth.twitter.authorize_redirect(
        redirect_uri=url_for("twittercallback.twittercallback", _external=True)
    )
