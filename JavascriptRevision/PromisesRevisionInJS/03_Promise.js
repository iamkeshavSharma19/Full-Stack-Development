//? Whenever we chain a then method on our promise, that method will be responsible for creating a promise reaction record. This reaction record (among many other fields) contains a handler. And that handler field has the callback function that we passed into then. Let's see in the picture:

//!  Promise Reaction's handler will be added to the Microtask queue. This is where the async part of promises comes into play.

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(`setTimeOut`);
    resolve(`Resolved!!`);
  }, 3000);
});

console.log(p1);

p1.then((result) => {
  console.log(result);
});

console.log(`Sync Code`);
console.log(`Sync Code`);
console.log(`Sync Code`);
console.log(`Sync Code`);
console.log(`Sync Code`);
console.log(`Sync Code`);

for (let i = 1; i <= 10; i++) {
  console.log(`NO.S from 1 to 10 are ${i}`);
}

