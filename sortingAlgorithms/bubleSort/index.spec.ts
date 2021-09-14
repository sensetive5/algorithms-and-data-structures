import {bubbleSort, bubbleSortOptimized} from "./index";

describe('bubbleSort', () => {
    describe('bubbleSort', () => {
        it('Should sort list of numbers ascending numeric order', () => {
            const expectedResult = bubbleSort([-1, 10, -10, 15, 4, 2, 3, 6, 115, 100, 95]);

            expect(expectedResult).toStrictEqual([-10, -1, 2, 3, 4, 6, 10, 15, 95, 100, 115]);
        });
    });

    describe('bubbleSortOptimized', () => {
        it('Should sort list of numbers ascending numeric order', () => {
            const expectedResult = bubbleSortOptimized([8, 1, 2, 3, 4, 5, 6, 7]);

            expect(expectedResult).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8]);
        });
    });
});
