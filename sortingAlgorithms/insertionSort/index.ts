export function insertionSort(numbersList: number[]): number[] {
    let i = 1;
    let j = 0;

    while (i < numbersList.length) {
        const currentValue = numbersList[i];

        j = i - 1;

        while(j >= 0 && numbersList[j] > currentValue) {
            numbersList[j + 1] = numbersList[j];
            j--;
        }

        numbersList[j + 1] = currentValue;
        i++;
    }

    return numbersList;
}