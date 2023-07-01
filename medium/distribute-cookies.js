var distributeCookies = function (cookies, k) {
	// steal
	let n = cookies.length;
	let arr = Array(k).fill(0);
	let res = Infinity;
	const distribute = (arr, idx) => {
		if (idx >= n) return (res = Math.min(res, Math.max(...arr)));
		let cookiesInBag = cookies[idx];
		for (let i = 0; i < k; i++) {
			arr[i] += cookiesInBag;
			distribute(arr, idx + 1);
			arr[i] -= cookiesInBag;
		}
		return res;
	};
	return distribute(arr, 0);
};

console.log(distributeCookies([8, 15, 10, 20, 8], 2));
// console.log(distributeCookies([6, 1, 3, 2, 2, 4, 1, 2], 3));
