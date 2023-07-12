#!/usr/bin/python3
"""returns python data structure"""
import json


def from_json_string(my_str):
    """Return the Python object representation of a JSON string."""
    scr = json.loads(my_str)
    return scr
