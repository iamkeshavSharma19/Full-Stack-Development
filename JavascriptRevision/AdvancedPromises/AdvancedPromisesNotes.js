//? Promise.all() is a JavaScript API designed to handle multiple asynchronous operations concurrently (0:00-1:20). It is especially useful when you need to make several parallel API calls and wait for all of them to complete before processing their collective results (1:20-2:15).

//? Key Mechanics:
//? Input: It accepts an iterable (commonly an array) of promises (2:15-2:45).

//? Success Behavior: If all passed promises are fulfilled, Promise.all() returns a single promise that resolves to an array of the results in the same order as the input promises (4:20-5:10).

//? Execution Time: The total time taken is determined by the slowest promise in the array, as it waits for all of them to finish (5:20-6:10).

//? Failure Behavior (Fail-Fast): If any of the input promises is rejected, Promise.all() immediately rejects with the reason of the first promise that failed, without waiting for the others
