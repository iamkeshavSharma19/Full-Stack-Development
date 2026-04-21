import React from "react";
//todo === Meaning of the top line === React is a Object
//& React = {useState: fn, Fragement: fn}, first of all react's IIFE function will run and it will return the React Object which has multiple methods..

//~Below is the kind of like object destructuring..
import { Fragment } from "react";

const List = () => {
  const isLogin = true;
  return (
    <React.Fragment>
      <h3>RCB</h3>
      <h3>CSK</h3>
      <h3>MI</h3>
      <h3>KKR</h3>
      {/* if-else donot work inside JSX */}
      {isLogin ? <h2>Welcome User</h2> : <h2>Please Login</h2>}
    </React.Fragment>
  );
};

export default List;
