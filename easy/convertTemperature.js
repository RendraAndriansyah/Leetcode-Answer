var convertTemperature = function (celsius) {
  return [celsius + 273.15, celsius * 18 + 32];
};

console.log(convertTemperature(36.5));
console.log(convertTemperature(122.11));
