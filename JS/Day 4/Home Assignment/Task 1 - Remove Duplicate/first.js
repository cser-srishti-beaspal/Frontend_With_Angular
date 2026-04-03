//string
let str = "this is is a test test";

let result = [...new Set(str.split(" "))].join(" ");

console.log(result);

//array
let arr = [1, 2, 2, 3, 4, 4];

let unique = [...new Set(arr)];

console.log(unique);