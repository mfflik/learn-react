import React from "react";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "../componets/Navbar";
import Login from "../views/auth/Login";
import Register from "../views/auth/Register";
import Dashboard from "../views/Dashboard";
import Home from "../views/Home";

function Router(props) {
  return (
    <BrowserRouter>
    <Navbar />
    <div className="mt-4"></div>
    <Routes>
      <Route path="/" exact="true" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
    </BrowserRouter>
  );
}

export default Router;
