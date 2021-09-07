export function countUniqueValues(numbersList: number[]): number {
	if (numbersList.length === 0) return 0;

	let leftPointer = 0;
	
	for (let rightPointer = 1; rightPointer < numbersList.length; rightPointer++) {
		const previousValue = numbersList[leftPointer];
		const currentValue = numbersList[rightPointer];

		if (previousValue === currentValue) {
			continue;
		} else {
			leftPointer++;
			numbersList[leftPointer] = currentValue;
		}
	}

	return leftPointer + 1;
}