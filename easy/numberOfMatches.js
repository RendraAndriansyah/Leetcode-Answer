var numberOfMatches = function (n) {
  let count = 0;
  for (let i = n; i >= 1; i /= 2) {
    count += i / 2;
  }
  return Math.floor(count);
};

console.log(numberOfMatches(7));
console.log(numberOfMatches(14));
