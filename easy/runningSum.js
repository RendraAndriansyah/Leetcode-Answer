var runningSum = function (nums) {
  // ~> traditional solution
  const res = [...nums];
  for (let i = 1; i < nums.length; i++) {
    if (i == 1) {
      res[i] += res[i - 1];
    } else {
      res[i] += res[i - 1];
    }
  }
  return res;

  // ~> map solution
  let result = 0;
  return nums.map((num) => result);

  // ~> reduce solution
  nums.reduce((a, c, i, arr) => (arr[i] += a));
  return nums;
};

console.log(runningSum([1, 2, 3, 4]));
console.log(runningSum([1, 1, 1, 1, 1]));
