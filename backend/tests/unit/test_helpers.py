import datetime
from ...src.lib.helpers import convert_datetime_to_human_readable


def test_convert_datetime_to_human_readable():
    # Test case 1: Convert a datetime object representing 1st January 2022
    date1 = datetime.datetime(2022, 1, 1)
    expected1 = "01 Jan 2022"
    assert convert_datetime_to_human_readable(date1) == expected1

    # Test case 2: Convert a datetime object representing 15th December 2023
    date2 = datetime.datetime(2023, 12, 15)
    expected2 = "15 Dec 2023"
    assert convert_datetime_to_human_readable(date2) == expected2

    # Test case 3: Convert a datetime object representing 31st March 2024
    date3 = datetime.datetime(2024, 3, 31)
    expected3 = "31 Mar 2024"
    assert convert_datetime_to_human_readable(date3) == expected3

    # Test case 4: Convert a datetime object representing 29th February 2024 (leap year)
    date4 = datetime.datetime(2024, 2, 29)
    expected4 = "29 Feb 2024"
    assert convert_datetime_to_human_readable(date4) == expected4

    broken_date = "2022-01-01"
    try:
        convert_datetime_to_human_readable(broken_date)
    except ValueError as e:
        assert str(e) == "Invalid Date"


test_convert_datetime_to_human_readable()
