#!/usr/bin/python3
def uppercase(str):
    for s in str:
        if ord(s) in range(97, 123, 1):
            print("{}".format(chr(ord(s)-32), end=""))
    print('\n')
