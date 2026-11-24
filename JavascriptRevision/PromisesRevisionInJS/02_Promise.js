//?One way to create a promise in javascript is using the new Promise constructor.

//? Note: Resolve and Reject are special functions created by the Promise class constructor and passed as parameters to the executor function. These functions are created by the JavaScript engine for each new Promise instance and are specific to that Promise instance.

//! When this new Promise constructor is executed, a new Promise Object is created in memory. It's just an object that you use every day. This newly created object, though, has some internal slots.

//! PromiseState value will get "pending" as a default value, and PromiseIsHandled will get false. Other values are empty for now, because we didn't do anything with our promise yet. We just called the constructor, and so created the Promise Object in memory.

const userName = `Keshav`;

const p1 = new Promise((resolve, reject) => {
  if (userName === `Keshav`) {
    resolve(`Namaste !!`);
  } else {
    reject(`Hello World`);
  }
});

console.log(p1);

//?Now, we will look into the other 2 properties that we didn't interact with yet. They are PromiseFulfillReactions and PromiseRejectReactions.

//? These fields contain something called Promise Reaction Records. We can create a promise reaction record by chaining a then method or catch method to our promise.

//! .then method also returns us the promise object.

//!Here the promise object which is being returned by .then method,in that promise object,the PromiseResult will be undefined.because we have not returned anything If we return anything then that will become the PromiseResult.
console.log(
  p1.then((data) => {
    console.log(data);
  }),
);

console.log(
  p1.then((data) => {
    console.log(data);
    return `Keshav`;
  }),
);

