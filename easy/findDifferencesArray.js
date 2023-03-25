var findDifference = function (nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  nums2.forEach((v) => {
    set1.delete(v);
  });
  nums1.forEach((v) => {
    set2.delete(v);
  });
  return [[...set1], [...set2]];
};

console.log(findDifference([1, 2, 3], [2, 4, 6]));
console.log(findDifference([1, 2, 3, 3], [1, 1, 2, 2]));
console.log(findDifference([-68, -80, -19, -94, 82, 21, -43], [-63]));
