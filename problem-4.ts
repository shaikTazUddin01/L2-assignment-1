
function reverseArray<T>(arr: T[]):T[] {
    let reverseArr:T[] = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reverseArr.push(arr[i])
    }
    return reverseArr;
}

type DefineType = number | string ;

const reverseArr : DefineType[] = reverseArray<DefineType>(["apple", "banana", "cherry"]);

// const reverseArr: DefineType [] = reverseArray<DefineType>([10,20,30]);

console.log(reverseArr);