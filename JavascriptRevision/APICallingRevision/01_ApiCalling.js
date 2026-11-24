//! API Calling in JS

const url = `https://dummyjson.com/todos`;

//! using fetch
//? fetch method returns us a promise object.
const p1 = fetch(url);
console.log(p1);

p1.then((resObj) => {
  console.log(resObj);
  //?For parsing this resObj,we will use .json method.
  //?json method will also returns us a promise Object.
  const p2 = resObj.json();
  console.log(p2);

  p2.then((data) => {
    console.log(data.todos);
  })
})

p1.catch((err) => {
  console.log(err)
})