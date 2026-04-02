//! only declaration
var a;
let b;
// const c ; // const variable must be initialized at the time of declaration


//initialization
a = 10;
b = 20;

// re-declaration
var a=112345; // allowed
// let b; // not allowed, SyntaxError: Identifier 'b' has already been declared
// const c; // not allowed, SyntaxError: Identifier 'c' has already been declared

//declaration and initialization
var x = 100;
let y = 200;
const z = 300;

//re-initialization
x = 'shti'
y = 'beas'
// z = 'sri'

console.log(x);
console.log(y);
//console.log(z);//TypeError: Assignment to constant variable.