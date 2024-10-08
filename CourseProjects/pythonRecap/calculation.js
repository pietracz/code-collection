const add = (a, b) => a + b;

const substract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => {
  if (b === 0) {
    console.error('Division by zero is not possible');
  } else {
    return a / b;
  }
};

const zahl1 = prompt('Enter number 1: ');
const zahl2 = prompt('Enter number 2: ');
