var numOfPairs = function (nums, target) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] === target && i !== j) count++;
    }
  }
  return count;
};

console.log(numOfPairs(["777", "7", "77", "77"], "7777"));
console.log(numOfPairs(["123", "4", "12", "34"], "1234"));
