// ~> unfinished

var maxSatisfaction = function (satisfaction) {
  //   if (satisfaction.filter((rate) => rate > 1).length === 0) {
  //     return 0;
  //   }

  return satisfaction
    .filter((rate) => rate >= -3)
    .sort()
    .map((item, i) => item * ++i);
  // .reduce((acc, i) => acc + i);
};

// console.log(maxSatisfaction([-1, -8, 0, 5, -9]));
// console.log(maxSatisfaction([4, 3, 2]));
// console.log(maxSatisfaction([-1, -4, -5]));
console.log(maxSatisfaction([-2, 5, -1, 0, 3, -3]));
