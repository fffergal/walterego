"""Find active Twitter screen names from sample feed."""
import gzip
import itertools
import json

from flask import Blueprint, make_response

from walterego.auth import oauth

bp = Blueprint("samplescreennames", __name__)


def extract_screen_names(lines):
    """
    Yield screen names from lines of Twitter sample feed.

    Skip lines that don't have a screen name.
    """
    for line in lines:
        obj = json.loads(line)
        screen_name = obj.get("user", {}).get("screen_name")
        if screen_name:
            yield screen_name


@bp.route("/api/v1/samplescreennames")
def samplescreennames():
    """Stream 200 sample events and collect up to 100 screen names if present."""
    resp = oauth.twitter.get(
        "https://stream.twitter.com/1.1/statuses/sample.json", stream=True
    )
    gzip_file = gzip.GzipFile(fileobj=resp.raw)
    try:
        screen_names = list(
            itertools.islice(
                extract_screen_names(itertools.islice(gzip_file, 200)), 100
            )
        )
    except Exception as e:
        return {"error": str(e)}
    return {"screen_names": screen_names}


@bp.route("/api/v1/samplescreennames.txt")
def samplescreennamestxt():
    """
    Stream 200 sample events and collect up to 100 screen names if present.

    Responds with text instead of JSON.
    """
    resp = oauth.twitter.get(
        "https://stream.twitter.com/1.1/statuses/sample.json", stream=True
    )
    gzip_file = gzip.GzipFile(fileobj=resp.raw)
    try:
        screen_names = list(
            itertools.islice(
                extract_screen_names(itertools.islice(gzip_file, 200)), 100
            )
        )
    except Exception as e:
        return str(e)
    response = make_response(
        "\n".join(f"@{screen_name}" for screen_name in screen_names)
    )
    response.mimetype = "text/plain"
    return response
