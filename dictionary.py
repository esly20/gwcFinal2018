import json

def questions():
    survey_answer = {}
    name = input("What's your name?")
    survey_answer["name"] = name
    color = input("What's your favorite color?")
    survey_answer['color'] = color
    zodiac = input("What's your zodiac sign?")
    survey_answer['zodiac'] = zodiac
    food = input("What's your favorite fast food?")
    survey_answer['food'] = food
    phone = input("Do you have an IPhone or Android?")
    survey_answer['phone'] = phone
    wombEviction = input("When's your birthday?")
    survey_answer['wombEviction'] = wombEviction
    return survey_answer



def main():
    surveys = []

    go = True
    while True:
        surveys.append(questions())
        answer = input('Do you want to retake this survey?')
        if answer.lower() =="no":
            break
main()

f = open("jsonPython.json", "w")
json.dump(questions, f)
f.close()
