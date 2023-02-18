var plusOne = function (digits) {
  for (let i = digits.length; i >= 0; i--) {
    if (i === digits.length - 1) digits[i] += 1;
    if (digits[i] === 10) {
      digits[i] = 0;

      if (digits[0] === 0) digits.unshift(1);
      if (digits[i - 1]) digits[i - 1] += 1;
    }
  }

  return digits;
};

console.log(plusOne([9, 9]));
console.log(plusOne([9]));
console.log(plusOne([1, 2, 3]));
console.log(plusOne([7, 8, 9]));
console.log(plusOne([4, 3, 2, 1]));
console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));

// var plusOne = function (digits) {
//     let temp = "";
//     let plus = 0;
//     for (let i = 0; i < digits.length; i++) {
//       temp += digits[i];
//       digits[digits.length - 1] += 1;
//     }
//     //   let result = (temp + 1).toString().split("");

//     return digits;
//   };
