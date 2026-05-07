import React from "react";
import { Link, useNavigate } from "react-router-dom";
//?react-router-dom gives us a hook called useNavigate()

const NotFound = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/", { replace: true });
    //^how to avoid going to back page == use replace: true
  };

  return (
    <div>
      <h1>404 Page Not Found</h1>
      <button onClick={handleClick}>Home Page</button>
    </div>
  );
};

export default NotFound;
