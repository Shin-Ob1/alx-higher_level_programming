#!/usr/bin/python3
"""Sends request to a given URL and displays the response body"""
import sys
import requests


if __name__ == "__main__":
    url = sys.argv[1]

    re = requests.get(url)
    if re.status_code >= 400:
        print("Error code: {}".format(re.status_code))
    else:
        print(re.text)
