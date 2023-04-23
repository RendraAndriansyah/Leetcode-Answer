var rotate = function (nums, k) {
	// ~> time Limit
	// for (let i = 0; i < k; i++) {
	// 	nums.unshift(nums[nums.length - 1]);
	// 	nums.pop();
	// }
	// return nums;

	// ~> classic way
	// for (let i = nums.length - 1; i >= 0; i--) {
	// 	nums[i + k] = nums[i];
	// }
	// for (let j = k - 1; j >= 0; j--) {
	// 	nums[j] = nums.pop();
	// }
	// return nums;
	return nums.push(...nums.splice(0, nums.length - (k % nums.length)));
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
