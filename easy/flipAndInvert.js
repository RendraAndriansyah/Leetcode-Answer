var flipAndInvertImage = function (image) {
  return image.map((x) => x.reverse().map((x) => (x === 1 ? (x = 0) : (x = 1))));
};

console.log(
  flipAndInvertImage([
    [1, 1, 0],
    [1, 0, 1],
    [0, 0, 0],
  ])
);
