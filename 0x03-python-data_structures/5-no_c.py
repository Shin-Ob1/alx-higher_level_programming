#!/usr/bin/python3

def no_c(my_string):
    string = [x for x in my_string if x != 'c' and x != 'C']
    new_string = ("".join(string))
    return (new_string)
