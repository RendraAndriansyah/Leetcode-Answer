const countSubarrays = function (nums, minK, maxK) {
  let count = 0;
  let minPosition = -1;
  let maxPosition = -1;
  let leftBound = -1;

  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] == minK) minPosition = i;
    if (nums[i] == maxK) maxPosition = i;
    if (nums[i] < minK || nums[i] > maxK) leftBound = i;
    const smaller = Math.min(minPosition, maxPosition);
    count += Math.max(0, smaller - leftBound);
  }

  return count;
};
console.log(countSubarrays([1, 3, 5, 2, 7, 5], 1, 5));
console.log(countSubarrays([1, 1, 1, 1], 1, 1));
