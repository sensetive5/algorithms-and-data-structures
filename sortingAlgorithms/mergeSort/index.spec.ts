import { mergeSort, mergeTwoSortedArrays } from ".";

describe('mergeTwoArrays', () => {
    it ('Should merge two arrays to one with ascending numeric order', () => {
        const expectedResult = mergeTwoSortedArrays([1, 3], [2, 4]);

        expect(expectedResult).toStrictEqual([1, 2, 3, 4]);
    });
});

describe('mergeSort', () => {
    it ('Should sort array of numbers using recursion', () => {
        const expectedResult = mergeSort([24, 10, 76, 73]);

        expect(expectedResult).toStrictEqual([10, 24, 73, 76]);
    });
});