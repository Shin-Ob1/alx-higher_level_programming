#!/usr/bin/python3
"""Take URL, sends request and displays value"""
import sys
import urllib.request


if __name__ == "__main__":
    url = sys.argv[1]

    request = urllib.request.Request(url)
    with urllib.request.urlopen(request) as resp:
        print(dict(resp.headers).get("X-Request-Id"))