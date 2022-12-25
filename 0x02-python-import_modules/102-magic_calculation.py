#!/usr/bin/python3

if __name__ == "__main__":
    """ A basic calculator taking arguments from CLI"""
    import sys
    from sys import argv
    from calculator_1 import add, sub, mul, div

    opr = {"+": add, "-": sub, "*": mul, "/": div}
    a = int(argv[1])
    b = int(argv[3])

    if len(argv) != 4:
        print("Usage: ./100-my_calculator.py <a> <operator> <b>")
        sys.exit(1)
    else:
        if argv[2] in  list(opr.keys()):
            print("{} {} {} = {}".format(argv[1], argv[2], argv[3], opr[argv[2]](a, b)))
            sys.exit(0)
        else:
            print("Unknown operator. Available operators: +, -, * and /")
            sys.exit(1)
