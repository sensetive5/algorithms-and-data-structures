function swapTwo (numbersList: number[], idx1: number, idx2: number): void {
    const temporal = numbersList[idx1];
    numbersList[idx1] = numbersList[idx2];
    numbersList[idx2] = temporal;
}

export function bubbleSort (numbersList: number[]): number[] {
    for (let i = 0; i < numbersList.length; i++) {
        for (let j = 0; j < numbersList.length; j++) {
            const nextIdx = j + 1;
            const current = numbersList[j];
            const next = numbersList[nextIdx];

            if (current > next) {
                swapTwo(numbersList, j, nextIdx);
            }
        }
    }

    return numbersList;
}

export function bubbleSortOptimized (numbersList: number[]): number[] {
    let noSwaps: boolean;

    for (let i = 0; i < numbersList.length; i++) {
        noSwaps = true;

        for (let j = 0; j < numbersList.length; j++) {
            const nextIdx = j + 1;
            const current = numbersList[j];
            const next = numbersList[nextIdx];

            if (current > next) {
                swapTwo(numbersList, j, nextIdx);
                noSwaps = false;
            }
        }

        if (noSwaps) break;
    }

    return numbersList;
}

