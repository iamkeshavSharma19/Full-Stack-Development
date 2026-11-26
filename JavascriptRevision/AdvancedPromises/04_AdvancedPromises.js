const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(`p1 Failed`);
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
    reject(`p3 Failed`);
  }, 2000);
});

const promiseAll = Promise.any([p1, p2, p3]);

console.log(promiseAll);

promiseAll
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
