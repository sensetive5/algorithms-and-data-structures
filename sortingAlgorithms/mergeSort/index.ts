export function mergeTwoSortedArrays (array1: number[], array2: number[]): number[] {
    const result: number[] = [];

    let firstIdx = 0;
    let secondIdx = 0;

    while (firstIdx < array1.length && secondIdx < array2.length) {
        const firstArrayElement = array1[firstIdx];
        const secondArrayElement = array2[secondIdx];

        if (secondArrayElement > firstArrayElement) {
            result.push(firstArrayElement);
            firstIdx++;
        } else {
            result.push(secondArrayElement);
            secondIdx++;
        }
    }

    while (firstIdx < array1.length) {
        result.push(array1[firstIdx]);
        firstIdx++;
    }

    while (secondIdx < array2.length) {
        result.push(array2[secondIdx]);
        secondIdx++;
    }

    return result;
};

export function mergeSort(array: number[]): number[] {
    if (array.length < 2) return array;

    const middlePoint = Math.floor(array.length / 2);

    const leftPartOfArray = mergeSort(array.slice(0, middlePoint));
    const rightPartOfArray = mergeSort(array.slice(middlePoint));

    return mergeTwoSortedArrays(leftPartOfArray, rightPartOfArray);
};