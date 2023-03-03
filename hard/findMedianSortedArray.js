var findMedianSortedArrays = function (nums1, nums2) {
  let sort = [...nums1, ...nums2].sort((a, b) => a - b);
  let lowMid = 0;
  let highMid = 0;
  if (sort.length % 2 == 0) {
    lowMid += sort[sort.length / 2 - 1];
    highMid += sort[sort.length / 2];
  } else {
    return sort[Math.floor(sort.length / 2)];
  }
  return (lowMid + highMid) / 2;
};

console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));
console.log(findMedianSortedArrays([3], [-2, -1]));
