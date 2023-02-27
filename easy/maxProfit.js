var maxProfit = function (prices) {
  let buy = prices[0];
  let sell = 0;
  for (var i = 0; i < prices.length; i++) {
    if (prices[i] - buy > sell) sell = prices[i] - buy;
    if (prices[i] < buy) buy = prices[i];
  }

  return sell;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
console.log(maxProfit([2, 4, 1]));
