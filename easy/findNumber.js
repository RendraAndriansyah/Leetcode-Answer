var findKthPositive = function (arr, k) {
  let count = 0;
  for (item of arr) {
    if (item <= k + count) {
      count++;
    }
  }

  return k + count;
  const missing = [];
  const len = arr.length + k;
  for (let i = 0, j = 1; j <= len; j++) {
    arr[i] != j ? missing.push(j) : i++;
    if (missing.length == k) return missing.pop();
  }
  //   let checker = new Set(arr);
  //   for (let i = 1; ; ++i) if (!checker.has(i) && !--k) return i;
};

console.log(findKthPositive([2, 3, 4, 7, 11], 5));
console.log(findKthPositive([1, 2, 3, 4], 2));
