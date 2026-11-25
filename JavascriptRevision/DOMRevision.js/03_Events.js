// ! Events => Actions performed by the users

// ! Mouse Events
// ? onClick
// ? ondblclick
// ? onmouseenter
// ? onmouseleave
// ? onmousemove6

// ! Keyboard Events
// ? onkeydown
// ? onkeyup
// ? onchange

// ! Form Submit
// ? onsubmit

// ! Form Events
// ? onSubmit ==> always used in the form tag

const handleForm1 = (e) => {
  e.preventDefault();
  // console.log(e);
  console.log(e);

  //!Way 01
  //? making an object which have the email and the password of the user.

  console.log(e.target);
  console.log(e.target.value);

  const formData = {
    email: e.target[0].value,
    password: e.target[1].value,
  };

  console.log(formData);

  //!Way 02
  const mail = document.getElementById("mail");

  const pass = document.getElementById("pass");

  const formData1 = {
    email: mail.value,
    password: pass.value,
  };

  console.log(formData1);
};

const handleFormData = (e) => {
  e.preventDefault();

  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  const userData = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    password: password.value,
  };

  console.log(userData);

  //? Storing the userData inside the local Storage.

  const usersData = JSON.parse(localStorage.getItem("users")) || [];

  usersData.push(userData);

  localStorage.setItem("users", JSON.stringify(usersData));
};
