const p1 = new Promise((resolve, reject) => {
  resolve(1);
});

p1.then((res) => {
  console.log(res + 1);
  return res + 1;
})
  .then((res) => {
    console.log(res + 1);
    return res + 1;
  })
  .then((res) => {
    console.log(res + 1);
    return res + 1;
  })
  .then((res) => {
    console.log(res + 1);
    return res + 1;
  })
  .then((res) => {
    console.log(res + 1);
    return res + 1;
  })
  .then((res) => {
    console.log(res + 1);
    return res + 1;
  })
  .catch((err) => {
    console.log(err);
  });

function sayHii() {
  console.log("Hii Keshav");
}

sayHii();

console.log("Sync Code");
console.log("Sync Code");
console.log("Sync Code");
console.log("Sync Code");
console.log("Sync Code");
console.log("Sync Code");
