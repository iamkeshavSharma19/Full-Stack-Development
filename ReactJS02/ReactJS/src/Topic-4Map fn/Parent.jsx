import React from "react";
import Card from "./Card";

const Parent = () => {
  const users = [
    { username: "Chombu Singh", age: 22, city: "UP" },
    { username: "Dinga Singh", age: 24, state: "Delhi" },
    { username: "Sid Singh", age: 26, state: "Haryana" },
    { username: "Ranveer Singh", age: 30, state: "Maharashtra" },
  ];
  return (
    <div>
      {users.map((ele) => (
        <Card users={ele} />
      ))}
    </div>
  );
};

export default Parent;
