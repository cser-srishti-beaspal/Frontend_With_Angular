

//An object is a collection of key–value pairs
// function factory(name, age) {
//     return {
//         name: name,
//         age: age
//     }
// }

// let obj={
//     name:"John",
//     age:30,
//     address:{
//         city : "New York",
//         country : "USA"
//     },
//     printInfo : function(){
//         console.log("Name: " + this.name + ", Age: " + this.age);
//     }
// }

// console.log(obj);
// console.log(obj.printInfo());


// for(const key in obj){
//     console.log(key + ": " + obj[key]);
// }

// console.log(obj.keys(obj));
// console.log(obj.values(obj));
// console.log(obj.freeze(obj));
// obj.seal(obj);
// obj.isSealed();
// obj.isFrozen();
// for(const key of obj){
//     console.log(key + ": " + obj[key]);
// }


//Object Literal
// let person = {
//   name: "Srishti",
//   age: 21,
//   greet: function() {
//     console.log("Hello!");
//   }
// };

// person.greet();

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }
// let p1 = new Person("Srishti", 21);
// console.log(p1);


// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
// let pa1 = new Person("Srishti", 21);
// let pa2 = new Person("Rahul", 25);
// console.log(pa1);
// console.log(pa2);

let obj={
    name:"John",
    age:30,
    address:{
        city : "New York",
        country : "USA"
    },
    printInfo : function(){
        console.log("Name: " + this.name + ", Age: " + this.age);
    }
}



//destructuring
//the variable should be same as the key
let {name, age} = obj;
console.log(name);
console.log(age);

let arr= [1, 2, 3, 4, 5];
// let [a, b] = arr;
let [a, b,,c] = arr;
console.log(a,b,c);//12

//!ES 6 features
//spread operator
let copyArr = [...arr];
console.log(copyArr); // [1, 2, 3, 4, 5]

let copyObj = {...obj};
console.log(copyObj); //


//rest parameter
function namee(a,...arr) {
    console.log(a);
    console.log(arr);

}
//the rest parameter should be last parameter
namee(1,2,3,4,5); // 1 [2,3,4,5]


