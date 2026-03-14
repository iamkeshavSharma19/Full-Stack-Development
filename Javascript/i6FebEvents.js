// ! Events => Actions performed by the users

// ! Mouse Events
// ? onClick
// ? ondblclick
// ? onmouseenter
// ? onmouseleave
// ? onmousemove

// ! Keyboard Events
// ? onkeydown
// ? onkeyup
// ? onchange

// ! Form Submit
// ? onsubmit

function singleClick() {
  console.log("single clicked");
}

function doubleClick() {
  console.log("double clicked");
}

function cursorEnter() {
  console.log("cursor enter");
}

function cursorExit() {
  console.log("cursor Leave");
}

function cursorMove() {
  console.log("cursor moved");
}

function keyPressed() {
  console.log("Key Pressed");
}

function keyReleased() {
  console.log("Key Released");
}

function inputChanged() {
  console.log("Input is changed");
}

// ! Form Events
// ? onSubmit ==> always used in the form tag
function handleForm1(e) {
  e.preventDefault(); // ! stops the page reload
  console.log(e);
  console.log("form submitted");
  // ? making an object which have the email and the password of the user

  // ! way 1
  // const formData = {
  //   email: e.target[0].value,
  //   password: e.target[1].value,
  // };

  // console.log(formData);

  // ! way 2
  const mail = document.getElementById("mail");
  const pass = document.getElementById("pass");
  const formData = {
    email: mail.value,
    password: pass.value,
  };
  console.log(formData);
}

//?Practising form tag and dom along with the local storage
function handleForm2(e) {
  e.preventDefault(); //~stops the page reload
  console.log("form submitted");
  const password = document.querySelector("#password");
  console.log(password);

  const mail = document.querySelector("#email");
  console.log(mail);

  //~Storing the details of the user which he has filled in the input field in the form in the obj object
  const obj = {
    password: password.value,
    email: mail.value,
  };

  console.log(obj);

  //?Also storing the email and password into the Local Storage
  //?local storage can only store the data in the form of strings
  //?so for storing arrays, objects and lists,you must first convert them into strings using JSON.stringify()
  localStorage.setItem("user", JSON.stringify(obj));
  //?Storing individual user's information in the local Storage (How??)
  localStorage.setItem("userEmail", `${obj.email}`);
  localStorage.setItem("userPassword", `${obj.password}`);
  const parsedObj = JSON.parse(localStorage.getItem("user"));
  console.log(parsedObj);
}

// ! window events
// ? onLoad
function pageLoad() {
  console.log("Page is loaded");
}

function pageScroll() {
  console.log("page is scrolled");
}

// ! addEventListener("event", callbackFn, useCapture)
const h1Tag = document.createElement("h1");
h1Tag.textContent = "Learn addEventListener";

h1Tag.addEventListener("click", () => {
  console.log("h1 clicked");
  h1Tag.style.backgroundColor = "red";
});

document.body.append(h1Tag);
