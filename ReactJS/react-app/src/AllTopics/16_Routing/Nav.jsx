import React from "react";

const Nav = ({ setPath }) => {
  return (
    <header className="p-5 bg-violet-600 text-white font-bold">
      <nav className="flex gap-10">
        <div onClick={setPath("/")}>Home</div>
        <div onClick={setPath("/about")}>About</div>
      </nav>
    </header>
  );
};

export default Nav;
