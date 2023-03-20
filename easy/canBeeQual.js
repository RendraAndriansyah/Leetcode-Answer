var canBeEqual = function (target, arr) {
  const tempTarget = target.sort((a, b) => a - b);
  const tempArr = arr.sort((a, b) => a - b);
  for (let i = 0; i < tempArr.length; i++) {
    if (tempArr[i] !== tempTarget[i]) return false;
  }
  return true;
};

console.log(canBeEqual([1, 2, 3, 4], [2, 4, 1, 3]));
console.log(canBeEqual([3, 7, 9], [3, 7, 11]));
console.log(canBeEqual([392, 360], [392, 360]));
