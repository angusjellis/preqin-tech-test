from datetime import datetime
from pydantic import BaseModel, PositiveInt, computed_field


class Firm(BaseModel):
    firm_id: PositiveInt
    firm_name: str
    AUM: PositiveInt
    date_added: datetime
    last_updated: datetime
    established_at: datetime
    firm_type: str
    city: str
    country: str
    address: str
    postal_code: str

    @computed_field(return_type=str)
    @property
    def date_added_human_readable(self):
        return self.date_added.strftime("%d %b %Y")

    @computed_field(return_type=str)
    @property
    def established_at_human_readable(self):
        return self.established_at.strftime("%d %b %Y")
