var climbStairs = function (n) {
  let step = [1, 1];
  for (let i = 2; i <= n; i++) {
    step[i] = step[i - 1] + step[i - 2];
  }
  return step;
};
console.log(climbStairs(1));
console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(5));
