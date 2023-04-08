// ~> unfinish

var combine = function (n, k) {
  let res = new Array();
  if (n === k) res.push([n]);
  for (let i = 1; i < n; i++) {
    for (let j = i + 1; j <= n; j++) {
      res.push([i, j]);
    }
  }
  return res;
};

console.log(combine(4, 2));
console.log(combine(1, 1));
console.log(combine(4, 4));
