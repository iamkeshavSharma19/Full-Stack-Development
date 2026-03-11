// ! Object Deconstructing

let obj1 = {
  id: 1,
  fname: "John",
  lname: "Doe",
  sname: "Cena",
};

// ? This is basically object deconstructing
let { fname } = obj1;
console.log(fname);
let { sal } = obj1;
console.log(sal); // ? if the key is not present, then undefined would be printed

// ! if the key is not present, then I want to give it a default value, how will I do that is

let { salary = 0 } = obj1;
console.log(salary); // ? 0

let { sname = "Karan" } = obj1;

console.log(sname); // ! Cena

// ! Changing the value of the keys inside the object

let { fname: firstName } = obj1;
console.log(fname); // ! John

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
  hobbies: [, , h3],
  address: { city },
  details: { id: detailedId, course },
} = obj2;

//console.log(Name); // ! Error will come
console.log(id, firstName, h3, city, detailedId, course);

// ! Array deconstructing
let arr = [10, 20, 30, 40, 50];
// ? i want 20 and 40
let [, n1, , n2] = arr;
console.log(n1, n2);

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

// ! name, userName, street, zipcode, lat, lan, companyName

const {
  name,
  username,
  address: {
    street,
    zipcode,
    geo: { lat, lng },
  },

  company: { name: companyName },
} = user;

console.log(name, username, street, zipcode, lat, lng, companyName);
