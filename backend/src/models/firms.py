from datetime import datetime
from pydantic import BaseModel, PositiveInt, computed_field
from src.lib.helpers import convert_datetime_to_human_readable


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
        return convert_datetime_to_human_readable(self.date_added)

    @computed_field(return_type=str)
    @property
    def established_at_human_readable(self):
        return convert_datetime_to_human_readable(self.established_at)
