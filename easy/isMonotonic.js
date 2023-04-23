var isMonotonic = function (nums) {
	let checker = [...new Set(nums)];
	console.log(checker);
	if (checker[0] < checker[1]) {
		for (let i = 0; i < checker.length; i++) {
			if (checker[i] > checker[i + 1]) return false;
		}
	} else {
		for (let i = 0; i < checker.length; i++) {
			if (checker[i] < checker[i + 1]) return false;
		}
	}
	return true;
};

console.log(isMonotonic([1, 2, 2, 3])); // true
console.log(isMonotonic([6, 5, 4, 4])); // true
console.log(isMonotonic([1, 3, 2])); //false
console.log(isMonotonic([1, 1, 2])); // true
console.log(isMonotonic([1, 1, 0]));
console.log(isMonotonic([-5, -4, -1]));
console.log(isMonotonic([[2, 3, 3, 2, 4]]));
