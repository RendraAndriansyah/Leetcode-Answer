var maxProduct = function (nums) {
  nums.sort((a, b) => b - a);
  return (nums[0] - 1) * (nums[1] - 1);

  let res = 0;
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (res <= (nums[i] - 1) * (nums[j] - 1)) res = (nums[i] - 1) * (nums[j] - 1);
    }
  }
  return res;
};

console.log(maxProduct([3, 4, 5, 2]));
console.log(maxProduct([1, 5, 4, 5]));
console.log(maxProduct([3, 7]));
console.log(maxProduct([10, 2, 5, 2]));
