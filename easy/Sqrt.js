var mySqrt = function (x) {
  for (let i = 0; i <= x; i++) {
    if (i * i > x) return i - 1;
  }
  return x;
};

// with method
// var mySqrt = function (x) {
//   return Math.floor(Math.sqrt(x));
// };

console.log(mySqrt(2));
console.log(mySqrt(4));
console.log(mySqrt(0));
console.log(mySqrt(8));
console.log(mySqrt(25));
console.log(mySqrt(36));
