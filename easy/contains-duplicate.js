var containsDuplicate = function (nums) {
	// // const test = new Set(nums).size  ;
	// console.log(test);
	// for (let i = 0; i < nums.length; ++i) {
	// 	for (let j = i + 1; j < nums.length; ++j) {
	// 		if (nums[j] === nums[i]) return true;
	// 	}
	// }
	// return false;
	return new Set(nums).size < nums.length;
};

console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
