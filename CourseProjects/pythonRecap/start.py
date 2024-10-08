x = 10

if x < 10:
    print("x is less than 10")
elif x > 10:
    print("x is greater than 10")

zahl1 = 10
zahl2 = 20
zahl3 = 30

def addieren(a, b):
    return a + b

add = lambda a, b: a + b

print(add(5, 6))

print(addieren(5, 6))

i = 0
while i < 5:
    print(i)
    i += 1

for i in range(5):
    print(i)

fruechte = ["Apfel", "Birne", "Kirsche"]
fruechte.append("Zitrone")

print(fruechte)