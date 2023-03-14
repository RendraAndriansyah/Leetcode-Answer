var sortArrayByParity = function (nums) {
  const result = [];
  nums.map((x) => (x % 2 === 0 ? result.unshift(x) : result.push(x)));
  return result;
};

console.log(sortArrayByParity([3, 1, 2, 4]));
