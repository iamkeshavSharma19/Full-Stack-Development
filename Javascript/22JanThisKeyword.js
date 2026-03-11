console.log(this); // ! window object

let student = {
  id: 1,
  fname: "John",
  lname: "Cena",
  x: this,
  // ! if instead of anonomous, if we use arrow function, then this will start again pointing to the global window object. We cannot use this keyword inside arrow function, arrow function does'not have their this keyword.
  func: function () {
    console.log(this);
  },
  getFullName: function () {
    console.log(this.fname + " " + this.lname);
  },
  // ? Named function
  getEmail() {
    console.log(this.fname + " " + this.lname + "@gmail.com");
  },
  getEmail: function Email() {
    console.log(this.fname + " " + this.lname + "@gail.com");
  },
};

console.log(student);

console.log(student.x); // ? window object
student.func(); // ! student object
student.getFullName();
student.getEmail();

// ! An object cannot have the duplicate keys, In case of the duplicate keys, last key will be stored inside the object obj.
let obj = {
  name: "Keshav",
  name: "Rohit",
};

console.log(obj);

// ! Call, Apply And Bind In Javascript.

// ? creating a common function for displaying the fullName of both user1 and user2

function getFullName() {
  console.log(this); // ! user1 object
  return `${this.firstName + " " + this.lastName}`;
}

function getCourseDetails(subject1, subject2 = "React") {
  return `${this.course} includes ${subject1} ${subject2}`;
}

let user1 = {
  id: 1,
  firstName: "Brock",
  lastName: "Lesnar",
  course: "Mern Stack",
};

let user2 = {
  id: 1,
  firstName: "Roman",
  lastName: "Reigns",
  course: "Java Full Stack",
};

// ! call method
// ! with this this keyword inside getFullName will start pointing to the user1 object.call method is used to change the direction of the this keyword
const userName1 = getFullName.call(user1);
console.log(userName1);

// const userName2 = getFullName.call(user2);
// console.log(userName2);

const courseDetails = getCourseDetails.call(user1, "JS", "Node JS");
console.log(courseDetails);

// ! Apply Method in javascript => Accessing the fullName of user2 using apply method

// ! call and apply are almost same but in apply, we basically pass the arguments in form of array while calling the apply method
let fullName2 = getFullName.apply(user2);
console.log(fullName2);

let courseDetails2 = getCourseDetails.apply(user2, ["Java", "Spring"]);
console.log(courseDetails2);

// ! Bind method => in bind method we can call the function later on, whereas in call and apply method, function is being invoked immediately. Bind method returns us that function, and now we can invoke that function later on in our code
const boundedFunction = getFullName.bind(user1);
console.log(boundedFunction);

console.log(boundedFunction());

const boundedCourseDetails = getCourseDetails.bind(user1);
console.log(boundedCourseDetails);

console.log(boundedCourseDetails(["javascript", "Node JS"]));

