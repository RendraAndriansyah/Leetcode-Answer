var smallestEvenMultiple = function (n) {
  let res = 0;
  let multiple = n * 2;
  while (multiple >= n) {
    if (multiple % 2 === 0 || n % 2 === 0) res = multiple;
    multiple -= n;
  }
  return res;
};

console.log(smallestEvenMultiple(5));
console.log(smallestEvenMultiple(6));
