const convertToCelsius = function (fahrenheitTemp) {
  const conversionFormula = ((fahrenheitTemp - 32) * 5) / 9;

  return Math.round(conversionFormula * 10) / 10;
};

const convertToFahrenheit = function (celsiusTemp) {
  const conversionFormula = (celsiusTemp * 9) / 5 + 32;

  return Math.round(conversionFormula * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
