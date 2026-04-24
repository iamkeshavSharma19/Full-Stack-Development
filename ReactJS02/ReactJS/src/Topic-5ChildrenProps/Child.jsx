import React from "react";

const Child = (props) => {
  //&If i pass more than 2 props then props object becomes an array.
  console.log(props);
  return (
    <div id="child">
      {props.children}
      <h1>{props.user}</h1>
    </div>
  );
};

export default Child;
