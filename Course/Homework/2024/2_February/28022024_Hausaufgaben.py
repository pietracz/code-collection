# Aufgabe 1
print(
    "Lorem ipsum dolor sit amet.",
    "Consectetur adipiscing elit.",
    "Sed do eiusmod tempor incididunt.",
    "Ut labore et dolore magna aliqua.",
    sep="\n"
)

# Alternative
# print("""
#    Lorem ipsum dolor sit amet.
#    Consectetur adipiscing elit.
#    Sed do eiusmod tempor incididunt.
#    Ut labore et dolore magna aliqua.
# """)

# Aufgabe 2
print("This is the second print statement to be fixed")
print("This is the third print statement to be fixed.")
print("This is the fourth print statement to be fixed.")
print("The following plus sign + should be visible in the output.")
print(
    "This print statement should do the following:",
    "It must print the text in multiple lines.",
    sep="\n"
)

# Aufgabe 3
first_name=input("Wie lautet dein Vorname? ")
second_name=input("Wie lautet dein Nachname? ")
phone_number=input("Unter welcher Telefonnummer bist du gut erreichbar? ")
adress=input("Unter welcher Adresse bist du postalisch am besten zu erreichen? ")

print(
    f"Vorname: {first_name}",
    f"Nachname: {second_name}",
    f"Telefonnummer: {phone_number}",
    f"Adresse: {adress}",
    sep="\n"
)

# Aufgabe 4
print(
    f"Der Vorname {first_name} hat {len(first_name)} Zeichen",
    f"Der Nachname {second_name} hat {len(second_name)} Zeichen",
    f"Die Telefonnummer {phone_number} hat {len(phone_number)} Zeichen",
    f"Die Adresse {adress} hat {len(adress)} Zeichen",
    sep="\n"
)

# Zusatzaufgabe 1
import math

max_students=input("Wie viele Studenten gibt es? ")
group_size=input("Was ist die optimale Gruppengröße? ")

groups=math.ceil(int(max_students)/int(group_size))
print(f"Du kannst {groups} Gruppen bilden.")

# Alternative

# studenten = int(input("Wie viele Studenten sind im Raum"))
# ziel_gruppen_groeße = int(input("Gewünschte Gruppengröße:"))
# gruppen_groeße = studenten // ziel_gruppen_groeße
# rest = studenten % ziel_gruppen_groeße
# if rest > 0:
#     gruppen_groeße += 1
# print(gruppen_groeße)