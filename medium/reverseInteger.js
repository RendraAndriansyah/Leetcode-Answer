var reverse = function (x) {
  const len = String(x).split("");
  let checker = "1234567890";
  let result = [];

  for (let i = len.length - 1; i >= 0; i--) {
    if (checker.includes(len[i])) result.push(len[i]);
  }

  if (len[len.length - 1] === "0") result.shift();
  if (len[0] === "-") result.unshift(len[0]);
  if (result.join("") >= 2147483648 || result.join("") <= -2147483648) return 0;

  return result.join("");
};

console.log(reverse(1534236469));
console.log(reverse(-10));
console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
