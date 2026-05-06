import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//&client is a subfolder which is present inside the react-dom.
//&StrictMode is a component/wrapper it takes care of the contents inside it,if there is an api call,it runs the code and children 2 times,to make insure that everything is safe.
import "./index.css";
import { App } from "./App";
//^RouterProvider is basically a component.
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./Topic-14 React RouterDom/Home";
import Profile from "./Topic-14 React RouterDom/Profile";
import About from "./Topic-14 React RouterDom/About";
//~createBrowserRouter is a function.

//&Routing Configuration
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        //?By default in the outlet <Home /> component will be loaded.that's why index === true.children basically represents all the components which will be loaded inside my <Outlet /> component.
        index: true,
        element: <Home />,
      },

      {
        path: "profile",
        element: <Profile />,
      },

      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

//~Here is our Tunnel.
//&providing our app configuration to the browser, browser will load all the files first of all like Home.jsx, About.jsx, Profile.jsx.Go to the Network tab and see all the files.
createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />,
);
