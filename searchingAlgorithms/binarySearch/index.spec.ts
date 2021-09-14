import {binarySearch} from './index';

describe('binarySearch', () => {
    it ('Should return an index of searched value', () => {
        const expectedValue = binarySearch([1, 2, 3, 4, 5], 4);
        expect(expectedValue).toBe(3);
    });


    it ('Should return -1 if empty array passed', () => {
        const expectedValue = binarySearch([], 4);
        expect(expectedValue).toBe(-1);
    });

    it ('Should return -1 if searched value does not exist in array', () => {
        const expectedValue = binarySearch([1, 3, 5, 7, 9, 12, 18], 4);
        expect(expectedValue).toBe(-1);
    });
});
