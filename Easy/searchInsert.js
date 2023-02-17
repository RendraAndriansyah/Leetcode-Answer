var searchInsert = function (nums, target) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) return sum;
    if (nums[i] > target) return sum;
    sum++;
  }
  return sum;
};

console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 2));
console.log(searchInsert([1, 3, 5, 6], 7));
