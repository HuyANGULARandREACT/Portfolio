import React from "react";
import NavBar from "../components/navBar/navBar";
import Footer from "../components/footer/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/home";

const AppRoute = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default AppRoute;
