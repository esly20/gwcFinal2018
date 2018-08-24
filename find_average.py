# given ages
# add all the  number values
# count the number of numbers and divide by that

# ages = [5, 12, 3, 56, 24, 78, 1, 15, 41]
#
# sum = 0
# for num in range(len(ages)):
#     sum += num
# avergae = sum/len(ages)
 import json

f = open("jsonPython.json", "r")
questions = json.load(f)
f.close()

# dictionary = ['name': 'colette', "age": 22]
# age_value = dictionary["age"]
sum = 0
for user in questions:
    age = int(user['age'])
    sum += age
average = sum/len(questions)
print(average)
