import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header className="p-5 border flex gap-10">
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
    </header>
  );
};

export default Nav;
