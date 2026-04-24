import React from "react";
import Child from "./Child";

const Parent = () => {
  const user = "Rohit Sharma"; //&here user is a normal prop not a child props.
  return (
    <div id="child">
      <h3>Parent Component</h3>
      <Child user={user}>
        <h1>I am children props</h1>
        <h2>Namaste Deveopers</h2>
      </Child>
    </div>
  );
};

export default Parent;
