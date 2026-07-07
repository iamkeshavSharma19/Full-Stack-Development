import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import HomePage from "../pages/HomePage";
import CreateEmployee from "../pages/CreateEmployee";
import AllEmployee from "../pages/AllEmployee";
import EditEmployee from "../pages/EditEmployee";
import NotFound from "../pages/NotFound";
import SignupPage from "../pages/NotFound";
import LoginPage from "../pages/NotFound";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },

      {
        path: "/",
        element: <SignupPage />,
      },

      {
        path: "/",
        element: <LoginPage />,
      },

      {
        path: "/create",
        element: <CreateEmployee />,
      },

      {
        path: "/",
        element: <HomePage />,
      },

      {
        path: "/all",
        element: <AllEmployee />,
      },

      {
        path: "/edit",
        element: <EditEmployee />,
      },

      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
