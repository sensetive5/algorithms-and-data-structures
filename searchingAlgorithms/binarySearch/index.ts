function calculateMiddlePointerValue (leftPointer: number, rightPointer: number): number {
    return Math.floor((leftPointer + rightPointer) / 2);
}

export function binarySearch (numbersList: number[], searchedValue: number): number {
    if (numbersList.length === 0) return -1;

    let leftPointer = 0;
    let rightPointer = numbersList.length - 1;
    let middlePoint = calculateMiddlePointerValue(leftPointer, rightPointer);

    while (leftPointer < rightPointer) {
        const value = numbersList[middlePoint];

        if (value === searchedValue) {
            return middlePoint;
        } else if (searchedValue < value) {
            rightPointer = middlePoint - 1;
        } else {
            leftPointer = middlePoint + 1;
        }

        middlePoint = calculateMiddlePointerValue(leftPointer, rightPointer);
    }

    return -1;
}
