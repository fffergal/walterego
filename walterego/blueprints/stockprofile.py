"""Set profile to one of the stock old white men."""

import json
import random
from pathlib import Path
from urllib.parse import urljoin

import requests
from flask import Blueprint, request

import walterego
from walterego.auth import oauth

bp = Blueprint("stockprofile", __name__)


STOCK_PROFILE_DATA_PATH = Path(walterego.__file__).parent / "stock-profiles.json"


@bp.route("/api/v1/stockprofile", methods=["POST"])
def stockprofile():
    """Choose a stock profile, set it, and return the details."""
    # Download image from ourselves, it's easier than putting files next to Vercel
    # Lambdas.
    with open(STOCK_PROFILE_DATA_PATH) as f:
        stock_profiles = json.load(f)
    profile = random.choice(stock_profiles["stockProfiles"])
    full_image_url = urljoin(request.url_root, profile["profileImageUrl"])
    image_bytes = requests.get(full_image_url).content
    image_resp = oauth.twitter.post(
        "account/update_profile_image.json",
        params={"skip_status": "true"},
        files={"image": image_bytes},
    )
    image_resp.raise_for_status()
    name_resp = oauth.twitter.post(
        "account/update_profile.json", params={"name": profile["profileName"]}
    )
    name_resp.raise_for_status()
    return {
        **profile,
        "profileScreenName": name_resp.json()["screen_name"],
    }
