console.log("javascript");

var n2 = "hello";
var n3 = "world";
console.log(n2, n3);

// Another way of making strings
var n4 = `Hey let us revise and go through javascript
and react js
`;
console.log(n4);

// Boolean
var n5 = true;
console.log(n5);// true

console.log(typeof n5);

console.log(typeof typeof n5);
console.log(typeof typeof typeof typeof n5);

var n6 = undefined;

let n7;
console.log(n7);

// for checking the truthy as well as falsy values.
console.log(Boolean(undefined));

// Big Int => -2^53 - 1 to 2 ^ 53 - 1
// for converting a number to bigInt, just put a small n after that number
var n8 = 9999999999999999999n;
console.log(n8);
console.log(typeof n8);

// Symbol data type
// Symbol is basically used for keeping the data unique!!
// Data inside the symbol will never be the same !!!!!
var n9 = Symbol("hello");
var n10 = Symbol("hello");

console.log(n9 == n10);
console.log(n9 === n10);

// var, let and const variable declarations.
var a;
console.log(a); // undefined

a = 10;
console.log(a); // 10

var b = 20;
console.log(b); // 20

b = 30;
console.log(b); // 30

var a = 40;
console.log(a); // 40

let c;
console.log(c);// undefined

c = 100;
console.log(c); // 100

// cannot redeclare let variable, but we can reinitialise it.
//let c;
c = 400;
console.log(c);

// const => declare and reinitialise at same time
const d = 600;
console.log(d); // 600



//  Hoisting => Moving declarations part at the top of original code internally

