# Aufgabe 1: Klassenbeschreibung und Ist-Beziehung

# Teil A: 
# Wähle drei verschiedene Gegenstände in deinem Zimmer aus. Für jeden Gegenstand sollst du eine kurze Beschreibung erstellen, die folgende Punkte beinhaltet:

# Name des Gegenstandes
# Eine Eigenschaft: Beschreibe eine charakteristische Eigenschaft des Gegenstandes.
# Eine Funktion: Erkläre, welche Funktion oder welchen Zweck der Gegenstand erfüllt.

# Teil B: 
# Finde einen Gegenstand in deinem Zimmer, der in einer "Ist-Beziehung" zu einem anderen steht. Beispiel: "Ein Apfelbaum ist eine Pflanze." Beschreibe die Eigenschaften und die Funktion des übergeordneten Gegenstandes.


# Teil C:

# Nenne 2 Eigenschaften und 2 Funktionen der Klasse Fernseher.
# self.Fernseher = None

#def setFernseher(self, new_Fernseher):
#   self.Fernseher = new_Fernseher

#new_Fernseher = Computer

# class electronics():
#     def __init__(self): # __init__ ist ein Konstruktor der Klasse 
#         self.color = None # None hat keinen Datentyp
#         self.material = None
#         self.size = None
#         self.weight = None
#         self.manufacturer = None 
    
#     def setcolor(self, new_color):
#         self.color = new_color

#     def setmaterial(self, new_material):
#         self.material = new_material

#     def setsize(self, new_size):
#         self.size = new_size
    
#     def setweight(self, new_weight):
#         self.weight = new_weight
    
#     def setmanufacturer(self, new_manufacturer):
#         self.manufacturer = new_manufacturer

# class Computer(electronics):
#     def __init__(self):
#         self.cpu = None 
#         self.ram = None
#         self.gpu = None
#         self.harddrive = None
#         self.chassis = None
#         self.motherboard = None
#         self.powersupply = None
#         self.first_function = None
#         self.second_function = None

#     def setcpu(self, new_cpu):
#         self.cpu = new_cpu

#     def setram(self, new_ram):
#         self.ram = new_ram
    
#     def setgpu(self, new_gpu):
#         self.gpu = new_gpu

#     def setharddrive(self, new_harddrive):
#         self.harddrive = new_harddrive
    
#     def setchassis(self, new_chassis):
#         self.chassis = new_chassis
    
#     def setmotherboard(self, new_motherboard):
#         self.motherboard = new_motherboard
    
#     def setpowersupply(self, new_powersupply):
#         self.powersupply = new_powersupply
    
#     def setfirst_function(self, new_first_function):
#         self.first_function = new_first_function
    
#     def setsecond_function(self, second_function):
#         self.second_function = second_function

# my_Computer = Computer()
# def triggerquestions(platzhalter): 
#     my_Computer.setcolor(input(f"Welche Farbe hat der Computer? "))
#     my_Computer.setmaterial(input("Welches Material hat der Computer? "))
#     my_Computer.setsize(input("Wie groß ist der Computer?" ))
#     my_Computer.setweight(input("Wie schwer ist der Computer?" ))
#     my_Computer.setmanufacturer(input("Welcher Hersteller soll den Computer zusammenbauen? "))
# def components(platzhalter): 
#     my_Computer.setcpu(input("Welche CPU hat der Computer? "))
#     my_Computer.setram(input("Welchen RAM hat der Computer?" ))
#     my_Computer.setgpu(input("Welche GPU hat der Computer? "))
#     my_Computer.setharddrive(input("Welche Festplatte hat der Computer? "))
#     my_Computer.setchassis(input("Welches Gehäuse hat der Computer? "))
#     my_Computer.setmotherboard(input("Welches Motherboard hat der Computer? "))
#     my_Computer.setpowersupply(input("Welches Netzteil hat der Computer? "))
    
# def functions(platzhalter):
#     my_Computer.setfirst_function(input("Nenne eine Funktion, die der Computer haben soll: "))
#     my_Computer.setsecond_function(input("Nenne eine zweite Funktion, die der Computer haben soll: "))

# triggerquestions(my_Computer)

# components(my_Computer)

# functions(my_Computer)

# configuration = {
#     "Farbe" : my_Computer.color,
#     "Material" : my_Computer.material,
#     "Größe" : my_Computer.size,
#     "Gewicht" : my_Computer.weight,
#     "Hersteller" : my_Computer.manufacturer,
#     "CPU" : my_Computer.cpu,
#     "RAM" : my_Computer.ram,
#     "GPU" : my_Computer.gpu,
#     "Festplatte" : my_Computer.harddrive,
#     "Gehäuse" : my_Computer.chassis,
#     "Motherboard" : my_Computer.motherboard,
#     "Netzteil" : my_Computer.powersupply,
#     "Funktion 1" : my_Computer.first_function,
#     "Funktion 2" : my_Computer.second_function
# }

# setup_name = str(input("Wie soll dieses Setup heißen? ")) +".txt"

# with open(setup_name, "w") as file:
#     for key, value in configuration.items():
#         file.write(f"{key}: {value}\n")

# Aufgabe 2: Klasse Würfel
# Teil A:
# Erzeuge eine Klasse Würfel, mit der Funktion würfeln() und der Variable würfelzahl.
# würfeln() soll in der Konsole den Text ausgeben “Der Würfel würfelt”
# und die Zahl soll 1 sein.

# Ändere die Klasse so ab, dass sie bei der Initialisierung der Variable würfelzahl einen Zufallswert zwischen 1 und 6 gibt.
# Die Funktion würfeln() soll den Wert auf eine neue zufällige Zahl ändern, jedes mal wenn man sie aufruft. Füge die Ausgabe der würfelzahl sowohl der __init__() Funktion hinzu, als auch der würfeln() Funktion

import random

class dice:
    def __init__(self):
        self.count = random.randint(1, 6)

    def throw_dice(self):
        print(f"Der Würfel würfelt {self.count}")

my_dice = dice()        #Um die Werte und Funktionen in einer Klasse abzurufen, benötige ich ein Objekt.
my_dice.throw_dice()    #Mit my_dice.throw_dice() wird die Funktion mit "my_dice" abgespielt

# Aufgabe 3: Klasse Zähler
# Ein Zähler ist ein Gerät (Objekt), mit dem man hochzählen kann, und den man gezielt wieder auf Null setzen kann. Man benutzt solche Geräte z.B. bei Verkehrszählungen.

# Modelliere eine Klasse Zaehler, mit der man Objekte erzeugen kann, die sich wie Zähler in der Wirklichkeit verhalten. Berücksichtige vorerst noch nicht, dass es für die Zahl eine Obergrenze gibt.
# Erstelle eine Instanz von Zaehler und teste die Befehle und Ausgaben.

# Die Ausgabe der Instanz soll in etwa so aussehen
# 0, 1, 2, 3, 4, 5, 0, 1, 2 , 3, 0, 1, 2, 3, 4, 5, 6, 7 …
# Die 0 soll immer dann passieren, wenn der Zähler zurückgesetzt wird.

