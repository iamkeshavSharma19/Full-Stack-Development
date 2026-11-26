//? Promise.all() is a JavaScript API designed to handle multiple asynchronous operations concurrently (0:00-1:20). It is especially useful when you need to make several parallel API calls and wait for all of them to complete before processing their collective results (1:20-2:15).

//? Key Mechanics:
//? Input: It accepts an iterable (commonly an array) of promises (2:15-2:45).

//? Success Behavior: If all passed promises are fulfilled, Promise.all() returns a single promise that resolves to an array of the results in the same order as the input promises (4:20-5:10).

//? Execution Time: The total time taken is determined by the slowest promise in the array, as it waits for all of them to finish (5:20-6:10).

//? Failure Behavior (Fail-Fast): If any of the input promises is rejected, Promise.all() immediately rejects with the reason of the first promise that failed, without waiting for the others.In this case output will be error, same error returned by the failed promise.

// **Promise.allSettled** is a helpful JavaScript tool used to run multiple tasks at the same time and get the result for every single one of them, regardless of whether they succeeded or failed (12:03-13:00).

// Here is how it works:

// *   **Waits for everything:** Unlike other APIs that might stop if one task fails, `Promise.allSettled` waits until **every promise** has finished, whether it was a success or an error (13:17-14:15).

// *   **Gives you the full picture:** It returns an array containing the status of each promise, which will be either **fulfilled** (for success) or **rejected** (for failure), along with the corresponding value or error reason (14:15-15:25).

// *   **Why use it:** It is considered the safest option when you want to make sure you have all the results from your operations before deciding what to do next, even if some parts of your process run into issues (42:57-43:10).
