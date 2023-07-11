#!/usr/bin/python3
""" Contains a class `MyInt` that inherits from `int """


class MyInt(int):
    """MyInt class (inherits int)"""

    def __eq__(self, value):
        """Checks out equality"""
        return self.real != value

    def __ne__(self, value):
        """Checks out non-equality"""
        return self.real == value
