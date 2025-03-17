const convertToCelsius = function(temperatureInFahrenheit) {
  let temperatureInCelsius = Math.round(((5/9) * (temperatureInFahrenheit-32)) * 10) / 10;
  return temperatureInCelsius
};

const convertToFahrenheit = function(temperatureInCelsius) {
  let temperatureInFahrenheit = Math.round(((9/5) * temperatureInCelsius + 32) * 10) / 10;
  return temperatureInFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
