var isPowerOfTwo = function (n) {
  return Math.log2(n) % 1 === 0 ? true : false;
};

console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(6));
console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(134217727));
