// ~> unfinished
var diagonalSort = function (mat) {
  let sorting = mat
    .join()
    .split("")
    .sort()
    .filter((x) => x !== ",");
  let result = [];
  let temp = [];
  for (let i = 0; i <= sorting.length; i++) {
    temp.push(sorting[i]);
    if (temp.length === mat[0].length) {
      result.push(temp);
      temp = [];
    }
  }
  return result;
};

console.log(
  diagonalSort([
    [3, 3, 1, 1],
    [2, 2, 1, 2],
    [1, 1, 1, 2],
  ])
);
