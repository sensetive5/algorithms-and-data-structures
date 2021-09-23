import { getDigit, getDigitsCount, getMostDigitsNumberCount, radixSort } from ".";

describe('getDigit', () => {
    it('Should return digit by place in number', () => {
        const expectedResult = getDigit(1234, 2);
        expect(expectedResult).toBe(2);
    });
});

describe('getDigitsCount', () => {
    it('Should return count of digits in number', () => {
        const expectedResult = getDigitsCount(12345);
        expect(expectedResult).toBe(5);
    });

    it('Should return 1 if number 0 is passed', () => {
        const expectedResult = getDigitsCount(0);
        expect(expectedResult).toBe(1);
    });
});

describe('getMostDigitsNumberCount', () => {
    it ('Should return max count of digits in numbers list', () => {
        const expectedResult = getMostDigitsNumberCount([1, 23, 345, 6789]);

        expect(expectedResult).toBe(4);
    });
});

describe('radixSort', () => {
    it('Should sort numbers list by digits', () => {
        const expectedResult = radixSort([23, 345, 5467, 12, 2345, 9852]);

        expect(expectedResult).toStrictEqual([12, 23, 345, 2345, 5467, 9852])
    });
});
