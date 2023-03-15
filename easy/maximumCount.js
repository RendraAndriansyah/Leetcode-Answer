var maximumCount = function (nums) {
  let min = 0;
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) continue;
    nums[i] < 0 ? min++ : max++;
  }
  console.log(min);
  return min > max ? min : max;
};

// console.log(maximumCount([-2, -1, -1, 1, 2, 3]));
console.log(maximumCount([-3, -2, -1, 0, 0, 1, 2]));
