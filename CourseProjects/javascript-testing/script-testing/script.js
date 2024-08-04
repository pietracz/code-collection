/* let pointInput = prompt("Wie viele Punkte wurden erzielt?")

function feedback(pointInput) {
   let pointInputParse = parseFloat(pointInput)

    if (pointInputParse >= 90) {
        console.log(`Du hast ${pointInputParse} Punkte erzielt! Sehr gut!`)
    } else if (pointInputParse <= 90 && pointInputParse >= 80) {
        console.log(`Du hast ${pointInputParse} Punkte erzielt! Gut!`)
    } else if (pointInputParse <= 80 && pointInputParse >= 70) {
        console.log(`Du hast ${pointInputParse} Punkte erzielt! Befriedigend!`)
    } else if (pointInputParse <= 70 && pointInputParse >= 60) {
        console.log(`Du hast ${pointInputParse} Punkte erzielt! Ausreichend!`)
    } else if (pointInputParse <= 60) {
        console.log(`Du hast ${pointInputParse} Punkte erzielt! Nicht bestanden!`)
    }
}

feedback(pointInput)

 let firstName = prompt("Wie heißt du mit Vornamen?")
 let ageInput = prompt("Wie alt bist du?")

 function tarifCheck(ageInput) {
     let ageInputParse = parseInt(ageInput)

     if (ageInputParse <= 7) {
         let flat = "Kleinkindtarif"
         return flat;
     } else if (ageInputParse > 7 && ageInputParse <= 17) {
         let flat = "Kindertarif"
         return flat;
     } else if (ageInputParse > 17 && ageInputParse <= 66) {
         let flat = "Erwachsenentarif"
         return flat;
     } else if (ageInputParse > 66) {
         let flat = "Seniorentarif"
         return flat;
     }
 }

 flat = tarifCheck(ageInput)

 function priceCheck(flat) {

     if (flat === "Kleinkindtarif") {
         let price = 0.00
         return price;
     } else if (flat === "Kindertarif") {
         let price = 3.50
         return price;
     } else if (flat === "Erwachsenentarif") {
         let price = 7.00
         return price;
     } else if (flat === "Seniorentarif") {
         let price = 3.50
         return price;
     }
}

price = priceCheck(flat)

const zielClass = document.querySelector('.test');

const outputText = `Hallo ${firstName}, schön dich an Bord zu haben. Mit ${ageInput} Jahren fährst du im ${flat}. Das entspricht einem Preis von: ${price} €.`;
zielClass.textContent = outputText;

let temperature = prompt("Wie viel Grad Celsius sind es heute bei dir?")

function celsiusToFahrenheit(temperature) {
    let fahrenheit =(temperature * 1.8) +32
    return fahrenheit;
}

fahrenheit = celsiusToFahrenheit(temperature)

console.log(`Deine angegebenen ${temperature} Grad Celsius, entsprechen ${fahrenheit} Fahrenheit!`)

let targetClass = document.querySelector('.test')

let outputText = `Deine angegebenen ${temperature} Grad Celsius, entsprechen ${fahrenheit} Fahrenheit!`

targetClass.textContent = outputText;

let emptyList = [];

let addToList1 = prompt("Gib bitte eine Programmiersprache an.")
let addToList2 = prompt("Gib bitte eine zweite Programmiersprache an.")
let addToList3 = prompt("Gib bitte eine dritte Programmiersprache an.")
let addToList4 = prompt("Gib bitte eine vierte Programmiersprache an.")
let addToList5 = prompt("Gib bitte eine fünfte Programmiersprache an.")

emptyList.push(addToList1, addToList2, addToList3, addToList4, addToList5)

for (i of emptyList) {
     console.log(i)
} */

