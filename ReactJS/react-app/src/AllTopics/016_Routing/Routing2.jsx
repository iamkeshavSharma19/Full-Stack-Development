import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./HomePage";
import LearnPage from "./LearnPage";
import BlogPage from "./BlogPage";
import ReferencePage from "./ReferencePage";
import Layout from "./Layout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "learn",
        element: <LearnPage />,
      },
      {
        path: "blog",
        element: <BlogPage />,
      },
      {
        path: "reference",
        element: <ReferencePage />,
      },
      {
        path: "*",
        element: <h1>Not Found</h1>,
      },
    ],
  },
]);

const Routing2 = () => {
  return <RouterProvider router={routes} />;
};

export default Routing2;
