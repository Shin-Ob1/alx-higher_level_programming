#!/usr/bin/python3
"""returns json representation of a string"""
import json


def to_json_string(my_obj):
    """returns the json representation of an object"""
    scr = json.dumps(my_obj)
    return scr
