#!/usr/bin/python3
""" A class """


class MyList(list):
    """ Inherits the list class """

    def print_sorted(self):
        """prints a sorted list"""
        print(sorted(self))
