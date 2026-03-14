let obj1 = {
  id: 1,
  fname: "John",
  lname: "Doe",
  sname: "Cena",
};

let { fname, sname } = obj1;
console.log(fname + " " + sname);

// ! Changing the value of the keys inside the object

let { fname: firstName } = obj1;
console.log(firstName); // ! John

//?Object destructuring exercise 01
let obj2 = {
  id: 2,
  Name: {
    firstName: "John",
    lastName: "Doe",
  },
  hobbies: ["coding", "singing", "dancing"],
  address: {
    city: "Noida",
    state: "UP",
    pin: 876541,
  },
  details: {
    id: "janeQSP1",
    course: "Mern Stack",
  },
};

// ! id, firstName,coding,city,id,course
let {
  id,
  Name: { firstName: firstNames },
  hobbies: [h1, ,],
  address: { city },
  details: { id: ids, course },
} = obj2;

console.log(id, firstNames, h1, city, ids, course);

//?Object destructuring exercise 02
const user = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};

