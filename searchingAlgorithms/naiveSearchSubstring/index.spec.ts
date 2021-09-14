import { searchSubstring } from "./index";

describe('searchSubstring', () => {
    it ('Should search longest sequence', () => {
        const expectedValue = searchSubstring('oren lor oriental', 'oreon');

        expect(expectedValue).toBe(3);
    });
});
