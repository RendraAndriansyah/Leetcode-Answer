var intersection = function (nums1, nums2) {
  return [...new Set(nums1.filter((x) => nums2.includes(x)))];
  //   let res = [];
  //   for (let i = 0; i < nums1.length; i++) {
  //     for (let j = 0; j < nums2.length; j++) {
  //       if (nums1[i] === nums2[j]) res.push(nums1[i]);
  //       break;
  //     }
  //   }
  //   return [...new Set(res)];
};

console.log(intersection([1, 2, 2, 1], [2, 2]));
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));
