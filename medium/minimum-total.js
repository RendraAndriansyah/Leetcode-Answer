var minimumTotal = function (triangle) {
	// unfinished
	let res = 0;
	for (let i = 0; i < triangle.length; i++) {
		res += Math.min(...triangle[i]);
	}
	return res;
};

console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]));
console.log(minimumTotal([[-10]]));
console.log(minimumTotal([[-1], [-2, -3]]));
console.log(minimumTotal([[-1], [2, 3], [1, -1, -3]]));
