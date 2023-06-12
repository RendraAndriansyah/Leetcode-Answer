var merge = function (nums1, m, nums2, n) {
	// break solution
	for (let i = 0; i < m + n; ++i) {
		if (i >= m) {
			nums1[i] = nums2[i - m];
		}
	}
	for (let j = 0; j < m + n; j++) {
		for (let k = j; k >= 0; k--) {
			if (nums1[k + 1] < nums1[k]) {
				let temp = nums1[k];
				nums1[k] = nums1[k + 1];
				nums1[k + 1] = temp;
			}
		}
	}
	return nums1;
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
console.log(merge([4, 5, 6, 0, 0, 0], 3, [1, 2, 3], 3));
// console.log(merge([1], 1, [], 0));
// console.log(merge([0], 0, [1], 1));
