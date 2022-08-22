import React from "react";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "../componets/Navbar";
import Dashboard from "../views/Dashboard";
import Home from "../views/Home";
import Login from "../views/auth/Login";
import Register from "../views/auth/Register";
import * as Middleware from "../middleware/App";
function Router(props) {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="mt-4"></div>
      <Routes>
        <Route path="/" exact="true" element={<Home />} />
        <Route
          path="/dashboard"
          element={<Middleware.Authenticated render={<Dashboard />} />}
        />
        <Route
          path="/login"
          element={
            <Middleware.Guest render={<Login/>}/>
          }
        />
        <Route
          path="/register"
          element={
            <Middleware.Guest render={<Register/>}/>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
