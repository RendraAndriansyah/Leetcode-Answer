var targetIndices = function (nums, target) {
  const result = [];
  for (const iNum in nums.sort((a, b) => a - b)) {
    if (nums[iNum] === target) result.push(iNum);
  }
  return result;
};

console.log(targetIndices([1, 2, 5, 2, 3], 2));
console.log(
  targetIndices(
    [
      48, 90, 9, 21, 31, 35, 19, 69, 29, 52, 100, 54, 21, 86, 6, 45, 42, 5, 62, 77, 15,
      38,
    ],
    6
  )
);
