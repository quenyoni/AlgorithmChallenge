// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143;

function primeFactors(num) {
	const pFs = [];

	for (let i = 0; i < num; i++) {
		if (num % i == 0 && num % 1 == 0) {
			pFs.push(i);
		}
	}
	return pFs;
}

console.log(primeFactors(13195));
