def removeSubs(password):
    subs = {"4": "a", "5": "s", "3": "e", "0": "o", "1": "i", "6": "g"}
    for ch in password:
        if ch in subs:
            password = password.replace(ch, subs[ch])
    return password

def checkDictionary(password, words):
    if password in words:
        return password
        # print("Your password is not secure!")
    else:
        return password
        # print("Good password!")

def hasNums(password):
    for i in range(len(password)):
        if password[i].isdigit():
            if password[i:].isdigit():
                return password[:i]
    return password
#for index in password
    #if character at index is number
        #check if all characters after are numbers
            #check substring of password before index agent dictionary
#removeSubs
#checkDictionary
def wordCut(password, words):
    for i in range(len(password)):
        if password[:i] in words and password[i:] in words:
            return True
    return False
#

def main():
    #Opens a file. You can now look at each line in the file individually with a statement like "for line in f:
    f = open("dictionary.txt","r")

    print("Can your password survive a dictionary attack?")

    #Take input from the keyboard, storing in the variable test_password
    #NOTE - You will have to use .strip() to strip whitespace and newlines from the file and passwords
    test_password = input("Type in a trial password: ")

    #Write logic to see if the password is in the dictionary file below here:
    words = []
    for line in f:
        line = line.strip()
        words.append(line)
    f.close()

    first_password = removeSubs(test_password)
    print(first_password)
    if not checkDictionary(first_password, words):
        second_password = hasNums(test_password)
        wordCut(second_password, words)
        if checkDictionary(second_password, words):
            print("Bad password")
        else:
            print("Good password")
    else:
        print("Bad password")

if __name__ == '__main__':
    main()
