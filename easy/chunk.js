var chunk = function (arr, size) {
	let res = new Array();
	let temp = new Array();
	for (let i = 0; i < arr.length; i++) {
		temp.push(arr[i]);
		if (temp.length === size) {
			res.push(temp);
			temp = new Array();
		}
		if (i === arr.length - 1 && temp.length) res.push(temp);
	}
	return res;
};

console.log(chunk([1, 2, 3, 4, 5], 1));
console.log(chunk([1, 9, 6, 3, 2], 3));
