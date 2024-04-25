// Fucntion examples

// with return type in function
function addNumbers(a: number, b: number): number | any {
    if(a != null && b != null){
        return a + b;
    }else{
        return null;
    }
}

// no return type in functions
function printName(name: string): void {
    console.log("name is : " + name.toString())
}

// one line function or say Arrow funtion
const subNumbers = (a: number, b: number) : number => {
    return a - b;
}

// another way to write funcion in angular
const mulNumbers = function(a: number, b: number): number {
    return a * b;
}

// Optional parameters
const optParams = function(a: number, b: number, c?: number | undefined): number {
    let result: number = c? a * b * c : a*b;
    return result;
}

// REST parameters are as follows, rest parameters allows to pass arbitrary number of input to function
function sumNumbers(...numbers: number[]): number {
    return numbers.reduce((total, sum) => total + sum, 0)
}

// assign default values to it
function defaultVals(a: number, b: number = 10, c?: number | undefined) {
    return a + b + c;
}