var rearrangeArray = function (nums) {
  const result = [];
  const positive = [];
  const negative = [];

  for (let i = 0; i < nums.length; i++) {
    nums[i] > 0 ? positive.push(nums[i]) : negative.push(nums[i]);
  }
  for (let j = 0; j < Math.round(nums.length / 2); j++) {
    result.push(positive[j], negative[j]);
  }
  return result;

  //   const res = [];
  //   const posNum = nums.filter((x) => x >= 0);
  //   const negNum = nums.filter((x) => x <= 0);
  //   for (let i = 0; i < posNum.length; i++) {
  //     res.push(posNum[i]);
  //     res.push(negNum[i]);
  //   }
  //   return res;
};

console.log(rearrangeArray([3, 1, -2, -5, 2, -4]));
