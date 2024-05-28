export function evenFibs(limit) {
	const fibList = [1, 2];

	//current num = positionLast + positionLast-1;

	while (true) {
		const currentNum =
			fibList[fibList.length - 1] +
			fibList[fibList.length - 2];

		//condition that will negate the while loop
		if (currentNum > limit) {
			break;
		}

		fibList.push(currentNum);
	}

	return fibList.reduce((sum, num) => {
		return (sum = num % 2 == 0 ? sum + num : sum);
	}, 0);
}

console.log(evenFibs(4000000));
