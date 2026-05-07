import React from "react";
import { Outlet, Link, NavLink } from "react-router-dom";
//?Outlet is a component which is provided to us by react-router-dom.

const Header = () => {
  const setClass = ({ isActive }) => (isActive ? "active" : "");

  return (
    <header>
      <div className="center-container">
        <div className="logo">
          <NavLink
            to="/"
            //? isActive is a prop destructured.isActive is a parameter. if isActive is true then it's className will become "active"
            className={setClass}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            //?when i will click on about then isActive class will be removed from the home in the navbar.it will be now applied to the about section now.
            className={setClass}
          >
            About
          </NavLink>
          <Link to="/profile">Profile</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
