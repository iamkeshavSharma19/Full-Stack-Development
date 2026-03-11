// ! Immediately Invoked Function Expression

(function () {
  console.log("I am a IIFE");
})();

// ! Constructor function => used to create objects..

// ! OBJECTS => it is used to store multiple data in the form of key and value pairs

// ? There are 3 ways to create an object

// ? 1) Object Literals
const obj1 = {
  // key-value pairs
  id: 1,
  fname: "John",
};
console.log(obj1);

// ? 2) Object Constructor
const obj2 = new Object({
  id: 2,
  fname: "Brock",
});
console.log(obj2);
// ? 3) Constructor Function

function Student(id, firstName) {
  console.log(this);
  this.id = id;
  this.firstName = firstName;
}

let s1 = new Student(1, "James");
console.log(s1);

// ! CRUD With Objects

// ! 1) Create
const obj = {
  id: 1,
  fname: "John",
  lname: "Cena",
  age: 45,
  company: "NA",
};

console.log(obj);

// ! 2) READ => There are 2 ways to read
// ? 1. using dot operator
console.log(obj.fname);
console.log(obj.sl); // undefined
// ? 2. using square brackets
console.log(obj["fname"]);

let x = "lname";
// ? we cannot use this variable name to access object's property, undefined would be printed...
console.log(obj.x);
console.log(obj[x]); // ! Cena

// ! iterating over object using for in loop
// ? this is the only way to iterate on an object.
let arr = [10, 20, 30, 40];

for (const keshav in arr) {
  console.log(keshav, arr[keshav]);
}
// writing the memory addresses also along with for in loop
// @404981 
// @635089 817

for (const key in obj) {
  console.log(obj[key]);
}

// ! update
obj.company = "TCS";

// ! Add a new Key
obj.salary = 60000;

console.log(obj);

// ! delete
delete obj.salary;

console.log(obj);

// ! OBJECT METHOD
// ! 1) Object.keys()
let keys = Object.keys(obj);
console.log(keys); // ["all keys"]
// ! 2) Object.values()
let values = Object.values(obj);
console.log(values);
// ! 3) Object.entries() => it return key-value pairs of the object in the form of array
let keyAndValue = Object.entries(obj);
console.log(keyAndValue);
// !4) Object.fromEntries()
let newObj = Object.fromEntries(keyAndValue);
console.log(newObj);

const myObject = {
  id: 1,
  fname: "John",
  lname: "Cena",
  age: 45,
  company: "NA",
};

console.log(myObject);
