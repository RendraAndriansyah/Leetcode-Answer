var finalPrices = function (prices) {
  let result = [];
  while (prices.length) {
    let currentPrice = prices[0];

    prices.shift();
    let lowerPrice = prices.find((a) => a <= currentPrice);
    result.push(lowerPrice ? currentPrice - lowerPrice : currentPrice);
  }

  return result;
};

console.log(finalPrices([8, 4, 6, 2, 3]));
console.log(finalPrices([1, 2, 3, 4, 5]));
console.log(finalPrices([10, 1, 1, 6]));
