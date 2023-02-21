var singleNonDuplicate = function (nums) {
  if (nums.length <= 1) return nums[0];
  if (nums[0] !== nums[1]) return nums[0];
  let res = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      i++;
    } else {
      res = nums[i];
    }
  }
  return res;
};

console.log(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8]));
console.log(singleNonDuplicate([3, 3, 7, 7, 10, 11, 11]));
console.log(singleNonDuplicate([1, 2, 2, 3, 3]));
console.log(singleNonDuplicate([1]));
