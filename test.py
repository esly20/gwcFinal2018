print("Hello, World!")
answer = input("Who inspires you?")
print(answer,"inspires you!")
answer = input("Who's your favorite artist?")
print("Nice, they're great!")
f = 6
while True:
    f += 2
    if(f > 10):
        break
    # f is even
    if(f % 2 != 0):
        continue
print(f)
