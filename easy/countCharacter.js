var countCharacters = function (words, chars) {
	// ~> unfinished
	let res = "";
	const convertWords = words.map((x) => x.split("").sort().join(""));
	const convertChars = chars.split("").sort().join("");

	for (const i of convertWords) {
		for (let j = 0; j < i.length; j++) {
			if (!convertChars.includes(i[j])) break;
			if (i.length > convertChars.length) break;
			res += i;
			break;
		}
	}

	return res.length;
};

console.log(countCharacters(["cat", "bt", "hat", "tree"], "atach"));
console.log(countCharacters(["hello", "world", "leetcode"], "welldonehoneyr"));
console.log(
	countCharacters(
		[
			"skwgxuuuumkfurejmqrbipvlavdrozjyxhagbwetabjwevfsegqfpllgafm",
			"ufvpzzgpswnk",
			"tcouxmlrnfyoxvkeglchhryykmdvgvdxpookbtiyhuthoqsnqbowewpfgbcy",
			"qwpttmxzazkkfqqtrnkaejifligdvgnyvtmppjbkeuqryxzqyegttvhzolpztvigxygzvsppurijaekb",
			"vbtvbheurzbglzljczmziitkbmtoybiwhoyfrsxvfveaxchebjdzdnnispzwbrgrbcdaistps",
		],
		"avyteswqppomeojxoybotzriuvxolmllevluauwb"
	)
);
