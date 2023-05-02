var totalMoney = function (n) {
	let res = [];
	let spend = 1;
	let weeks = 7;
	for (let i = 1; i <= n; i++) {
		res.push(spend);
		spend++;
		if (i % weeks === 0) spend = res[i - weeks] + 1;
	}
	return res.reduce((x, y) => x + y);
};

console.log(totalMoney(4));
console.log(totalMoney(10));
console.log(totalMoney(20));
