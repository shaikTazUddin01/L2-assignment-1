
function repeatString(repeatText:string, repeatNumber:number) : string {
    if (repeatNumber<0) {
        return "repeats number must be a positive integer";
    }
    const textString:string=repeatText.repeat(repeatNumber)

    return textString;
}


const repeatText = repeatString("Hello!", 3)
console.log(repeatText);