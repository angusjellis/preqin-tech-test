from fastapi.testclient import TestClient
from src.main import app

client = TestClient(app)


def test_get_investor():
    response = client.get("api/investor/2670")
    assert response.status_code == 200
    assert response.json() == {
        "firm_id": 2670,
        "firm_name": "Mjd Jedi fund",
        "firm_type": "bank",
        "city": "Hong Kong",
        "country": "China",
        "AUM": 426920827,
        "date_added": "2010-06-08T00:00:00Z",
        "last_updated": "2024-02-21T00:00:00Z",
        "established_at": "2010-06-08T00:00:00Z",
        "address": "29 Nathan Road, Hong Kong",
        "postal_code": "37E",
        "date_added_human_readable": "08 Jun 2010",
        "established_at_human_readable": "08 Jun 2010",
    }


def test_get_investor_not_found():
    response = client.get("api/investor/99999")
    assert response.status_code == 404
    assert response.json() == {"detail": "investor with id 99999 not found"}
