import React from "react";

// Components
import { Navbar, Footer } from "../components";

// Router
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// Pages
import { Home, About, Login } from "./index";

const egArtContainer = () => {
  const location = useLocation();
  return (
  <React.StrictMode>
      <Navbar />
      <main>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <Footer />
  </React.StrictMode>
  );
};

export default egArtContainer;