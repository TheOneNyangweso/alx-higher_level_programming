#!/usr/bin/python3
import random
number = random.randint(-10000, 10000)
num = str(number)[-1]
if number > 0:
    if (int(num) > 5 and number > 0):
        print("Last digit of {0} is {1} and is greater than 5".format(number,num))
    elif (int(num) < 6 and int(num) != 0):
        print("Last digit of {0} is {1} and is less than 6 and not 0".format(number,num))
elif (number == 0):
    print("Last digit of {0} is {1} and is 0".format(number,num))
elif number < 0:
    if (int(num) < 6 and int(num) != 0):
        print("Last digit of {0} is -{1} and is less than 6 and not 0".format(number,num))
