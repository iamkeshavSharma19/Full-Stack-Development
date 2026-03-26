import { Navigate } from "react-router-dom";


import { Children } from "react";

function PrivateRoute({ children }) {
  let token = sessionStorage.getItem("token");

  return token ? children : <Navigate to={"/login"} />;
}

export default PrivateRoute;

