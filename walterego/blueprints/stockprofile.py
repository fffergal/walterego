"""Set profile to one of the stock old white men."""

import random
from urllib.parse import urljoin

import requests
from flask import Blueprint, request

from walterego.auth import oauth

bp = Blueprint("stockprofile", __name__)


@bp.route("/api/v1/stockprofile", methods=["POST"])
def stockprofile():
    """Choose a stock profile, set it, and return the details."""
    # Download image from ourselves, it's easier than putting files next to Vercel
    # Lambdas.
    name, image = random.choice(STOCK_PROFILES)
    image_bytes = requests.get(urljoin(request.url_root, image)).content
    image_resp = oauth.twitter.post(
        "account/update_profile_image.json",
        params={"skip_status": "true"},
        files={"image": image_bytes},
    )
    image_resp.raise_for_status()
    name_resp = oauth.twitter.post("account/update_profile.json", params={"name": name})
    name_resp.raise_for_status()
    return {
        "profileImageUrl": f"/{image}",
        "profileName": name,
        "profileScreenName": name_resp.json()["screen_name"],
    }


STOCK_PROFILES = [
    ("Michael Johnson", "owm1.jpg"),
    ("Scott Smith", "owm2.jpg"),
    ("Mark Miller", "owm3.jpg"),
    ("Paul Brown", "owm4.jpg"),
    ("Robert Jones", "owm5.jpg"),
    ("Richard Williams", "owm6.jpg"),
    ("Jeffrey Davis", "owm7.jpg"),
    ("Kevin Anderson", "owm8.jpg"),
    ("Thomas Wilson", "owm9.jpg"),
    ("David Martin", "owm10.jpg"),
    ("Charles Taylor", "owm11.jpg"),
    ("Steven Moore", "owm12.jpg"),
    ("Christopher Thompson", "owm13.jpg"),
    ("Daniel White", "owm14.jpg"),
    ("John Clark", "owm15.jpg"),
    ("William Thomas", "owm16.jpg"),
    ("Timothy Hall", "owm17.jpg"),
    ("Brian Baker", "owm18.jpg"),
    ("James Nelson", "owm19.jpg"),
    ("Joseph Allen", "owm20.jpg"),
]
