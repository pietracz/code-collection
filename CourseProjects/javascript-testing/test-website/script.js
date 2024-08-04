// alert("Bestätigung erforderlich!");

// let person = {
//  name: "Julian",
//  age: 25,
//};
// Dotnotation
//console.log(person.name);

// Bracketnotation
//console.log(person["age"]);

//Input
//const userInput = prompt("Schreibe was:");
//console.log(userInput);

//let Arrays = ["bing", "bong", "ding", "dong"];

//console.log(Arrays[0]);
//console.log(Arrays[1]);
//console.log(Arrays[2]);
//console.log(Arrays[3]);

let counter = 0;

function addCounter() {
  counter++;
  document.getElementById("counter").textContent = counter;
}

let lieblingsBuch = prompt("Was ist dein Lieblingsbuch?");
console.log(lieblingsBuch, ", ist eine gute Wahl!");

let anzahlGeschwister = prompt("Wie viele Geschwister hast du?");
console.log("Oh du hast ", anzahlGeschwister, " Geschwister?! Schön!");

let hatFuehrerschein = true;
console.log("Hat Führerschein:", hatFuehrerschein);

let momentaneStimmung = null;
console.log(momentaneStimmung);

let naechstesResieziel = undefined;
console.log();

let lieblingsFarbe = prompt("Was ist deine Lieblingsfarbe?");
console.log(lieblingsFarbe, ", wunderbar!");

let wohnflaeche = prompt("Wie groß ist deine Bude?");
console.log(wohnflaeche);

let magKaffee = prompt("Magst du Kaffee?");
console.log(magKaffee);

let aktuellesProject = prompt("Hast du ein laufendes Projekt?");
console.log(aktuellesProject);

let letztesAbendessen = prompt("Was hattest du zuletzt zu essen?");
console.log(letztesAbendessen);
