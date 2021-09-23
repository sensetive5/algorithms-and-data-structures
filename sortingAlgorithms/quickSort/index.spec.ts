import { pivotHelper, quickSort, swap } from "."

describe('quickSort', () => {
    it('Should sort array of numbers in ascending numeric order', () => {
        const expectedResult = quickSort([3, 2, 5, 4, 1, 0, 9, 6, 8, 7]);
        expect(expectedResult).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
});

describe('pivotHelper', () => {
    it ('Should return pivot index of number', () => {
        const expectedResult = pivotHelper([4, 8, 2, 1, 5, 7, 6, 3]);
        expect(expectedResult).toBe(3);
    });
});

describe('swap', () => {
    it ('Should swap elements in array', () => {
        const numbersList = [1, 2, 3];
        swap(numbersList, 0, 2);
        expect(numbersList).toStrictEqual([3, 2, 1]);
    });
});