function outer() {
  let x = 10;
  return function inner() {
    console.log(x);
  }
}
// debugger;
// let res = outer();
// res(); // 10
outer()(); // function carrying


// IIFE - Immediately Invoked Function Expression --> global variable pollution
(function (){
    console.log("IIFE");
})()