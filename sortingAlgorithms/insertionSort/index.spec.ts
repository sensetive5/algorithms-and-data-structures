import { insertionSort } from ".";

describe('insertionSort', () => {
    it('Should sort numbers list in ascending numeric order', () => {
        const expectedResult = insertionSort([3, 2, 1, 10, 9, 8, 7]);

        expect(expectedResult).toStrictEqual([1, 2, 3, 7, 8, 9 , 10]);
    });
});