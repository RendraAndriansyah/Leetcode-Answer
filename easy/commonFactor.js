var commonFactors = function (a, b) {
  const length = Math.max(a, b);
  let result = 0;
  for (let i = 0; i <= length; i++) {
    if (a % i === 0 && b % i === 0) result++;
  }
  return result;
};

console.log(commonFactors(6, 12));
console.log(commonFactors(25, 30));
