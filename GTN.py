answer = 13
g = 0
while g < 3:
    g += 1
    guess = input('Guess a number between 1 and 25 (inclusive):')
    if not guess.isnumeric():
        print('Try Again!')
    else:
        guess = int(guess)

        guess = input('Guess a number between 1 and 25 (inclusive):')
        guess = int(guess)
            if guess > answer:
                print('Try again! The answer is lower')
            if guess < answer:
                print('Try again! The answer is higher')
            if guess == answer:
                print('Good Job!')
                break
