import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/">
        <h3>Home</h3>
      </Link>
      <Link to="/blog">
        <h3>Blog</h3>
      </Link>
      <Link to="/learn">
        <h3>Learn</h3>
      </Link>
      <Link to="/reference">
        <h3>Reference</h3>
      </Link>
    </div>
  );
};

export default Navbar;
