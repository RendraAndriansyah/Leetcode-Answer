const symbol = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};
var romanToInt = function (s) {
  let result = 0;
  let sum = [];
  for (let j = 0; j < s.length; j++) {
    for (const i in symbol) {
      if (s[j] === i) sum.push(symbol[i]);
    }
  }

  for (let i = 0; i < sum.length; i++) {
    if (sum[i] < sum[i + 1]) {
      result -= sum[i];
      continue;
    }
    result += sum[i];
  }

  return result;
};

console.log(romanToInt("III"));
console.log(romanToInt("XIV"));
console.log(romanToInt("XL"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
