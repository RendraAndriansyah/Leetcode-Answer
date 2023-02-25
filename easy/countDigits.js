var countDigits = function (num) {
  //~> ES6 Syntax
  //   return String(num)
  // .split("")
  // .reduce((a, c) => (a += num % Number(c) === 0 ? 1 : 0), 0);
  // ~> my solution
  let result = 0;
  let convert = String(num);
  for (let i = 0; i < convert; i++) {
    if (num % Number(convert[i]) === 0) result++;
  }
  return result;
};

console.log(countDigits(7));
console.log(countDigits(121));
console.log(countDigits(1248));
