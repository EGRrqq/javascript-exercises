const sumAll = function (...args) {
  if (args[0] > args[1]) args.reverse();

  switch (true) {
    case args[0] < 0 || args[1] < 0:
    case typeof args[0] !== "number" || typeof args[1] !== "number":
      return "ERROR";
  }

  return args.reduce((firstNum, secondNum) => {
    let sum = 0;

    while (firstNum <= secondNum) {
      sum += firstNum;

      firstNum++;
    }

    return sum;
  });
};

// Do not edit below this line
module.exports = sumAll;
