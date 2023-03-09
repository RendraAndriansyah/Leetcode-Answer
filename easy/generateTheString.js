var generateTheString = function (n) {
  let res = Array(n).fill("a");
  if (!(n & 1)) res[n - 1] = "b";
  return res.join("");
};

console.log(generateTheString(4));
console.log(generateTheString(2));
console.log(generateTheString(7));
