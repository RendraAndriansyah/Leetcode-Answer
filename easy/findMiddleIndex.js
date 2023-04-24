// ~> unfinished
var findMiddleIndex = function (nums) {
	if (nums.length % 2 === 0) return -1;
	let res = 0;
	const length = Math.floor(nums.length / 2);
	for (let i = 0; i <= length; i++) {
		res += nums[i];
	}
	return res;
};

console.log(findMiddleIndex([2, 3, -1, 8, 4]));
console.log(findMiddleIndex([2, 5]));
console.log(findMiddleIndex([1, -1, 4]));
