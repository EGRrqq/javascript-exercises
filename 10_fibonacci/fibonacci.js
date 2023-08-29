// iteration with memo
// - create memo obj
// - if obj[key] return obj[key]
// - else obj[key] = return value

const fibonacci = function (num, memo) {
  if (parseInt(num) < 0) return "OOPS";
  if (parseInt(num) === 0) return 0;
  if (parseInt(num) === 1) return 1;
  
  memo = memo || {};

  if (memo[num]) return memo[num];

  return memo[num] = fibonacci(num - 2, memo) + fibonacci(num - 1, memo);
};

// Do not edit below this line
module.exports = fibonacci;
