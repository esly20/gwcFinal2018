answer = input("Do you want to start the game?")
while answer.lower() != 'yes':
    answer = input("Do you want to start the game?")
if answer.lower() == "yes":
    answer = input("Do you want to go to the beach or mountains?")
    while answer.lower() != "beach" or "mountains":
        answer = input("Do you want to go to  the beach or mountains?")
    if answer.lower() == "beach":
        answer = input("Do you want to play in the sand or surf?")
        while answer.lower() != "sand" or "surf":
            answer = input("Do you want to play in the sand or surf?")
        if answer.lower() == "sand":
            answer = input("You built a sand castel!")
        elif answer.lower() == "surf":
            answer = input("You caught a wave!")
    if answer.lower() == "mountains":
        answer = input("Do you want to ski or snowboard?")
        if answer.lower() == "ski":
            answer = input("You lost a ski pole!")
        elif answer.lower() == "snowboard":
            answer = input("You met Shaun White!")
