// If we list all the natural numbers below that are multiples of or , we get and . The sum of these multiples is

// .

// Find the sum of all the multiples of
// or below .

export function multiples(num) {
	const multiplesArray = [];

	for (let i = 0; i < num; i++) {
		if (i % 3 == 0 || i % 5 == 0) {
			multiplesArray.push(i);
		}
	}

	return multiplesArray.reduce((sum, el) => {
		return (sum += el);
	}, 0);
}

console.log(multiples(1000));
