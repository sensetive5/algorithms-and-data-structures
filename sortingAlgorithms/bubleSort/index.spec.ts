import {bubleSort} from "./index";

describe('bubleSort', () => {
    it('Should sort list of numbers ascending sorting', () => {
        const expectedResult = bubleSort([-1, 10, -10, 15, 4, 2, 3, 6, 115, 100, 95]);
    });
});
