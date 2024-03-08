# Aufgabe 1. Grundlagen:
#    - Definiere eine Funktion, die "Hallo, Welt!" auf der Konsole ausgibt.
#    - Erstelle eine weitere Funktion, die einen Namen als Parameter nimmt und diesen Namen über print ausgibt

# name = input("Wie lautet dein Namen? ")

# def hallo():
#     return f"Hallo, Welt!"

# def greetings(name):
#     return f"Hallo, {name}!"

# print(greetings(name))
# print(hallo())

# Aufgabe 2. Bedingungen und Verzweigungen:
#    - Schreibe ein Skript, das den Benutzer nach seinem Alter fragt und dann ausgibt, ob er volljährig ist oder nicht. Die Kontrolle, ob der Nutzer volljährig ist, soll in einer Funktion definiert sein. 
# - Rufe diese Funktion in deinem Skript auf

# age = int(input("Wie alt bist du?"))

# def is_adult(age):
#     if age >= 18:
#         return f"Mit {age} Jahren bist du ein Erwachsener."
#     elif age < 18:
#         return f"Mit {age} Jahren bist du kein Erwachsener."

# print(is_adult(age))

# Aufgabe 3. Datenstrukturen:
#    - Erstelle ein Skript, das ein Wörterbuch von mindestens 4 englischen und deutschen Begriffen hat und den Benutzer nach einem Begriff fragt, um die Übersetzung anzuzeigen.
# Hinweis: Hier eignet sich ein dictionary :)

# dictionary = {
#     "English": "Englisch",
#     "German": "Deutsch",
#     "French": "Französisch",
#     "Spanish": "Spanisch",
#     "Italian": "Italienisch",
#     "Portuguese": "Portugiesisch",
#     "Russian": "Russisch",
#     "Chinese": "Chinesisch",
#     "Japanese": "Japanisch",
#     "Arabic": "Arabisch"
# }

# def translate(query):
#     if query in dictionary:
#         print(f"Deine Übersetzung lautet {dictionary[query]}")
#         return True
#     else:
#         print(f"Das Wort {query} konnte nicht gefunden werden, versuche es bitte erneut.")

# while True:
#     query = input("Wie lautet das Wort, das du übersetzen willst? ")

#     if translate(query) == True:
#         break

# Aufgabe 4. Funktion und schleife:
# Schreibe eine Funktion mit dem Namen print_many_times(text, times), die einen String und eine Ganzzahl als Argumente akzeptiert. Das Integer-Argument gibt an, wie oft das String-Argument ausgedruckt werden soll:
# Beispielaufrufe:
# print_many_times("hi", 5)

# text = "Ich werde mehrmals aufgerufen"
# times = 3
# print_many_times(text, times)

# Beispielausgabe:
# hi
# hi
# hi
# hi
# hi

# Ich werde mehrmals aufgerufen
# Ich werde mehrmals aufgerufen
# Ich werde mehrmals aufgerufen

# text=input("Was willst du sagen? ")
# times=int(input("Wie oft willst du es sagen? "))
          
# def print_many_times(text, times):
#     for i in range(times):
#         print(text)

# print_many_times(text, times)

# Zusatzaufgaben:
# 1. Funktion Advanced:
# - Definiere die mathematischen Funktionen (falls noch nicht geschehen) multiplizieren, addieren, subtrahieren 
# - Definiere eine Funktion, die anhand eines Eingabewertes die jeweilige Funktion aufruft. Mögliche Werte für diesen Eingabewert sollten also "add", "sub", "mult" sein. Falls keiner der Werte mitgegeben wird, soll eine Fehlermeldung auf der Konsole erscheinen. Zusätzlich zu dem genannten Eingabewert, sollen 2 Zahlen als Parameter an die Funktion übergeben werden.
# - Rufe diese Funktion in deinem Skript auf

first_number = int(input("Nenne mir eine erste Zahl: "))
second_number = int(input("Nenne mir eine zweite Zahl: "))
operator = input("Mit welchem Rechenoperator möchtest du beide Zahlen verrechnen? ")

def calculate(first_number, second_number, operator):
    result = eval(f"{first_number} {operator} {second_number}")
    return f"Die Berechnung ist {first_number} {operator} {second_number} = {result}"

print(calculate(first_number, second_number, operator))

#######Alternative#######


# Definition der mathematischen Funktionen
def addieren(x, y):
    return x + y

def subtrahieren(x, y):
    return x - y

def multiplizieren(x, y):
    return x * y

# Funktion, die basierend auf dem Eingabewert die entsprechende mathematische Funktion aufruft
def operation_ausfuehren(aktion, zahl1, zahl2):
    if aktion == "add":
        return addieren(zahl1, zahl2)
    elif aktion == "sub":
        return subtrahieren(zahl1, zahl2)
    elif aktion == "mult":
        return multiplizieren(zahl1, zahl2)
    else:
        print("Fehler: Unbekannte Operation. Bitte 'add', 'sub' oder 'mult' verwenden.")

# Beispielaufufe der Funktion
print(operation_ausfuehren("add", 5, 3))  # Erwartetes Ergebnis: 8
print(operation_ausfuehren("sub", 10, 4))  # Erwartetes Ergebnis: 6
print(operation_ausfuehren("mult", 3, 7))  # Erwartetes Ergebnis: 21
operation_ausfuehren("div", 9, 3)  # Erwartete Fehlermeldung

# 2. Zusatzaufgabe: Research
#    - Schreibe ein Skript, das einen Text in eine Datei schreibt und dann den Inhalt der Datei liest und ausgibt.
