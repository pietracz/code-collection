let x = 10;

if (x < 10) {
  console.log('x is less than 10');
} else {
  console.log('x is greater than 10');
}

let zahl1 = 10;
var zahl2 = 20;
const zahl3 = 30;

function addieren1(a, b) {
  return a + b;
}

const addieren2 = (a, b) => a + b;

console.log(addieren1(10, 20));
console.log(addieren2(10, 20));

i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

for (i = 0; i < 10; i++) {
  console.log(i);
}

let fruechte = ['Apfel', 'Birne', 'Erdbeere'];
fruechte.push('Kiwi');
