import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import AboutUs from "../pages/aboutUs";
import Contact from "../pages/contact";
import Skills from "../pages/skills";
import Projects from "../pages/projects";
import { useTheme } from "@mui/material";

const Main = () => {
  const theme = useTheme();
  return (
    <div
      style={{
        background: theme.palette.secondary.main,
        minHeight: "calc(100vh-88px)",
      }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default Main;
