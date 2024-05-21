
const findLargestNumber = (arr: number[]): number => {
    let largeNumber:number = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largeNumber) {
            largeNumber = arr[i]
        }

    }
    return largeNumber;
}


const largeNumber: number = findLargestNumber([10, 5, 8, 20, 3])

console.log(largeNumber);