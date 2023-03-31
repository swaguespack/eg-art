import React from 'react';

// Core style
import './App.css';

// Router
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Components
import Navigation from './components/Navigation';
import Footer from './components/Footer';


// Pages
import Home from './pages/Home/Home';
import About from "./pages/About/About"
import Gallery from "./pages/Gallery/Gallery"
import Login from "./pages/Login/Login"



export default function App() {

  return (
    <BrowserRouter>

      <div>
        <Navigation />
      </div>
      
    <Routes>
        <Route path='/' element={<Home />}>
        </Route>

        <Route path="/about" element={<About />}>
        </Route>

        <Route path="/gallery" element={ <Gallery />}>
        </Route>

        <Route path="/login" element={<Login />}>
        </Route>

    </Routes>

      <div>
        <Footer />
      </div>

    </BrowserRouter>

  );
}


