// ! API Calling in JS.
// ? Go to dummy json website
const url = "https://dummyjson.com/todos";

//!Using fetch Method
//?Fetch Method also returns us a Promise Object

const p1 = fetch(url);

console.log(p1);

p1.then((res) => {
  // json() method also returns us a Promise object.
  const p2 = res.json();
  console.log(p2);
  p2.then((res) => {
    console.log(res.todos);
  }).catch((err) => {
    console.log(err);
  });
});

