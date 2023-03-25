var singleNumber = function (nums) {
  return nums.reduce((x, i) => ~x);
};

console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([4, 1, 2, 1, 2]));
console.log(singleNumber([1]));
