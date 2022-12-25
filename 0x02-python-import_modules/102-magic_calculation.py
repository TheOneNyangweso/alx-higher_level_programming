#!/usr/bin/python3

if __name__ == "__main__":
    from sys import argv
    from calculator_1 import add, sub, mul, div

    n = len(argv)
    opr = ['+', '-', '*', '/']
    a = int(argv[1])
    b = int(argv[3])

    if n != 4:
        print(argv[1])
        print(n)
        print("Usage: ./100-my_calculator.py <a> <operator> <b>")
        exit(1)
    else:
        if argv[2] == opr[0]:
            print("{} {} {} = {}".format(argv[1], argv[2], argv[3], add(a, b)))
            exit(0)
        elif argv[2] == opr[1]:
            print("{} {} {} = {}".format(argv[1], argv[2], argv[3], sub(a, b)))
            exit(0)
        elif argv[2] == opr[2]:
            print("{} {} {} = {}".format(argv[1], argv[2], argv[3], mul(a, b)))
            exit(0)
        elif argv[2] == opr[3]:
            print("{} {} {} = {}".format(argv[1], argv[2], argv[3], div(a, b)))
            exit(0)
        else:
            print("Unknown operator. Available operators: +, -, * and /")
            exit(1)
