var sortedSquares = function (nums) {
  return nums.map((x) => x ** 2).sort((low, high) => low - high);
};

console.log(sortedSquares([-4, -1, 0, 3, 10]));
