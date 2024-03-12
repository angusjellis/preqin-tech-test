from ...src.models.firms import Firm

test_firm = Firm(
    firm_id=10101,
    firm_name="Soul-net Investment Fund",
    firm_type="bank",
    city="New York",
    country="USA",
    AUM=426920827,
    date_added="2010-09-02",
    last_updated="2024-03-12",
    established_at="2009-01-07",
    address="101 Wallaby Way, New York",
    postal_code="SK8",
)


def test_human_readable_dates():
    assert test_firm.date_added_human_readable == "02 Sep 2010"
    assert test_firm.established_at_human_readable == "07 Jan 2009"
