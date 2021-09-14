import { areAnagrams } from "./index"

describe('isAnagrams', () => {
    it('Should return true if two words are anagrams', () => {
        const expectedValue = areAnagrams('papa', 'apap');

        expect(expectedValue).toBeTruthy();
    });

    it('Should return false if two words are not anagrams', () => {
        const expectedValue = areAnagrams('papa', 'lapa');

        expect(expectedValue).toBeFalsy();
    });


    it('Should return false if two words have not equal length', () => {
        const expectedValue = areAnagrams('foo', 'fuse');

        expect(expectedValue).toBeFalsy();
    })
});
