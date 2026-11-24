//? Whenever we chain a then method on our promise, that method will be responsible for creating a promise reaction record. This reaction record (among many other fields) contains a handler. And that handler field has the callback function that we passed into then. Let's see in the picture:

//!  Promise Reaction's handler will be added to the Microtask queue. This is where the async part of promises comes into play.

