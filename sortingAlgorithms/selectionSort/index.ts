export function selectionSort (numbersList: number[]): number[] {
    for (let i = 0; i < numbersList.length; i++) {
        let smallestElementIdx = i;

        for (let j = i + 1; j < numbersList.length; j++) {
            if (numbersList[smallestElementIdx] > numbersList[j]) {
                smallestElementIdx = j;
            }
        }

        const temporal = numbersList[i];
        numbersList[i] = numbersList[smallestElementIdx];
        numbersList[smallestElementIdx] = temporal;
    }

    return numbersList;
}
