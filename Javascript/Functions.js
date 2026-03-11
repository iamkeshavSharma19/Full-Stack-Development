// ! Functions

// ! 1) NAMED FUNCTION : a function which has name.
// ! Note => Only Named functions can be called before declaration

// ? There are 10 types of function in Javascript.

// greet();

// function greet() {
//   console.log("Welcome");
// }

// console.log(a);
// let a;
// console.log(a);

// ? Predict the output
// ? Put the debugger and try executing this code.
// console.log("start");
// var a;
// console.log(a);
// fun();
// a = 10;
// console.log(fun);
// function fun() {
//   var str = "hello";
//   console.log(str);
// }
// console.log(fun);
// fun();
// console.log("end");

// console.log("start");
// console.log(student);
// var s1 = 100;
// function student() {
//   console.log("I am a student");
// }
// console.log(trainer);
// let s2 = 200;
// console.log(s2);
// function trainer() {
//   console.log("I am a trainer");
// }
// student();
// trainer();
// console.log("end");

// ! 2) Anonomous Function => Anonomous function is a function which is without a name
// function () {
//   console.log("I am Anonomous Function");
// }

// ! 3) FUNCTION EXPRESSION : It is used to call / invoke anonomous function

console.log(f1);

var f1 = function () {
  console.log("I am Anonomous Function called by using function expression");
};
console.log(typeof f1);

console.log(f1); // ? it will print function with body

f1(); // ? it will call the function

// ! 4) PARAMETERIZED FUNCTION
function sum(n1 = 0, n2 = 0) {
  console.log(n1 + n2);
}

sum(10, 20);
sum(50, 20);
sum();

function demo1(n1, n2, n3, n4, n5) {
  console.log(n1, n2, n3, n4, n5);
  // ? Arguments array is created whenever a function is called with the arguments.
  console.log(arguments);
}

demo1(10, 20, 30, 40, 50);
demo1(10, 20);
demo1(10, 20, 30, 40, 50, 60, 70, 80);

function printFullName(firstName, lastName, age) {
  console.log(`My Name is ${firstName} ${lastName} ${age}`);
}

// let firstNameInput = prompt("Enter firstName");
// let lastNameInput = prompt("Enter lastName");
// let ageInput = +prompt("Enter age");
// console.log(typeof ageInput);

// printFullName(firstNameInput, lastNameInput, ageInput);

// function
function getEmail(fname, lname) {
  let fullName = `${fname} ${lname}`;
  let email = `${fname} ${lname}@gmail.com`;
  // ? whatever will be written in the last that will be returned.
  // return email, fullName;
  // ? solution is return it in the form of an array
  return [email, fullName];
}

let [email] = getEmail("john", "Doe");
console.log(email);

// ! 6) NESTED FUNCTION

function parent() {
  let a1 = 100;
  console.log("I am parent");

  function child() {
    let b1 = 100;


    console.log("I am a child");
  }

  child();
}

parent();

// closure is a memory property when we try to access parent's property inside child property 