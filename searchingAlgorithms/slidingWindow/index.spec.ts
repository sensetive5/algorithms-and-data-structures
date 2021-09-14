import { maxSubarraySum, maxSubarraySum2 } from "./index"

describe('maxSubarraySum', () => {
    it('Should return max sum of count consecutive numbers', () => {
        const expectedValue = maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2);

        expect(expectedValue).toBe(10);
    });

    it('Should return null if array size is less than count consecutive numbers', () => {
        const expectedValue = maxSubarraySum([], 2);

        expect(expectedValue).toBeNull();
    });
})

describe('maxSubarraySum2', () => {
    it('Should return max sum of count consecutive numbers', () => {
        const expectedValue = maxSubarraySum2([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);

        expect(expectedValue).toBe(19);
    });

    it('Should return null if array size is less than count consecutive numbers', () => {
        const expectedValue = maxSubarraySum2([], 2);

        expect(expectedValue).toBeNull();
    });
})
