var removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let j = i;
    let countRm = 0;

    if (nums[i] === nums[i + 1]) {
      while (nums[i] === nums[++j]) {
        countRm++;
      }
      nums.splice(i, countRm);
      i - countRm;
    }
  }

  return nums.length;
};

console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([1, 1, 2, 3, 2, 3, 3, 5, 6, 1, 2]));
