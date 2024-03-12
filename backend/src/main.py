import os
import sys
import json
from typing import List
from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from .models.firms import Firm
from .models.commitment import Commitment


# set path for relative imports
# prepend "./backend" to sys.path
sys.path.insert(0, os.path.dirname(os.path.realpath(__file__)))

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

ASSET_CLASSES = ["pe", "pd", "re", "inf", "nr", "hf"]

data_file_path = os.path.join(
    os.path.dirname(os.path.realpath(__file__)), "db/data.json"
)
print(data_file_path)
f = open(data_file_path)
data = json.load(f)

INVESTOR_IDS: List[int] = []
FIRMS: List[Firm] = []
for firm in data["firms"]:
    INVESTOR_IDS.append(firm["firm_id"])
    parsed_firm = Firm(**firm)
    FIRMS.append(parsed_firm)


@app.get("/api/investors")
def get_investors() -> List[Firm]:
    return FIRMS


@app.get("/api/investor/commitment/{asset_class}/{investor_id}")
def get_commitments(investor_id: int, asset_class: str) -> List[Commitment]:
    if investor_id not in INVESTOR_IDS:
        raise HTTPException(
            status_code=404, detail=f"investor with id {investor_id} not found"
        )
    if asset_class not in ASSET_CLASSES:
        raise HTTPException(
            status_code=404, detail=f"asset class {asset_class} does not exist"
        )

    result: List[Commitment] = []
    for commitment in data["commitments"]:
        if (
            commitment["firm_id"] == investor_id
            and commitment["asset_class"] == asset_class
        ):
            parsed_commitment = Commitment(**commitment)
            result.append(parsed_commitment)

    return result
