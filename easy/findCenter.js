var findCenter = function (edges) {
  return edges[1].includes(edges[0][0]) ? edges[0][0] : edges[0][1];
  //   if (edges[0][0] === edges[1][0] || edges[0][0] === edges[1][1]) return edges[0][0];
  //   return edges[0][1];
};

console.log(
  findCenter([
    [1, 2],
    [5, 1],
    [1, 3],
    [1, 4],
  ])
);
console.log(
  findCenter([
    [1, 2],
    [2, 3],
    [4, 2],
  ])
);
