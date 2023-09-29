#!/usr/bin/python3
"""Takes in a URL, sends request displays body"""


if __name__ == "__main__":
    import sys
    from urllib import request, error

    try:
        with request.urlopen(sys.argv[1]) as res:
            print(res.read().decode('UTF-8'))
    except error.HTTPError as erro:
        print('Error code:', erro.code)
