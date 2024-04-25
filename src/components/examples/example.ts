// string type
let username: string = "Hello";
console.log("name is + ", username.toString())


// number 
let age: number = 10;

if(age >= 10){
    age = parseInt("25");
}

// boolean
let temp: boolean = false;

if(!temp){
    age = parseInt("10") + age;
}

// array, let's defien a string array
let intArray: number[] = [1, 2, 3];
let anyArray: any[] = [1, 2, "4"];
let genArray: Array<any> = [1, 2, 3, "4"] // use generics to generate 

let filteredNumber: number[] = intArray.filter((num) => num > 2)
let desiredNumbers: number | undefined = intArray.find((num) => num === 1)

// enums, define enum
enum Color{
    red, 
    blue, 
    green,
    yellow,
    pink
}
let c: Color = Color.pink; // how to use enums

// tuple in angular
let myTuple: readonly [number, boolean, string] = [1, true, "name"];
console.log("name is : " + myTuple[2].toString())