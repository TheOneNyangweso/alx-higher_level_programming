#!/usr/bin/python3
for num in range(97, 123, 1):
    if (num == 101 or num == 113):
        continue
    else:
        print("{}".format(chr(num)), end = '')
