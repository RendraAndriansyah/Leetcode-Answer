var differenceOfSum = function (nums) {
  // syntax ES6 Solutioin
  const el = nums.reduce((a, b) => a + b);
  const dig = nums
    .join()
    .replaceAll(",", "")
    .split("")
    .reduce((a, b) => Number(a) + Number(b));
  console.log(dig);
  return el - dig;
};

console.log(differenceOfSum([1, 15, 6, 3]));
