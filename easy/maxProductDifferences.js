var maxProductDifference = function (nums) {
  let max1 = -Infinity;
  let max2 = -Infinity;
  let min1 = Infinity;
  let min2 = Infinity;
  for (const num of nums) {
    if (num < min1) {
      min2 = min1;
      min1 = num;
    } else if (num < min2) {
      min2 = num;
    }
    if (num > max1) {
      max2 = max1;
      max1 = num;
    } else if (num > max2) {
      max2 = num;
    }
  }
  return max1 * max2 - min1 * min2;

  // ~> sort ES6
  //   nums.sort((a, b) => a - b);
  //   return nums[nums.length - 1] * nums[nums.length - 2] - nums[0] * nums[1];
};

console.log(maxProductDifference([5, 6, 2, 7, 4]));
// console.log(maxProductDifference([4, 2, 5, 9, 7, 4, 8]));
