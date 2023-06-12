var summaryRanges = function (nums) {
	let res = new Array();
	for (let i = 0; i < nums.length; ++i) {
		if (i === nums[i]) res.push(String(nums[i]));
	}
	return res;
};

console.log(summaryRanges([0, 1, 2, 4, 5, 7]));
// console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]));
// console.log(summaryRanges([0, 1, 2, 4, 5, 7]));
