var pivotArray = function (nums, pivot) {
  let less = [];
  let more = [];
  let equal = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > pivot) {
      more.push(nums[i]);
    } else if (nums[i] < pivot) {
      less.push(nums[i]);
    } else {
      equal.push(nums[i]);
    }
  }
  console.log(less);
  console.log(equal);
  console.log(more);

  //   return [...less, ...equal, ...more];
};

console.log(pivotArray([9, 12, 5, 10, 14, 3, 10], 10));
console.log(pivotArray([-3, 4, 3, 2], 2));
console.log(pivotArray([19, 15, 12, -14, 8, -7, -11], -7));
