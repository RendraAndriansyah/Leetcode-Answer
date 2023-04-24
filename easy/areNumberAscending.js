var areNumbersAscending = function (s) {
	const convert = s
		.split(" ")
		.map((x) => Number(x))
		.filter((x) => !isNaN(x));

	for (let i = 0; i < convert.length; i++) {
		if (convert[i] >= convert[i + 1]) return false;
	}
	return true;
};

console.log(areNumbersAscending("1 box has 3 blue 4 red 6 green and 12 yellow marbles"));
console.log(areNumbersAscending("hello world 5 x 5"));
console.log(areNumbersAscending("hello world 5 x 5 x 4"));
