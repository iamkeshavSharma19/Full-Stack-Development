// ! API Calling in JS.
// ? Go to dummy json website
const url = "https://dummyjson.com/todos";

// ! using fetch
// ? fetch method returns us a promise object
let p1 = fetch(url);
console.log(p1);

p1.then((res) => {
  console.log(res);
  //   console.log(res.json());
  // json() method also returns us a Promise object.
  let p2 = res.json();
  p2.then((data) => {
    console.log(data);
    console.log(data.todos);
  });

  p2.catch((err) => {
    console.log(err);
  });
});

p1.catch((err) => {
  console.log(err);
});


