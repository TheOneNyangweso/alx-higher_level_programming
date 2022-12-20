#!/usr/bin/python3
def print_last_digit(number):
    if type(number) is not str:
        num = str(number)[-1]
        print("{}".format(num), end="")
        return num
