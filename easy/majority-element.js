var majorityElement = function (nums) {
	const res = {};
	for (const num of nums) {
		if (res[num]) {
			res[num] += 1;
		} else {
			res[num] = 1;
		}
		if (res[num] >= nums.length / 2) return num;
	}
};

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
