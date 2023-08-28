const palindromes = function (str) {
  const clearStrArr = str.toLowerCase().match(/[a-z0-9]/g);

  return clearStrArr.join("") === clearStrArr.reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
