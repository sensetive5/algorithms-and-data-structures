export function maxSubarraySum (numbersList: number[], count: number): number | null {
	if (count > numbersList.length) return null;

	let max = Number.NEGATIVE_INFINITY;

	for (let i = 0; i < numbersList.length - count + 1; i++) {
		let temp = 0;

		for (let j = 0; j < count; j++) {
			temp += numbersList[i + j];
		}
		
		max = Math.max(max, temp);
	}

	return max;
}

export function maxSubarraySum2 (numbersList: number[], count: number): number | null {
	if (count > numbersList.length) return null;

	let maxSum = 0;
	let tempSum = 0;

	for (let i = 0; i < count; i++) {
		maxSum += numbersList[i];
	}

	tempSum = maxSum;

	for (let i = count; i < numbersList.length; i++) {
		tempSum = tempSum - numbersList[i - count] + numbersList[i];
		maxSum = Math.max(maxSum, tempSum);
	}

	return maxSum;
}