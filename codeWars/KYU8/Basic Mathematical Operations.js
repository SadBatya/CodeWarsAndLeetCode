// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

function basicOp(operation, value1, value2) {
  //первый метод решения с помощью if else
  // if (operation == "+") {
  //   return value1 + value2;
  // } else if (operation == "-") {
  //   return value1 - value2;
  // } else if (operation == "*") {
  //   return value1 * value2;
  // } else {
  //   return value1 / value2;
  // }

  // второй метод решения с помощью switch case
  switch (operation) {
    case "+":
      return value1 + value2;
    case "-":
      return value1 - value2;
    case "*":
      return value1 * value2;
    case "/":
      return value1 / value2;
    default:
      break;
  }
}

console.log(basicOp("-", 15, 18));
