import React from "react";
import { Outlet, Link } from "react-router-dom";
//?Outlet is a component which is provided to us by react-router-dom

const Header = () => {
  return (
    <header>
      <div className="center-container">
        <div className="logo">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/profile">Profile</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
