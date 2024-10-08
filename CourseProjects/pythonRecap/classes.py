class Auto:
    def __init__(self, name, brand, year):
        self.name = name
        self.brand = brand
        self.year = year

    def startEngine(self):
        print('Engine started')


myCar = Auto('Mustang', 'Ford', 2010)

myCar.startEngine()
