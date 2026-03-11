const signupForm = document.getElementById("signup-form");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const usernameInput = document.getElementById("usernameInput");
  const emailInput = document.getElementById("emailInput");
  const passwordInput = document.getElementById("passwordInput");

  const userData = {
    username: usernameInput.value,
    email: emailInput.value,
    password: passwordInput.value,
  };

  console.log(userData);
});
