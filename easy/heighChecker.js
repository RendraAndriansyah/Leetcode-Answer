var heightChecker = function (heights) {
  const sortedHeights = [...heights].sort((asc, desc) => asc - desc);
  let count = 0;
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== sortedHeights[i]) count++;
  }
  return count;
};

console.log(heightChecker([1, 1, 4, 2, 1, 3]));
