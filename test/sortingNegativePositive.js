const sample = [12, 8, 3, 1, -4, -6, -9];

// the key is Math.abs ^_^
const test = (arr) => {
  return arr.sort((a, b) => Math.abs(b) - Math.abs(a));
};

console.log(test(sample)); // [12,-9,8,-6,-4,3,1]
