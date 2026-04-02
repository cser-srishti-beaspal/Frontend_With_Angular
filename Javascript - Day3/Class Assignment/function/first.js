//named function
function greet() {
  console.log("Hello");
};

//anonymous function
let x = function(){
  console.log("Hello anonymous function");
  return 10+20;
};

//function expression
let add = function(a, b) {
  return a + b;
};

//higher order function
function calc1(a,b, operation) {
  console.log(operation(a,b));
}

//or



function calculator(a, b, operation) {
  if (operation === "+") {
    return () => a + b;
  } else if (operation === "-") {
    return () => a - b;
  } else if (operation === "*") {
    return () => a * b;
  } else if (operation === "/") {
    return () => a / b;
  }
}

let result = calculator(10, 5, "+");
console.log(result());  // 15


// //calling the functions
// calculator(10, 20, "+"); // 30
// calc1(10, 20, add); // 30
// calc2(10, 20, (a,b) => console.log(a + b)); // 30
// add(10, 20); // 30
// x();// Hello
// greet(); // Hello


function abc(){
  
}