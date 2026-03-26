import { Link, useNavigate } from "react-router-dom";


function Navbar() {
  let token = sessionStorage.getItem("token");
  const navigate = useNavigate();

  function handleLogout() {
    let confirmMessage = confirm("Are you sure ?");
    if (confirmMessage) {
      // remove token
      sessionStorage.removeItem("token");
      // navigate to login
      navigate("/login");
    }
  }

  return (
    <header className="p-5 flex justify-between items-center shadow fixed top-0 w-full bg-white">
      <figure className="text-3xl font-bold">QManager</figure>
      <nav className="flex items-center gap-10 font-semibold">
        {token ? (
          <>
            <Link to={"/"}>Dashboard</Link>
            <div onClick={handleLogout}>Logout</div>
          </>
        ) : (
          <>
            <Link to={"/login"}>Login</Link>
          </>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
