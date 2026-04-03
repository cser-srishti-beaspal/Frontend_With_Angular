//forEach method
let arr = [1, 2, 3];
function printValue(x) {
  console.log(x);
}
arr.forEach(printValue);

//map method
let arr1 = [1, 2, 3];
function double(x) {
  return x * 2;
}
let result = arr1.map(double);
console.log(result); // [2, 4, 6]

//filter method
let arr2 = [1, 2, 3, 4];
function isEven(x) {
  return x % 2 === 0;
}
let result1 = arr2.filter(isEven);
console.log(result1); // [2, 4]


//reduce method
let arr3 = [1, 2, 3];
function sum(acc, curr) {
  return acc + curr;
}
let result2 = arr3.reduce(sum, 0);
console.log(result2); // 6