/* let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let test = document.getElementById("test");

let button3 = document.getElementById("button3");
let picture = document.getElementById("picture");

let scaling = document.getElementById("scaling");

let plus = document.getElementById("plus");
let minus = document.getElementById("minus");

let scale = 1.0;

button1.onclick = function colorRandomizer() {
    let colors = ["#FFFFFF", "#4B4E6D", "#899878", "#F45D01", "#92140C" ]
    let colorIndex = Math.floor(Math.random() * colors.length);
    let colorPicker = colors[colorIndex];
    test.style.backgroundColor = colorPicker;
};

button2.onclick = function colorRandomizer() {
        let colors = ["#FFFFFF", "#4B4E6D", "#899878", "#F45D01", "#92140C" ]
        let colorIndex = Math.floor(Math.random() * colors.length); /* syntax for randomizing
        let colorPicker = colors[colorIndex]; /* selecting index after calculation
        test.style.color = colorPicker;
};

/*
button3.onclick = function () {
    if (picture.style.visibility === "hidden") {
        picture.style.visibility = "visible";
    } else {
        picture.style.visibility = "hidden";
    }
}

plus.onclick = function () {
    if (scale < 1.10) {
    scale += 0.05;
    scaling.style.scale = scale;
    } else if (scale >= 1.1) {
        alert("You shall not add another plus!");
    }
};

minus.onclick = function () {
    scale -= 0.1;
    scaling.style.scale = scale;
} */

/* Fat Arrow Beispiel
buttonTest.onclick = () => (p.style.color = getColor());

function getColor() {
    let colors = ["#FFFFFF", "#4B4E6D", "#899878", "#F45D01", "#92140C" ]
    let colorIndex = Math.floor(Math.random() * colors.length); (syntax for randomizing)
    let colorPicker = colors[colorIndex];  (selecting index after calculation)
    return colorPicker;
}
*/

/* revolver Beispiel
let colorArray = ["#FFFFFF", "#4B4E6D", "#92140C"];
let currentColor = 0;
function revolverColor() {
    if (currentColor == colorArray.length -1) {
        currentColor = 0;
    } else {
        currentColor++;
}
} */

/* random colorPicker Beispiel

function randomColorPicker() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
}

color = `rgp(${r}, ${g}, ${b})` */

// Aufgabe 1
// Nehmen wir an, du hast eine traditionelle Funktion, die zwei Zahlen addiert.
// Deine Aufgabe ist es, diese Funktion in eine Arrow Function umzuwandeln.
//function add(a, b) {
//    return a + b;
//}

let a = 10;
let b = 10;
add = (a,b) => (a+b);

console.log(add(a,b));

// Aufgabe 2
// Verwende eine Arrow Function in Kombination mit der Array-Methode .filter(),
// um ein Array von Zahlen zu filtern und nur diejenigen Zahlen zurückzugeben, die größer als 10 sind.

let numbers = [5, 11, 8, 20, 7, 15];

let filteredNumbers = numbers.filter(numbers => numbers >= 10)

console.log(filteredNumbers);

//Aufgabe 3
// Du hast ein Array von StringList:
// Erzeuge ein neues Array in dem alle Tiere in ausschließlich in Großbuchstaben geschrieben sind.
// Erzeuge ein neues Array in dem alle Tiere in ausschließlich in Kleinbuchstaben geschrieben sind.

let animals = ["Lion", "Tiger", "Elephant", "Giraffe", "Zebra"];

let lowerCaseAnimals = animals.map(function(placeholder) {
    return placeholder.toLowerCase();
}
)

console.log(lowerCaseAnimals);

/* let lowerCaseAnimals = animals.map( animals => animals.toLowerCase());
console.log(lowerCaseAnimals); */

/* let upperCaseAnimals =  animals.map( placeholder => placeholder.toUpperCase([1]));
console.log(upperCaseAnimals) */

// Aufgabe 4
// Du hast ein Array von Objekten, bei dem jedes Objekt eine Person mit einem Namen und Alter darstellt.
// Verwende eine Arrow Function mit der .map() Methode, um ein neues Array zu erstellen, das nur die Namen der Personen enthält.

let people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
  ];

  let names = people.map( people => people.name);
  
console.log(names);