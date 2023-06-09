#!/usr/bin/python3
""" Module contains implementation of `Square` class"""
Rectangle = __import__('9-rectangle').Rectangle


class Square(Rectangle):
    """ Square class """
    def __init__(self, size):
        """ Init method """
        self.integer_validator("size", size)
        super().__init__(size, size)
        self.__size = size
