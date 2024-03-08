# Pflichtteil:
# Aufgabe 1:

# Erstelle eine Variable mit einer zufälligen Zahl 1 und 100.

# a)

# Schreibe ein Programm das den User auffordert eine Zahl zwischen 1 und 100 einzugeben.
# Wenn die Nutzereingabe gleich der secret_number ist, soll "Richtig, Glückwunsch!" angezeigt werden. 
# Wenn die Nutzereingabe kleiner als die secret_number ist, soll "Zu klein, bitte nochmal versuchen."
# Wenn die Nutzereingabe größer als die secret_number ist, soll "Zu groß, bitte nochmal versuchen."
# Bei nicht richtig Tippen, bitte wieder von Vorn.

# b) optional:

# sollte der User eine Zahl kleiner 0 oder größer 100 eingeben -> "Eingabe nicht richtig, bitte nochmal versuchen."
# sollte der User keine Zahl eingeben -> "Eingabe nicht richtig, bitte nochmal versuchen."
# lasse die secret_number zufällig generieren.

import random

random_number = random.randint(1, 100)

def random_number_controll(user_input, random_number):
    if user_input == random_number:
        print(f"Richtig, Glückwunsch!")
        return True
    elif user_input < random_number:
        print(f"Zu klein, bitte nochmal versuchen.")
        return False
    elif user_input > random_number:
        print(f"Zu groß, bitte nochmal versuchen.")
        return False

while True:
    user_input_str = input("Bitte wähle eine Zahl zwischen 1 und 100: ")

    try:
        user_input = int(user_input_str)
        if random_number_controll(user_input, random_number):
                break
        else:
            print("Ungültige Eingabe. Bitte eine Zahl zwischen 1 und 100 eingeben.")
    except ValueError:
        print("Ungültige Eingabe. Bitte eine ganze Zahl eingeben.")

# Aufgabe 2:
# Verwendet das datetime Modul
# Schreibe in eine Datei. "Das Script wurde ausgeführt um: <Zeit>"

import datetime

current_time = datetime.datetime.now()
text = (f"Dieser Text wurde verfasst am: {current_time}", "Der Nutzer hinterließ folgende Botschaft: In Aufgabe 1 habe ich gelernt was try und except machen.", "Try versucht in unserem Fall die Eingabe in eine integer zu verwandeln, sollte dies nicht gehen, kommt except.", "Wenn keine integer erstellt werden kann, entsteht ein ValueError und da setzt except ValueError ein und gibt uns eine Nachricht wieder.", "Die Grüße stammen sich von: Julian")
name = str(input("Bitte wähle einen Betreff: "))
betreff = name + ".txt"

with open(betreff, "w") as file:
    for line in text:
        file.write(line + "\n")

print(f"Die Datei {betreff} wurde geschrieben")

# Aufgabe 3:
# 1 Installiere die emoji-Bibliothek
# 2 Informiere dich darüber, wie man diese Bibliothek nutzen kann
# 3 Importiere diese Bibliothek in ein neues Python-Skript und erstelle ein paar Beispiele (mindestens 2)

# Zusatz (freiwillig):
# Sucht euch eine der heute kennengelernten Coding Seiten:
# https://www.hackerrank.com/
# https://www.codewars.com/
# https://www.freecodecamp.org/

# Macht insgesamt 5 Challenges auf einer oder mehr Seiten eurer Wahl.

# ############################################################