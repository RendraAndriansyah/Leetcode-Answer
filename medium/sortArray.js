var sortArray = function (nums) {
  //~> merge Short
  const len = nums.length;
  if (len < 2) return nums;

  const mid = len >> 1;
  let left = nums.slice(0, mid);
  let right = nums.slice(mid, len);

  sortArray(left);
  sortArray(right);

  let idxL = 0,
    idxR = 0,
    idxAns = 0;
  while (idxL < left.length && idxR < right.length) {
    if (left[idxL] < right[idxR]) {
      nums[idxAns] = left[idxL];
      idxL++;
    } else {
      nums[idxAns] = right[idxR];
      idxR++;
    }
    idxAns++;
  }

  while (idxL < left.length) {
    nums[idxAns] = left[idxL];
    idxL++;
    idxAns++;
  }
  while (idxR < right.length) {
    nums[idxAns] = right[idxR];
    idxR++;
    idxAns++;
  }
  return nums;
  // ~> ES6
  return nums.sort((a, b) => a - b);
};

console.log(sortArray([5, 2, 3, 1]));
console.log(sortArray([-2, 3, -5]));
