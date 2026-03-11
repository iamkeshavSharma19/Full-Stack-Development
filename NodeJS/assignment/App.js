const fs = require("node:fs");

//~ Hardcoded values
const a = 10;
const b = 5;

function add(a, b) {
  return a + b;
}

function subtraction(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "division by zero not possible";
    //throw new Error("not possible");
  }
  return a / b;
}
const addResult = add(a, b);
const subtract = subtraction(a, b);
const mul = multiply(a, b);
const div = divide(a, b);

//? Performing arithmetic operations on the hardCoded values

try {
  const content = `Addition: ${addResult}
                   subtraction: ${subtract}
                   multiplication:${mul}
                   division: ${div}`;
  fs.writeFileSync("result.txt", content);
  console.log("File written successfully!");
} catch (err) {
  console.error("err");
}
