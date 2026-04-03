let x = 10;
const y = 20;

let name = "Srishti";
console.log(`Hello ${name}`);

function greet(name = "Guest") {
    console.log("Hello " + name);
}

greet();
greet("Srishti");

let arr = [1, 2, 3];
let [a, b, c] = arr;

console.log(a, b, c);

let arr1 = [1, 2];
let arr2 = [...arr1, 3, 4];

console.log(arr2);

function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1,2,3,4));