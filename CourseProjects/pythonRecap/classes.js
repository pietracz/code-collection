class Car {
  constructor(name, brand, year) {
    this.name = name;
    this.brand = brand;
    this.year = year;
  }

  startEngine() {
    console.log('Engine started');
  }
}

const myCar = new Car('Mustang', 'Ford', 2010);
console.log(myCar);
