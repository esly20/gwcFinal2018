def intro():
    print("Welcome to chatbox!")

def greeting():
    print("Hello! How are you?")

def convo():
    print("How is your day? Do you want to see a drawing?")

def cat():
    print(" /\__/\ ")
    print(">| O O|<")
    print(" |  ^ |")
    print(" ______")
    print("I'm not a good artist")

def goodbye():
    print("See ya!")
    exit()

def say_default():
    print("That's cool!")

def is_valid_input(user_input, valid_responses):
    return user_input in valid_responses

def main():
    intro()
    while True:
        answer = input("(What will you say?) ")
        process_input(answer)

def process_input(user_answer):
    Hellos = ["hi", "hello","hola","hey","sup", "yo", "yeerrr"]
    Goodbyes = ["bye", "adios", "goodbye","see ya later","see you later"]
    states = ["okay", "good","bad", "okay"]
    day = ["sure","yeah","yes"]
    if is_valid_input(user_answer, Hellos):
        greeting()
    elif is_valid_input(user_answer, states):
        convo()
    elif is_valid_input(user_answer, day):
        cat()
    elif is_valid_input(user_answer,Goodbyes):
        goodbye()
    else:
        say_default()

# DON'T TOUCH! Setup code that runs your main() function.
if __name__ == "__main__":
  main()
