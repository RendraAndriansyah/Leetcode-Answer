var intersection = function (nums) {
  let checker = nums[0];
  for (let i = 1; i < nums.length; i++) {
    checker = checker.filter((x) => nums[i].includes(x));
  }
  return checker.sort((a, b) => ~~a - b);
};

console.log(
  intersection([
    [3, 1, 2, 4, 5],
    [1, 2, 3, 4],
    [3, 4, 5, 6],
  ])
);
console.log(
  intersection([
    [7, 34, 45, 10, 12, 27, 13],
    [27, 21, 45, 10, 12, 13],
  ])
);
