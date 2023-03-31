import React from 'react';

// Components
import { Navigation, Footer } from "../components";

// Router
import { BrowserRouter as Routes, Route, useLocation } from "react-router-dom";

// Pages
import { Home, About, Login, Gallery } from "./index";

const PageContainer = () => {

  const location = useLocation();

  return (
    <React.StrictMode>
      <Navigation/>
        <main>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/gallery" element={<Gallery />}/>
            <Route path="/login" element={<Login />}/>
          </Routes>
        </main>
      <Footer/>
      </React.StrictMode>
  )
  
}

export default PageContainer;

