import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import Signup from "./pages/Login";
import Login from "./pages/Login";
import Verify from "./pages/Verify";
import VerifyEmail from "./pages/VerifyEmail";
import VerifyOtp from "./pages/VerifyOtp";
import ForgotPassword from "./pages/ForgotPassword";
import ProtectedRoute from "./components/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/verify/:token",
    element: <Verify />,
  },
  {
    path: "/verify",
    element: <VerifyEmail />,
  },
  {
    path: "/forgot-password",
    element: <forgotPassword />,
  },
  {
    path: "/verify-otp/:email",
    element: <VerifyOtp />,
  },
]);

const App = () => {
  return (
    <div>
      <Toaster />
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
