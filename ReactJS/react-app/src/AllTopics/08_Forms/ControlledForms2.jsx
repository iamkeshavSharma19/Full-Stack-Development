import { useState } from "react";

const ControlledForms2 = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    console.log(e);
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
    console.log(formData);

    //~storing the formData in the localstorage
    //~to get existing user from local storage
    let users = JSON.parse(localStorage.getItem("users")) || [];
    console.log(users);

    //~create userData with id
    let userData = { ...formData, id: Math.random() };
    console.log(userData);

    //~Pushing the userData to users array
    users.push(userData);

    //~set users array to local storage after converting into json
    localStorage.setItem("users", JSON.stringify(users));

    //~ clear input fields
    setFormData({ username: "", email: "", password: "" });
  };
  return (
    <div>
      <h1>Learn Controlled Forms</h1>
      <p>Manage multiple input with single state</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Username"
          name="username"
          value={formData.userName}
          onChange={handleChange}
        />
        <br /> <br />
        <input
          type="email"
          placeholder="Enter email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <br /> <br />
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <br /> <br />
        <button>Submit Form</button>
      </form>
    </div>
  );
};

export default ControlledForms2;
