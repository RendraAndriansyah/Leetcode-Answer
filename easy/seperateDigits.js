var separateDigits = function (nums) {
  return nums
    .join("")
    .split("")
    .map((x) => Number(x));
};

console.log(separateDigits([13, 25, 83, 77]));
