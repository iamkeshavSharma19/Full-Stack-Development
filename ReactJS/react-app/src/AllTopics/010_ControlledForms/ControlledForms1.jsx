import React, { useState } from "react";

const ControlledForms1 = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (e) => {
    console.log(e);
    console.log(e.target);
    console.log(e.target.value);
    setUsername(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!username || !email || !password) {
      alert("All Fields are required");
      return;
    }
    console.log("Form Submitted");

    let formData = { username, email, password };

    console.log(formData);

    //~Storing the data also in the local storage.
    //?check if users exists in the localStorage.
    const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
    savedUsers.push(formData); // [{}, {}]
    localStorage.setItem("users", JSON.stringify(savedUsers));

    //?Clearing all the input fields
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h1 className="font-bold text-2xl">Learn Controlled Forms</h1>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="username">Username :</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsername}
        />
        <br />

        <label htmlFor="email">Email :</label>
        <input type="text" id="email" value={email} onChange={handleEmail} />
        <br />

        <label htmlFor="password">Password :</label>
        <input
          type="text"
          id="password"
          value={password}
          onChange={handlePassword}
        />
        <br />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default ControlledForms1;
