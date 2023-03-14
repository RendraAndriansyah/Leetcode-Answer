var countNegatives = function (grid) {
  //   return grid
  //     .flat()
  //     .map((x) => x)
  //     .filter((x) => x < 0).length;
  const len = grid.flat();
  let count = 0;
  for (const i of len) {
    if (i < 0) count++;
  }
  return count;
};

console.log(
  countNegatives([
    [4, 3, 2, -1],
    [3, 2, 1, -1],
    [1, 1, -1, -2],
    [-1, -1, -2, -3],
  ])
);
