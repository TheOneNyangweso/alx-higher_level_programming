#!/usr/bin/python3
if __name__ == "__main__":
    for i in range(1,101,1):
        if (i % 3 == 0) and (i % 5 == 0):
            print("FizzBuzz", end=" ")
        elif i % 3 == 0:
            print("Fizz", end=" ")
        elif i % 5 == 0:
            print("Buzz", end=" ")
        else:
            print("{}".format(i), end=" ")
