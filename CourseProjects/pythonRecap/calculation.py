def add(a, b):
    return a + b

def sub(a, b):
    return a - b

def mul(a, b):
    return a * b

def div(a, b):
    if b == 0:
        print("Cannot divide by zero")
        return None
    else:
        return a / b

zahl1 = input("Gib einen Wert ein: ")
zahl2 = input("Gib einen anderen Wert ein: ")

print(add(int(zahl1), int(zahl2)))
print(sub(int(zahl1), int(zahl2)))
print(mul(int(zahl1), int(zahl2)))
print(div(int(zahl1), int(zahl2)))