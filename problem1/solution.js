const solution = (prices) => {
	let answer = Array(prices.length);
	let records = [];

	prices.forEach((price, i) => {
		while (records.length !== 0 && prices[records[records.length - 1]] > price) {
			answer[records[records.length - 1]] = i - records[records.length - 1];
			records.pop();
		}
		records.push(i);
	});

	while (records.length !== 0) {
		answer[records[records.length - 1]] = prices.length - records[records.length - 1] - 1;
		records.pop();
	}

	return answer;
}