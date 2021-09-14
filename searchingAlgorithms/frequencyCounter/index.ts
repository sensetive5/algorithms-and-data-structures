/**
 * Сравнивает два слова межу собой и выдает true
 * если эти слова являются анаграммами друг друга
 * @param {string} word1
 * @param {string} word2 
 * @returns {boolean}
 */
export function areAnagrams(word1: string, word2: string): boolean {
	if (word1.length !== word2.length) {
		return false;
	}

	const lookup: Record<string, number> = {};
	
	for (let i = 0; i < word1.length; i++) {
		const letter = word1.charAt(i);
		
		if (letter in lookup) {
			lookup[letter] += 1;
		} else {
			lookup[letter] = 1;
		}
	}

	for (let i = 0; i < word2.length; i++) {
		const letter = word2.charAt(i);
		
		if (letter in lookup) {
			lookup[letter] -= 1;
		} else {
			return false;
		}
	}

	return Object.values(lookup).every(value => value === 0);
}