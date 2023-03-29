var findMaxK = function (nums) {
  let res = -1;
  for (let i = 0, j = nums.length - 1; i < nums.length; i++) {
    if (nums.indexOf(-nums[i], i + 1) > 0) {
      if (Math.abs(nums[i]) > res) {
        res = Math.abs(nums[i]);
      }
    }
  }
  return res;

  //   return res;
  //   let res = -1;
  //   for (let i = 0; i < nums.length; i++) {
  //     for (j = i + 1; j < nums.length; j++) {
  //       if (nums[i] === -nums[j] && Math.abs(nums[i]) >= res) res = Math.abs(nums[i]);
  //     }
  //   }
  //   return res;
};

console.log(findMaxK([-1, 2, -3, 3]));
// console.log(findMaxK([-1, 10, 6, 7, -7, 1]));
// console.log(findMaxK([-9, -43, 24, -23, -16, -30, -38, -30]));
// console.log(findMaxK([-37, 37, -9, 2, 47, 18, 13, -11, 9, -28]));
