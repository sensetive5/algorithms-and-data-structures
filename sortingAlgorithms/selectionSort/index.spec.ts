import {selectionSort} from "./index";

describe('selectionSort', () => {
   it ('Should sort array of numbers as ascending numeric order', () => {
       const expectedResult = selectionSort([3, 4, 1, 2, 0, 5, 6, 9, 8]);

       expect(expectedResult).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 8, 9]);
   })
});
