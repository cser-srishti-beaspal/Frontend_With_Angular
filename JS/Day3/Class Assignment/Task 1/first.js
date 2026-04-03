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