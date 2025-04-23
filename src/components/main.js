import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import AboutUs from "../pages/aboutUs";
import Contact from "../pages/contact";
import Skills from "../pages/skills";
import { styled } from "@mui/system";

const main = () => {
  return (
    <div style={{ background: "cornsilk", minHeight: "calc(100vh-88px)" }}>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default main;
