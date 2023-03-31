import React from 'react';

// Core style
import './App.css';

// Components
import {Navigation, Footer} from './components/';

// Router
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// Pages
import { Home, About, Login, Gallery } from "./pages/index";

//import GoogleLogin from './components/GoogleLogin';

function App() {

  const location = useLocation();

  return (
    <React.StrictMode>
      <Navigation />
      <main>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/gallery" element={<Gallery />}/>
          <Route path="/login" element={<Login />}/>
        </Routes>
      </main>
      <Footer />
    </React.StrictMode>

  );
}

export default App;
