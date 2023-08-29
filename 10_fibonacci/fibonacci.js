// basic iteration, don't care about memory
// - base cases
// - loop
// - return arr[num]
// iteration with memo

const fibonacci = function (num) {
  if (num < 0) return "OOPS";
  if (num === 0) return 0;
  if (num === 1) return 1;

  let arr = [0, 1];

  for (let i = arr.length; i <= num; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }

  return arr[num];
};

// Do not edit below this line
module.exports = fibonacci;
