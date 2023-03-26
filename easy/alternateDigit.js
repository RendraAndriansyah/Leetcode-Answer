var alternateDigitSum = function (n) {
  return String(n)
    .split("")
    .map((x) => Number(x))
    .reduce((acc, acn, i) => (i % 2 === 0 ? acc + acn : acc - acn));
};

console.log(alternateDigitSum(521));
console.log(alternateDigitSum(111));
