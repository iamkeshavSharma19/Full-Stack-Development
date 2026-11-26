const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(`p1 Success`);
  }, 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve(`p2 Success`);
    reject(`p2 failed`);
  }, 1000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(`p3 Success`);
  }, 2000);
});

const promiseAll = Promise.allSettled([p1, p2, p3]);

console.log(promiseAll);

promiseAll
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
