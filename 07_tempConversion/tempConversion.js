const convertToCelsius = function(tempratureInFahrenheit) {
  return parseFloat(((tempratureInFahrenheit - 32) * 5 / 9).toFixed(1));
};

const convertToFahrenheit = function(tempratureInClesius) {
    return parseFloat(((tempratureInClesius * 9 / 5) + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
