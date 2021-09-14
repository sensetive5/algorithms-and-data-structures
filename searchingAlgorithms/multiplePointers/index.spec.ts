import { countUniqueValues } from "./index"

describe('countUniqueValues', () => {
    it('Should return 0 if input array is empty', () => {
        const expectedValue = countUniqueValues([]);

        expect(expectedValue).toBe(0);
    });

    it('Should return 2 if input array contains two different values', () => {
        const expectedValue = countUniqueValues([1, 2]);

        expect(expectedValue).toBe(2);
    });

    it('Should return 2 if input array contains five repeated values', () => {
        const expectedValue = countUniqueValues([1, 1, 2, 2, 2]);

        expect(expectedValue).toBe(2);
    });
});
