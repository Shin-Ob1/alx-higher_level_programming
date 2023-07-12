#!/usr/bin/python3
"""returns dictionary description with a sample data structure"""


def class_to_json(obj):
    """returns dictionary decription with sample data structure"""
    return obj.__dict__
