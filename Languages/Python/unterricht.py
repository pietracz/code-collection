# Erstelle eine Liste deiner Lieblingsbücher, indem du einige Buchtitel als Strings hinzufügst. Füge mindestens drei Bücher zur Liste hinzu. -> füg auch einige Titel doppel hinzu
# Konvertiere die Liste in ein Set namens einzigartige_buecher, um doppelte Einträge zu entfernen. Versuche, ein Buch doppelt in die Liste aufzunehmen, um zu sehen, wie das Set Duplikate behandelt.
# Erstelle ein Tupel namens buch_tuple aus der Liste, das die ersten drei Bücher enthält. Tupel sollen demonstrieren, wie unveränderliche Datentypen funktionieren.
# Erstelle ein Dictionary namens buch_bewertungen, das Buchtitel (als Schlüssel) und eine Bewertung von 1 bis 5 (als Wert) enthält. Füge Bewertungen für mindestens zwei Bücher hinzu.
# Ihr müsst nicht unbedingt Bücher nehmen. Könnt auch euch für Filme, serien oder was auch immer entscheiden :lächeln:

# buecher=["buch1", "buch2", "buch3", "buch1", "buch2", "buch3"]
# einzigartige_buecher=set(buecher)

# print(einzigartige_buecher)

# buch_tuple=tuple(buecher)
# print(buch_tuple[:3]) # -> slicing # -> print(buch_tuple[0:5:2]) -> slicing in 2er Schritte

# buch_bewertungen={
#     "buch1":1,
#     "buch2":2,
#     "buch3":3,
#     "buch4":4,
#     "buch5":5
# }

# print(buch_bewertungen)

# Daily Routine

# def daily_routine():
#     print("code", "eat", "sleep", "repeat", sep="\n")

# daily_routine()

# Weird Analysis

# user_input = input("Gib bitte eine Zahl ein: ")
# controll_input = 7

# def weird_analysis(placeholder):
#     if placeholder % 2 != 0:
#         return "Weird"
#     elif placeholder % 2 and placeholder >= 2 and placeholder <= 5:
#         return "Not Weird"
#     elif placeholder % 2 and placeholder >= 6 and placeholder <= 20:
#         return "Weird"
#     else:
#         return "Not Weird"

# processed_user_input = weird_analysis(int(user_input))
# processed_controll_input = weird_analysis(int(controll_input))

# if processed_user_input == processed_controll_input:
#     print("Good job!")

# API 
    
# import requests

# r = requests.get('https://jsonplaceholder.typicode.com/users')
# print(r.json())

# Object oriented programming
#generalise > classification of object
#vererbung > usage of prepared objects
#kapselung > 
#polymorphismus > overwrite 

# class car:
#     def __init__(self):
#         self.color = "blue"
#         self.wheels = 4
#         self.doors = 4
#         self.brand = "BMW"
#         self.seats = 4
#         self.driven_kilometer = 0

# def drive():
#     print("We drive")
# def gear_shift():
#     print("We shift gears")
# def turn():
#     print("We turn")
# def accelerate():
#     print("We accelerate")


class Tischlampe:
    def __init__(self):
        self.wood = "eiche"
        self.hight = 450
        self.light_color = "yellow"
        self.width = 100

    def turn_on(self):
        print(f"The lamp is on and shines in {self.light_color}")
    
    def turn_off(self):
        print("The lamp is off")

meine_Lampe = Tischlampe()
meine_Lampe.turn_on()

class kleine_Tischlampe(Tischlampe):
    def __init__(self):
        self.__width = 100 # __ verbietet den Zugriff von draußen, es dediziert eine Variable für die Klasse(Kapselung)