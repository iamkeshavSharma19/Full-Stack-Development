//!nextTick function ==> it is a higher order function

//~Async code
// process.nextTick(() => {
//   console.log("4");
// });

// //~Sync code
// console.log("1");
// console.log("2");
// console.log("3");

//?First all the synchronous statements will get executed then event-loop will come into picture and it will see if there are any pending callbacks, if yes then the particular callback will be pushed inside the call stack.

//!Example 02

// console.log("1");

// process.nextTick(() => {
//   console.log("4");
// });

// console.log("2");

// process.nextTick(() => {
//   console.log("3");

//   process.nextTick(() => {
//     console.log("5");
//   });

//   console.log("6");
// });

// console.log("6");

//! ========================== example-5 (nextTick and promise)

//?First event loop will go to the nextTick queue and it will empty the whole nextTick queue, until the queue is empty it will not move to the promise queue.
// console.log("1");

// process.nextTick(() => {
//   console.log("2");
// });

// process.nextTick(() => {
//   console.log("3");
// });

// Promise.resolve().then(() => {
//   console.log("4");
// });

// process.nextTick(() => {
//   console.log("5");
// });

// console.log("6");

//? Next Example

console.log("1");

process.nextTick(() => {
  console.log("2");
});

Promise.resolve().then(() => {
  console.log("4");
});

process.nextTick(() => {
  console.log("3");
});

process.nextTick(() => {
  console.log("5");
});

console.log("6");

Promise.resolve().then(() => {
  console.log("7");

  Promise.resolve.then(() => {
    console.log("8");
  });
});

//! Example 05

console.log("1");

process.nextTick(() => {
  console.log("2");
});

Promise.resolve().then(() => {
  console.log("4");
});

process.nextTick(() => {
  console.log("3");
});

process.nextTick(() => {
  console.log("5");
});

console.log("6");

Promise.resolve().then(() => {
  console.log("7");

  Promise.resolve.then(() => {
    console.log("8");
  });
});

//! Event loop will execute all the microtask queues callbacks in batches i.e if any callback in promise queue generates a callback in nextTick Queue and still there are 2 more promise callbacks pending in the promise queue

//?~then event loop will first of execute all the callbacks in promise (it will empty the promise queue) and then it will move on to the nextTick Queue


//! Example 06


//?Priority Order ===> sync code >> async (nextTick > Promise)


