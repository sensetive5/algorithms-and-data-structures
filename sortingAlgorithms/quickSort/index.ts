export function swap(array: number[], i: number, j: number) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

export function pivotHelper (
    numbersList: number[],
    start = 0,
    end = numbersList.length + 1
): number {
    let pivot = numbersList[start];
    let swapIdx = start;

    for (let i = start + 1; i < numbersList.length; i++) {
        if (pivot > numbersList[i]) {
            swapIdx++;
            swap(numbersList, swapIdx, i);
        }
    }

    swap(numbersList, start, swapIdx);
    return swapIdx;
}

export function quickSort (numbersList: number[], left = 0, right = numbersList.length - 1): number[] {
    if (left < right) {
        let pivotIdx = pivotHelper(numbersList, left, right);

        quickSort(numbersList, left, pivotIdx - 1);
        quickSort(numbersList, pivotIdx + 1, right);
    }

    return numbersList;
}