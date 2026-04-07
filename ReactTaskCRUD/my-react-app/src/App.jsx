import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AllUsers from "./AllUsers";
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/users">All Users</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<AllUsers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
