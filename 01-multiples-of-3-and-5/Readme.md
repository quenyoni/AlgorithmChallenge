# Challenge #1: Multiples of 3 and 5 

This is a practice challenge from https://projecteuler.net/problem=1

## Instructions

Write a function called `multiples` that takes in a number `num` and returns the total of the multiples num'.

### Function Signature

```js
/**
 * Returns a number that is the total of multiples of 3 and 5'.
 * @returns {number} 
 */
function multiples(num:number): number;
```



### Constraints

I will put any constraints here. They will vary depending on the challenge.

- The function must return an integer


## Solutions

<details>
  <summary>Click For Solution</summary>

```JS
function multiples(num:number):number {
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
```

### Explanation

We push any integer that qualifies to be  multiple of 3 or 5 , then we use the Array.reduce method to find the total of the multiples.

</details>



