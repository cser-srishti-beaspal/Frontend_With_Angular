let x = 5;
console.log(x);

let y:string = "hi";
console.log(y);

let h1 : {
    name: String;
    age : number;
};

interface Human{
    name: String;
    age : number;
}



//tuple
let person: [string, number] = ["Srishti", 21];
console.log(person);

interface Person {
  name: string;
  age: number;
}

interface ResultTuple {
  value: [number, boolean, Person];
}

function doAdd(a: number, b: number): ResultTuple {
  const sum = a + b;

  return {
    value: [
      sum,
      true,
      { name: "abc", age: 30 }
    ]
  };
}

type Operation = (a: number, b: number) => number;
//add
const add = (x: number, y: number): number => x + y;
//HOF
function calculatorHOF(
  a: number,
  b: number,
  operation: Operation
): [number, boolean, Person] {

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
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const p1 = new Person("Srishti", 21);
console.log(p1);

let a : any = 1;
a=false;
a="hi";
console.log(a);

console.log(a.toUpperCase()); 

let b : unknown = 1;
b=false;
b="hi";
console.log(b);
// console.log(b.toUpperCase()); 

//generic 
function identity<T>(value: T): T {
  return value;
}

identity<number>(10);
identity<string>("hello");

//decorator

//type assertion
let value: unknown = "hello";
let len = (value as string).length;

let arr : number[] = [1,2,3];
let num :[number]=[5];
let nums : [number,number,number] = [6,7,8];
let t: [number,boolean]=[6,true];

let task: [number,boolean,Human]=[1,false,{name: "tanya", age:21}];
console.log(num);
console.log(t);
console.log(nums);
console.log(arr);
console.log(num);