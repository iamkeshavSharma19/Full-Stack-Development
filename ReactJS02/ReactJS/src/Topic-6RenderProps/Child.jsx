import React from "react";

//~Passing a default prop also in react
const Child = ({ render = "Hello" }) => {
  // console.log(props);
  return (
    <div id="child-component">
      {typeof render === "function" ? render("MS Dhoni") : render}
    </div>
  );
};

export default Child;

//&Try to dry run this code once.....
