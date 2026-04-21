//& api.github.com/users/githubLink
import React from "react";

function Cards() {
  const user = {
    username: "Keshav",
    age: 22,
    email: "Keshav123@gmail.com",
    city: "Noida",
    pic: "https://avatars.githubusercontent.com/u/143322077?v=4",
  };

  return (
    <React.Fragment>
      <h1>username: {user.username}</h1>
      <h1>age: {user.age}</h1>
      <h1>email: {user.email}</h1>
      <h1>city: {user.city}</h1>
      <img src={user.pic} alt="not found" />
    </React.Fragment>
  );
}
export default Cards;
