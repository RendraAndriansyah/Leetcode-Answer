// ~> unfinished

var relativeSortArray = function (arr1, arr2) {
  return arr2
    .map((x) => arr1.filter((y) => y === x) ?? arr2.filter((y) => y !== x))
    .flat();
};

console.log(relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6]));
