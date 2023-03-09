var findNumbers = function (nums) {
  return nums.map((x) => String(x)).filter((x) => x.length % 2 === 0).length;
};

console.log(findNumbers([12, 345, 2, 6, 7896]));
