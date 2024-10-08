with open("input.txt", "w") as file:
    file.write("Hello, World!")

with open("input.txt", "r") as file:
    data = file.read()

print(data)
