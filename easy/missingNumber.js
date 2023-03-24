var missingNumber = function (nums) {
  const res = new Array(nums.length + 1).fill(-1);
  for (const i of nums) {
    res[i] = i;
  }
  return res.indexOf(-1);
  //   if (!nums.join("").includes(0)) return 0;
  //   let res = 0;
  //   for (let i = 0; i < nums.sort((a, b) => a - b).length; i++) {
  //     if (nums[i] !== i) {
  //       res = i;
  //       break;
  //     } else {
  //       res = nums.length;
  //     }
  //   }
  //   return res;
};

console.log(missingNumber([3, 0, 1])); // 2
console.log(missingNumber([0, 1])); // 2
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); //8
console.log(missingNumber([0, 2, 3])); // 1
console.log(missingNumber([1, 2])); // 0
