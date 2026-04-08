"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let x = 5;
console.log(x);
let y = "hi";
console.log(y);
let h1;
//tuple
let person = ["Srishti", 21];
console.log(person);
function doAdd(a, b) {
    const sum = a + b;
    return {
        value: [
            sum,
            true,
            { name: "abc", age: 30 }
        ]
    };
}
//add
const add = (x, y) => x + y;
//HOF
function calculatorHOF(a, b, operation) {
    const result = operation(a, b);
    return [result, true, { name: "abc", age: 30 }];
}
//call HOF
const output = calculatorHOF(10, 5, add);
console.log(output);
//call func
const result = doAdd(10, 5);
console.log(result.value[0]); // sum -> 15
console.log(result.value[1]); // true
console.log(result.value[2].name); // abc
//class
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const p1 = new Person("Srishti", 21);
console.log(p1);
let a = 1;
a = false;
a = "hi";
console.log(a);
console.log(a.toUpperCase());
let b = 1;
b = false;
b = "hi";
console.log(b);
// console.log(b.toUpperCase()); 
//generic 
function identity(value) {
    return value;
}
identity(10);
identity("hello");
//decorator
//type assertion
let value = "hello";
let len = value.length;
let arr = [1, 2, 3];
let num = [5];
let nums = [6, 7, 8];
let t = [6, true];
let task = [1, false, { name: "tanya", age: 21 }];
console.log(num);
console.log(t);
console.log(nums);
console.log(arr);
console.log(num);
