var repeatedNTimes = function (nums) {
  let res = new Set();
  for (let n of nums) {
    if (res.has(n)) return n;
    res.add(n);
  }

  return 0;
};

console.log(repeatedNTimes([1, 2, 3, 3]));
// console.log(repeatedNTimes([5, 1, 5, 2, 5, 3, 5, 4]));
// console.log(repeatedNTimes([2, 1, 2, 5, 3, 2]));
