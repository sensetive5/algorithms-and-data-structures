export function getDigit(number: number, place: number): number {
    const divider = Math.pow(10, place);
    return Math.floor(Math.abs(number) / divider) % 10;
}

export function getDigitsCount(number: number): number {
    if (number === 0) return 1;

    return Math.floor(Math.log10(Math.abs(number))) + 1;
}

export function getMostDigitsNumberCount(numbersList: number[]): number {
    let maxDigits = 0;

    for (let number of numbersList) {
        maxDigits = Math.max(maxDigits, getDigitsCount(number));   
    }

    return maxDigits;
}

export function radixSort(numbersList: number[]): number[] {
    const maxDigitCount = getMostDigitsNumberCount(numbersList);
    
    for (let k = 0; k < maxDigitCount; k++) {
        let digitBuckets: number[][] = Array.from({ length: 10 }, () => []);

        for (let i = 0; i < numbersList.length; i++) {
            const number = numbersList[i];
            const digit = getDigit(number, k);
            digitBuckets[digit].push(number);
        }

        numbersList = [].concat(...digitBuckets);
    }

    return numbersList;
}