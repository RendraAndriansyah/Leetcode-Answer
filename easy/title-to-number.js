var titleToNumber = function (columnTitle) {
	// unfinished
	let count = 0;
	for (const title of columnTitle) {
		if (columnTitle.length > 1) {
			count += (columnTitle[0].charCodeAt(0) - 64) * 26;
		} else {
			count += title.charCodeAt(0) - 64;
		}
	}
	return count;
};

console.log(titleToNumber("A"));
console.log(titleToNumber("AB"));
console.log(titleToNumber("ZY"));
