# Aufgabe 1 
# Schreibe ein Programm, das den Benutzer nach einer Ganzzahl fragt. Wenn die Zahl kleiner als Null ist, sollte das Programm die mit -1 multiplizierte Zahl ausgeben. Andernfalls gibt das Programm die Nummer unverändert aus.
# Beispielsausgabe:
# Bitte geben Sie eine Zahl ein: -7
# Der Absolutwert dieser Zahl ist 7.
# Bitte geben Sie eine Zahl ein: 1
# Der Absolutwert dieser Zahl ist 1.

eingabe=int(input("Gib mir bitte eine  Zahl:"))

if eingabe < 0:
    print(f"Der absolute Wert deiner Zahl beträgt {(eingabe * -1)}")
elif eingabe >= 0:
    print(f"Der absolute Wert deiner Zahl beträgt {eingabe}")

# Aufgabe 2 
# Behebe alle Fehler im folgenden Code:
    
zahl = int(input("Bitte geben Sie eine Zahl ein: "))
if zahl > 100:
    print("Die Zahl war größer als einhundert.")
    zahl -= 100
    print("Nun wurde ihr Wert um einhundert verringert.")
    print(f"Ihr Wert ist jetzt {zahl}")
print(f"{zahl} muss meine Glückszahl sein!")
print("Einen schönen Tag noch!")

# Aufgabe 3 
# Schreibe ein Taschenrechner-Programm, das den Benutzer nach zwei Zahlen und einer Operation fragt. Wenn es sich bei der Operation um einer gültigen arithmetischen Operation handelt, sollte das Programm das Ergebnis der Operation mit den angegebenen Zahlen berechnen und ausdrucken. Wenn der Benutzer etwas anderes eingibt, sollte das Programm „Unbekannte Eingabe“ ausgeben.
# Beispielsausgabe:
# Number 1: 10
# Number 2: 17
# Operation: add
# 10 + 17 = 27

while True:

    first_number=float(input("Gib mir bitte eine Zahl: "))
    second_number=float(input("Gib mir bitte eine zweite Zahl: "))
    operator=input("Gib mir bitte einen Operator, mit den du beide Zahlen verrechnen willst: ")

    if operator in ["/", "*", "-", "+"]:
        if operator == "/":
            print(f"Das Ergebnis beträgt: {(first_number) / (second_number)}")
            break
        elif operator == "*":
            print(f"Das Ergebnis beträgt: {(first_number) * (second_number)}")
            break
        elif operator == "-":
            print(f"Das Ergebnis beträgt: {(first_number) - (second_number)}")
            break
        elif operator == "+":
            print(f"Das Ergebnis beträgt: {(first_number) + (second_number)}")
            break
    else:
        print(f"{operator} ist eine ungültige Eingabe, versuche es bitte erneut.")

# Aufgabe 4
# Schreibe ein Programm, das eine Liste von Zahlen durchläuft, alle geraden Zahlen identifiziert und deren Summe berechnet.

number=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
even_number=0

for even in number:
    if even % 2 == 0:
        even_number += even

print(f"Das Ergebnis beträgt {even_number}")

# Extra 1
# Schreibe ein Programm, das nach der Wettervorhersage für morgen fragt und dann wettergerechte Kleidung vorschlägt.
# Der Vorschlag sollte sich ändern, wenn die Temperatur (gemessen in Grad Celsius) über 20, 10 oder 5 Grad liegt und auch wenn Regen auf dem Radar ist.
# Beispielsausgabe:
# Temperatur: 21
# Wird es regnen (ja/nein): nein
# Trage Jeans und ein T-Shirt.
# Was ist die Wettervorhersage für morgen?
# Temperatur: 11
# Wird es regnen (ja/nein): nein
# Trage Jeans und ein T-Shirt.
# Ich empfehle auch einen Pullover.
# Was ist die Wettervorhersage für morgen?
# Temperatur: 7
# Wird es regnen (ja/nein): nein
# Trage Jeans und ein T-Shirt.
# Ich empfehle auch einen Pullover.
# Nimm eine Jacke mit.
# Was ist die Wettervorhersage für morgen?
# Temperatur: 3
# Wird es regnen (ja/nein): ja
# Trage Jeans und ein T-Shirt.
# Ich empfehle auch einen Pullover.
# Nimm eine Jacke mit.
# Mach daraus eigentlich einen warmen Mantel.
# Ich denke, Handschuhe sind angebracht.
# Vergiss deinen Regenschirm nicht!

temperature_today=int(input("Wie viel Grad sind es heute?"))        # -> input for variable specific values via api
temperature_tomorrow=int(input("Wie viel Grad sind es morgen?"))    # -> input for variable specific values via api
rainy_today=input("Regnet es heute?")                               # -> input for variable specific values via api
rainy_tomorrow=input("Regnet es morgen?")                           # -> input for variable specific values via api

temperature_20=["Heute wird es sehr warm, du musst dich also nicht warm anziehen!", "Heute reicht es, wenn du dich leicht bekleidest", "Pack dir lieber eine Abkühlung ein!"]
temperature_10=["Nimm das Wetter nicht auf die leichte Schulter, zieh lieber eine Jacke an!", "Vergiss deine Jacke nicht!", "Zieh dir lieber dicke Socken an!"]
temperature_5=["Eine einfache Jacke wird heute wohl nicht reichen", "Pack dich lieber dick ein!"]
temperature_0=["Willst du wirklich raus?", "Bleib am besten Zuhause!"]

rainy_yes=[]
rainy_no=[]

if temperature_today >= 20 and rainy_today.lower() == "ja":
    print("Es wird heute sehr warm. Du musst dich also nicht warm anziehen, aber pack dir dennoch einen Regenschirm ein!")
elif temperature_today >= 20 and rainy_today.lower() == "nein":
    print("Es wird heute sehr warm. Du musst dich also nicht warm anziehen!")
elif temperature_today >= 10 and rainy_today.lower() == "ja":
    print("Heute wird es nicht so warm, zieh dich also besser etwas wärmer an, am besten packst du dir auch einen Regenschirm ein.")
elif temperature_today >= 10 and rainy_today.lower() == "nein":
    print("Heute wird es nicht so warm, zieh dich also besser etwas wärmer an!")
elif temperature_today >= 5 and rainy_today.lower() == "ja":
    print("Heute wird es relativ kalt, zieh dich also besser etwas wärmer anund pack dir einen Regenschirm ein!")
elif temperature_today >= 5 and rainy_today.lower() == "nein":
    print("Heute wird es relativ kalt, zieh dich also besser etwas wärmer an!")
else:
    print("Bleib besser Zuhause.")

# if temperature_today >= 20 and rainy_today.lower() == "ja":
#     print(f"randomize temperature_20 + randomize rainy_yes)

