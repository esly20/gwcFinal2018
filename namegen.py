from random import *

for g in range(0,30):
    
    randomFirstName = ["Yamiah", "Ashley", "Nickol", "Femi","Liliana"]
    randomLastNames = ["McNair", "Chung", "Daniel", "Jara", "Flores"]

    randomNumber1 = randint(0, len(randomFirstName) - 1)
    randomNumber2 = randint(0, len(randomLastNames) - 1)

    print(randomFirstName[randomNumber1], randomLastNames[randomNumber2])
