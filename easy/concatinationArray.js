var getConcatenation = function (nums) {
  let res = [];
  for (let i = 0; i < nums.length * 2; i++) {
    i >= nums.length ? res.push(nums[i - nums.length]) : res.push(nums[i]);
  }
  //   return [...nums, ...nums]; ~> copy array with
  return res;
};

console.log(getConcatenation([1, 2, 1]));
console.log(getConcatenation([1, 3, 2, 1]));
