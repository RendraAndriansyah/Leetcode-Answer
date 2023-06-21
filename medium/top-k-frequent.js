var topKFrequent = function (nums, k) {
	// unfinished
	let res = [];
	const temp = {};
	for (let i = 0; i < nums.length; i++) {
		if (temp[nums[i]]) temp[nums[i]] += 1;
		else temp[nums[i]] = 1;
	}
	for (const val in temp) {
		if (k <= temp[val]) res.push(val);
	}
	console.log(temp);
	// return res;
	// return [...new Set(nums)].filter((x) => x <= k);
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
console.log(topKFrequent([1], 1));
console.log(topKFrequent([1, 2], 2));
