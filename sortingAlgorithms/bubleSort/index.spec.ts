import {bubbleSort} from "./index";

describe('bubbleSort', () => {
    it('Should sort list of numbers ascending numeric order', () => {
        const expectedResult = bubbleSort([-1, 10, -10, 15, 4, 2, 3, 6, 115, 100, 95]);

        expect(expectedResult).toStrictEqual([-10, -1, 2, 3, 4, 6, 10, 15, 95, 100, 115]);
    });
});
