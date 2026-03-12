import style from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <figure>Navbar</figure>

      <button>Login</button>
    </nav>
  );
};

export default Navbar;
