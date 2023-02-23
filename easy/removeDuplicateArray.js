var removeDuplicates = function (nums) {
  let result = 0;
  for (let i = 0; i <= nums.length; i++) {
    if (nums[i] != nums[result]) nums[++result] = nums[i];
  }
  return result;

  // let result = [];
  // for (let i = 0; i < nums.length; i++) {
  //   for (let j = 0; j < nums.length; j++) {
  //     if (nums[i] === nums[j] && !result.includes(nums[i])) result.push(nums[i]);
  //   }
  // }
  // return result.length;
};

// console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
