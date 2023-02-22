var decompressRLElist = function (nums) {
  let freq = [];
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 == 1) {
      for (let j = 0; j < nums[i - 1]; j++) {
        freq.push(nums[i]);
      }
    }
  }

  return freq.length;
};

console.log(decompressRLElist([1, 2, 3, 4]));
console.log(decompressRLElist([1, 1, 2, 3]));
// console.log(decompressRLElist([49, 39]));
console.log(decompressRLElist([62, 31, 13, 24, 55, 53, 24, 81, 54, 93, 87, 56, 6, 69]));
