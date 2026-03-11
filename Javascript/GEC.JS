// let and const => The time period between accessing let and const variables before declaration. This is called TDE which is called Temporal Dead Zone.

// console.log(b);//error => cannot access b before initialisation.
// let b = 20;
// console.log(b);// 20

// let c;// hoisted but value will be unavailable => JS Engine will basically not store undefined inside c variable.
// console.log(c);// undefined

// Very Very Important Concept inside Javascript.
// Global Execution Context In Javascript.
// There are two phases inside Global Execution Context
// One is the Memory Creation Phase and second is the Code Execution phase
// That GEC is basically pushed inside the call Stack

// In the code Execution Phase when the JS Engine will reach and read the line let b; then only it will store undefined inside let variable, otherwise earlier it stores <value unavailable>;
// console.log("start");
// console.log(a);
// var a = 10;
// console.log(a);0
// let b;
// console.log(b);
// b = 20;
// const c = 100;
// console.log(c);
// console.log("End");

// TYPES Of Variables and it's scopes

// 1. GLOBAL VARIABLES
var a = 10;
let b = 20;
const c = 30;

if (100 > 2) {
  console.log(a, b, c);
}

for (let i = 0; i < 3; i++) {
  console.log(a, b, c, i);
}

function demo() {
  console.log(a, b, c);
}

// function call
demo();

// variables that are initially in Temporal Dead Zone, for them script scope is created.

// variables that are hoisted, for them Global Scope is created

// Both of these are Global Variables only, but for global variables there are 2 scopes => Global and Script

{
  let k = 1000;
}

// console.log(k);

// Local and Global variables 

// ! LOCAL VARIABLES : Variables which can be accessed within a block
// debugger
if (100 > 2) {
  var x = 10;// global variable - Global Scope
  let y = 20;// LOCAL variable - BLOCK SCOPE
  const z = 30;// LOCAL variable - BLOCK SCOPE
}

console.log(x);// 10
console.log(y); // ! ReferenceError: y is not defined

function demo2() {
  var aa = 10;
  let bb = 20;
  const cc = 30;
}

// ? var variable is having function scope.var variables are also known as function scope variables because it acts like local variable within a function.
console.log(aa); // ! ReferenceError: aa is not defined.


