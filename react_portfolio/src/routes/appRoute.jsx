import React from "react";
import NavBar from "../components/navBar/navBar";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/home";

const AppRoute = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <AppRoute path="/about" element={<About />} /> */}
        {/* <AppRoute path="/projects" element={<Projects />} /> */}
        {/* <AppRoute path="/contact" element={<Contact />} /> */}
      </Routes>
    </div>
  );
};

export default AppRoute;
