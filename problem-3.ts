
const filterEvenNumbers = (arr: number[]): number[] => {

    const evenNumber: number[] = arr.filter(element => element % 2 == 0)

    return evenNumber;
}

const evenNumber: number[] = filterEvenNumbers([1, 2, 3, 4, 5, 6])

console.log(evenNumber);