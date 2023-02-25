var maxProfit = function (prices) {
  let min = prices[0];
  let max = 0;
  for (var i = 0; i < prices.length; i++) {
    if (prices[i] - min > max) max = prices[i] - min;
    if (prices[i] < min) min = prices[i];
  }
  return max;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
console.log(maxProfit([2, 4, 1]));
