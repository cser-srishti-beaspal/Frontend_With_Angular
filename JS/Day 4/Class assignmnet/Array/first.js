// let arr2 =[1,2,3,4,5]

// //pop - remove element from end of array using splice
// console.log(arr2.splice(4,1))
// console.log(arr2)

// //push - add element at end of array using splice
// console.log(arr2.splice(5,0,6))
// console.log(arr2)

// let arr = [10, 20, 30];

// // unshift using splice
// arr.splice(0, 0, 5);
// console.log(arr); // [5, 10, 20, 30]

// // shift using splice
// let arr1 = [10, 20, 30];
// let removed = arr1.splice(0, 1);
// console.log(arr);     // [20, 30]
// console.log(removed); // [10]


// ==============================
// ARRAY CREATION METHODS
// ==============================

// Array.of() → creates array from values
let arr1 = Array.of(1, 2, 3);
console.log("Array.of:", arr1); // [1,2,3]

// Array.from() → converts iterable to array
let str = "hello";
let arr2 = Array.from(str);
console.log("Array.from:", arr2); // ['h','e','l','l','o']

// Array.from() with mapping
let arr3 = Array.from([1, 2, 3], x => x * 2);
console.log("Array.from with map:", arr3); // [2,4,6]



// ==============================
// ADD / REMOVE METHODS
// ==============================

let arr = [2, 3];

// unshift() → add at beginning
arr.unshift(1);
console.log("After unshift:", arr); // [1,2,3]

// push() → add at end
arr.push(4);
console.log("After push:", arr); // [1,2,3,4]

// shift() → remove from beginning
let firstRemoved = arr.shift();
console.log("After shift:", arr); // [2,3,4]
console.log("Removed first:", firstRemoved); // 1

// pop() → remove from end
let lastRemoved = arr.pop();
console.log("After pop:", arr); // [2,3]
console.log("Removed last:", lastRemoved); // 4



// ==============================
// SPLICE (ADVANCED)
// ==============================

let spliceArr = [10, 20, 30, 40];

// remove elements
spliceArr.splice(1, 2);
console.log("After splice remove:", spliceArr); // [10,40]

// add elements
spliceArr.splice(1, 0, 25);
console.log("After splice add:", spliceArr); // [10,25,40]

// replace elements
spliceArr.splice(1, 1, 99);
console.log("After splice replace:", spliceArr); // [10,99,40]



// ==============================
// LOOPING METHODS (CALLBACKS)
// ==============================

let nums = [1, 2, 3, 4];

// forEach → just loop (no return)
nums.forEach(function(x) {
  console.log("forEach:", x);
});



// ==============================
// MAP (TRANSFORM)
// ==============================

let mapped = nums.map(function(x) {
  return x * 2; // IMPORTANT: must return
});
console.log("map:", mapped); // [2,4,6,8]



// ==============================
// FILTER (CONDITION)
// ==============================

let filtered = nums.filter(function(x) {
  return x % 2 === 0; // must return true/false
});
console.log("filter:", filtered); // [2,4]



// ==============================
// REDUCE (SINGLE VALUE)
// ==============================

let sum = nums.reduce(function(acc, curr) {
  return acc + curr; // must return
}, 0);
console.log("reduce sum:", sum); // 10



// ==============================
// COMMON MISTAKE (IMPORTANT)
// ==============================

// ❌ map without return → gives undefined
let wrong = nums.map(function(x) {
  x * 2; // no return
});
console.log("wrong map:", wrong); // [undefined, undefined, undefined]



// ==============================
// FOR...OF vs FOR...IN
// ==============================

let arrLoop = [10, 20, 30];

// for...of → values
for (let value of arrLoop) {
  console.log("for...of:", value);
}

// for...in → index
for (let index in arrLoop) {
  console.log("for...in:", index);
}



// ==============================
// CALLBACK FUNCTION EXAMPLE
// ==============================

function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Srishti", sayBye);

// =======================================
// SLICE vs SPLICE vs REVERSE vs JOIN
// =======================================


// ==============================
// 1. SLICE (NON-DESTRUCTIVE)
// ==============================

// let arr1 = [10, 20, 30, 40];

// // slice(start, end)
// // returns new array (end index excluded)
// let sliced = arr1.slice(1, 3);

// console.log("slice result:", sliced); // [20, 30]
// console.log("original array after slice:", arr1); // [10, 20, 30, 40]


// // ==============================
// // 2. SPLICE (DESTRUCTIVE)
// // ==============================

// let arr2 = [10, 20, 30, 40];

// // splice(start, deleteCount)
// // removes elements from original array
// let removed = arr2.splice(1, 2);

// console.log("splice removed:", removed); // [20, 30]
// console.log("array after splice:", arr2); // [10, 40]


// // ADD using splice
// arr2.splice(1, 0, 25);
// console.log("after adding using splice:", arr2); // [10, 25, 40]


// // REPLACE using splice
// arr2.splice(1, 1, 99);
// console.log("after replacing using splice:", arr2); // [10, 99, 40]


// // ==============================
// // 3. REVERSE (DESTRUCTIVE)
// // ==============================

// let arr3 = [1, 2, 3, 4];

// // reverse modifies original array
// arr3.reverse();

// console.log("reverse result:", arr3); // [4, 3, 2, 1]


// // ==============================
// // 4. JOIN (ARRAY → STRING)
// // ==============================

// let arr4 = ["A", "B", "C"];

// // join with separator
// let joined = arr4.join("-");

// console.log("join result:", joined); // "A-B-C"


// // default join (comma)
// console.log("default join:", arr4.join()); // "A,B,C"


// // ==============================
// // COMBINED EXAMPLE
// // ==============================

// let arr5 = [10, 20, 30, 40];

// // slice (copy)
// let part = arr5.slice(1, 3); // [20,30]

// // splice (remove)
// arr5.splice(1, 1); // remove 20 → [10,30,40]

// // reverse
// arr5.reverse(); // [40,30,10]

// // join
// let str = arr5.join("-");

// console.log("final string:", str); // "40-30-10"


// // ==============================
// // SUMMARY (IMPORTANT)
// // ==============================

// // slice → copy (no change in original)
// // splice → modify (add/remove/replace)
// // reverse → reverses original array
// // join → converts array to string


