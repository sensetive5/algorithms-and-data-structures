export function searchSubstring (long: string, short: string): number {
    let count = 0;

    for (let i = 0; i < long.length; i++) {
        let temporal = 0;

        for (let j = 0; j < short.length; j++) {
            if (short[j] === long[i + j]) temporal++;
            else break;
        }

        count = Math.max(count, temporal);
    }

    return count;
}
