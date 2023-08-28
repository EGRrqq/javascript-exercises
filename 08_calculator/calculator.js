const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const sum = (arr) => arr.reduce((acc, item) => acc + item, 0);

const multiply = (arr) => arr.reduce((acc, item) => acc * item);

const power = (a, b) => a ** b;

const factorial = (num) => {
  let i = 1;
  let result = 1;

  while (i <= num) {
    result *= i;

    i++;
  }

  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
