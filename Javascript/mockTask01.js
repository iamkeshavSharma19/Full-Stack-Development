function handleForm(e) {
  e.preventDefault();
  const mail = document.getElementById("mail");
  const pass = document.getElementById("pass");

  let userObj = {
    email: mail.value,
    password: pass.value,
  };

  console.log(userObj);

  const user = JSON.parse(localStorage.getItem("user")) || [];

  user.push(userObj);

  //~storing in localStorage
  localStorage.setItem("user", JSON.stringify(user));
}
