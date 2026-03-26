import { RouterProvider } from "react-router-dom";
import { myRoutes } from "./Routes/Router";


function CrudApp() {
  return <RouterProvider router={myRoutes} />;
}

export default CrudApp;
