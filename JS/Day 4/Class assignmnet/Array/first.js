// let arr2 =[1,2,3,4,5]

// pop - remove element from end of array using splice
// console.log(arr2.splice(4,1))
// console.log(arr2)

// push - add element at end of array using splice
// console.log(arr2.splice(5,0,6))
// console.log(arr2)

// let arr = [10, 20, 30];

// // unshift using splice
// arr.splice(0, 0, 5);
// console.log(arr); 

// // shift using splice
// let arr1 = [10, 20, 30];
// let removed = arr1.splice(0, 1);
// console.log(arr);     
// console.log(removed);

// Array.of()
let arr1 = Array.of(1, 2, 3);
console.log("Array.of:", arr1); // [1,2,3]

// Array.from()
let str = "hello";
let arr2 = Array.from(str);
console.log("Array.from:", arr2); // ['h','e','l','l','o']

// Array.from() with mapping
let arr3 = Array.from([1, 2, 3], x => x * 2);
console.log("Array.from with map:", arr3); // [2,4,6]

let arr = [2, 3];

// unshift()
arr.unshift(1);
console.log("After unshift:", arr); // [1,2,3]

// push() 
arr.push(4);
console.log("After push:", arr); // [1,2,3,4]

// shift()
let firstRemoved = arr.shift();
console.log("After shift:", arr); // [2,3,4]
console.log("Removed first:", firstRemoved); // 1

// pop()
let lastRemoved = arr.pop();
console.log("After pop:", arr); // [2,3]
console.log("Removed last:", lastRemoved); // 4


let spliceArr = [10, 20, 30, 40];

// remove 
spliceArr.splice(1, 2);
console.log("After splice remove:", spliceArr); 

// add elements
spliceArr.splice(1, 0, 25);
console.log("After splice add:", spliceArr); 

// replace elements
spliceArr.splice(1, 1, 99);
console.log("After splice replace:", spliceArr);

let nums = [1, 2, 3, 4];

// forEach 
nums.forEach(function(x) {
  console.log("forEach:", x);
});



//map
let mapped = nums.map(function(x) {
  return x * 2; 
});
console.log("map:", mapped); 
// FILTER
let filtered = nums.filter(function(x) {
  return x % 2 === 0;
});
console.log("filter:", filtered); 

// REDUCE 
let sum = nums.reduce(function(acc, curr) {
  return acc + curr; 
}, 0);
console.log("reduce sum:", sum);


let wrong = nums.map(function(x) {
  x * 2; 
console.log("wrong map:", wrong); // [undefined, undefined, undefined]
});


let arrLoop = [10, 20, 30];

for (let value of arrLoop) {
  console.log("for...of:", value);
}

for (let index in arrLoop) {
  console.log("for...in:", index);
}




function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Srishti", sayBye);


// let arr1 = [10, 20, 30, 40];

// // slice(start, end)
// // returns new array (end index excluded)
// let sliced = arr1.slice(1, 3);

// console.log("slice result:", sliced); 
// console.log("original array after slice:", arr1); 



// let arr2 = [10, 20, 30, 40];

// // splice(start, deleteCount)
// // removes elements from original array
// let removed = arr2.splice(1, 2);

// console.log("splice removed:", removed); 
// console.log("array after splice:", arr2); 


// // ADD using splice
// arr2.splice(1, 0, 25);
// console.log("after adding using splice:", arr2); 


// // REPLACE using splice
// arr2.splice(1, 1, 99);
// console.log("after replacing using splice:", arr2); 



// let arr3 = [1, 2, 3, 4];

// // reverse modifies original array
// arr3.reverse();

// console.log("reverse result:", arr3); 




// let arr4 = ["A", "B", "C"];

// // join with separator
// let joined = arr4.join("-");

// console.log("join result:", joined); 


// // default join (comma)
// console.log("default join:", arr4.join()); 




// let arr5 = [10, 20, 30, 40];

// // slice 
// let part = arr5.slice(1, 3); 

// // splice 
// arr5.splice(1, 1);

// // reverse
// arr5.reverse();

// // join
// let str = arr5.join("-");

// console.log("final string:", str); 


