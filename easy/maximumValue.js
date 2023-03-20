var maximumValue = function (strs) {
  for (let i = 0; i < strs.length; i++) {
    isNaN(strs[i]) ? (strs[i] = strs[i].length) : (strs[i] = Number(strs[i]));
  }
  return Math.max(...strs);

  //   ~> one Liner ES6
  return Math.max(...strs.map((str) => (Number.isInteger(+str) ? +str : str.length)));
};

console.log(maximumValue(["alic3", "bob", "3", "4", "00000"]));
console.log(maximumValue(["alic3", "bob", "8", "4", "00000"]));
