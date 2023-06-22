var tribonacci = function (n) {
	let n1 = 0;
	let n2 = 0;
	let n3 = 1;
	let add = 0;
	for (let i = 0; i < n; i++) {
		add = n1 + n2 + n3;
		n1 = n2;
		n2 = n3;
		n3 = add;
	}
	return n2;
};

console.log(tribonacci(4));
console.log(tribonacci(10));
console.log(tribonacci(25));
