var smallestRangeI = function (nums, k) {
  //   return Math.max(...nums) - Math.min(...nums) <= k * 2
  //     ? 0
  //     : Math.max(...nums) - Math.min(...nums) - k * 2;
  return k === 0 ? 0 : nums[nums.length - 1] >= k * 2 ? nums[nums.length - 1] - k * 2 : 0;
};

console.log(smallestRangeI([1, 3, 6], 3));
console.log(smallestRangeI([1], 0));
console.log(smallestRangeI([0, 10], 3));
