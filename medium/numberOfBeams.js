// ~> unfinished
var numberOfBeams = function (bank) {
	let count = [];
	let result = null;
	for (const i of bank) {
		let temp = i.split("").reduce((a, b) => Number(a) + Number(b));
		if (temp) count.push(temp);
	}
	if (count.length < 2) return 0;
	return count.reduce((a, b) => Math.abs(a) ** Math.abs(b));
};

console.log(numberOfBeams(["011001", "000000", "010100", "001000"]));
console.log(numberOfBeams(["000", "111", "000"]));
console.log(numberOfBeams(["0", "1"]));
console.log(numberOfBeams(["1", "1"]));
