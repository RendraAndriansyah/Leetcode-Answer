var sortTheStudents = function (score, k) {
  for (let i = 0; i < score.length; i++) {
    for (let j = 0; j < score.length; j++) {
      if (score[i][k] > score[j][k]) {
        [score[i], score[j]] = [score[j], score[i]];
      }
    }
  }
  return score;
};

console.log(
  sortTheStudents(
    [
      [10, 6, 9, 1],
      [7, 5, 11, 2],
      [4, 8, 3, 15],
    ],
    (k = 2)
  )
);
console.log(
  sortTheStudents(
    [
      [3, 4],
      [5, 6],
    ],
    (k = 0)
  )
);
