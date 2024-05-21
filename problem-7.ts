
function logString(paramsText: unknown): void {
    if (typeof (paramsText) === 'string') {
        console.log(paramsText);
    } else {
        console.error("Input is not a string.");
    }
}

logString("Hello, TypeScript!");

