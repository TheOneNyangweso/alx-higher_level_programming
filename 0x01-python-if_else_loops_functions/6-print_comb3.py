#!/usr/bin/python3
for a in range(0, 10, 1):
    for b in range(0,10,1):
        if (a == b):
            continue
        elif(a > b):
            continue
        elif (a != 8 and a != 9):
            print("{}{}, ".format(a,b), end='')
        else:
            print("{}{}".format(a,b))

