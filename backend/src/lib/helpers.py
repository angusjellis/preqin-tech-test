from datetime import datetime


def convert_datetime_to_human_readable(date: datetime) -> str:
    """
    Converts a datetime object to a human-readable string format.

    Args:
        date (datetime): The datetime object to be converted.

    Returns:
        str: The human-readable string representation of the datetime object.
    """
    if not isinstance(date, datetime):
        raise ValueError("Invalid Date")
    return date.strftime("%d %b %Y")
