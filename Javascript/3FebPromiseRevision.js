//?Quickly revising Promises in Javascript
//?One way to create the Promise Object in javascript is using the Promise Constructor function.

const p1 = new Promise((resolve, reject) => {
  if (10 < 20) {
    resolve("Namaste Everyone!");
  } else {
    reject("Hello World");
  }
});
console.log(p1);

function sayHii() {
  console.log("Hii Keshav!");
}

//?then method also returns us a Promise object.
console.log(
  p1.then((result) => {
    console.log(result); //Namaste Everyone!
    return "value returned from the first then handler";
  })
);

sayHii();
console.log("sync code");
console.log("sync code");
console.log("sync code");
console.log("sync code");
console.log("sync code");
console.log("sync code");

//?Promise and setTimeOut example
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise resolved after 20 seconds");
//   }, 20000);
// });

// // console.log(p2);

// p2.then((result) => {
//   console.log(result);
// }).catch((err) => {
//   console.log(err);
// });

// console.log(p2);
