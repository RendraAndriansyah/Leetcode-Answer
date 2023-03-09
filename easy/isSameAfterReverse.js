var isSameAfterReversals = function (num) {
  //   console.log(String(num).endsWith(0));
  if (num.toString().length === 1) return true;
  if (String(num).endsWith(0)) return false;
  return true;
};

console.log(isSameAfterReversals(526));
console.log(isSameAfterReversals(1800));
