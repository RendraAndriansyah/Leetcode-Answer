const test = [
	{
		id: 1,
		the_timestamp: "2021-11-01T06:57:51.251775",
		mailaddr: "artand.atn1@gmail.com",
		candidate_name: "artand",
		job_id: 1,
		job_title: "C#/.NET Front-end Programmer",
		status: 6,
	},
	{
		id: 4,
		the_timestamp: "2021-12-06T09:25:37.471259",
		mailaddr: "bernaridho.hutabarat@gmail.com",
		candidate_name: "Test-user Uji-skill",
		job_id: 5,
		job_title: "Java Programmer",
		status: 6,
	},
	{
		id: 6,
		the_timestamp: "2023-10-05T15:40:53.631438",
		mailaddr: "bernaridho.hutabarat@gmail.com",
		candidate_name: "Test-user Uji-skill",
		job_id: 5,
		job_title: "Java Programmer",
		status: 0,
	},
];

const test2 = [
	{
		id: 1,
		the_timestamp: "2021-11-01T06:57:51.251775",
		mailaddr: "artand.atn1@gmail.com",
		candidate_name: "artand",
		job_id: 1,
		job_title: "C#/.NET Front-end Programmer",
		status: 6,
	},
	{
		id: 4,
		the_timestamp: "2021-12-06T09:25:37.471259",
		mailaddr: "bernaridho.hutabarat@gmail.com",
		candidate_name: "Test-user Uji-skill",
		job_id: 5,
		job_title: "Java Programmer",
		status: 6,
	},
	{
		id: 6,
		the_timestamp: "2023-10-05T15:40:53.631438",
		mailaddr: "bernaridho.hutabarat@gmail.com",
		candidate_name: "Test-user Uji-skill",
		job_id: 5,
		job_title: "Java Programmer",
		status: 0,
	},
];

function removeDuplicatesByJobId(arr) {
	const uniqueIds = new Set();
	const result = [];

	for (const item of arr) {
		if (!uniqueIds.has(item.job_id)) {
			uniqueIds.add(item.job_id);
			result.push(item);
		}
	}

	return result;
}

const filteredTest = removeDuplicatesByJobId(test);
console.log(filteredTest);
