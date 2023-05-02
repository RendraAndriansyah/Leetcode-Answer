// ~> unfinished

var evaluate = function (s, knowledge) {
	const flatKnowledge = knowledge.flat();
	let res = s;
	for (const i of flatKnowledge) {
		if (res.includes(i)) res.replace(i, "asd");
	}
};

console.log(
	evaluate("(name)is(age)yearsold", [
		["name", "bob"],
		["age", "two"],
	])
);
