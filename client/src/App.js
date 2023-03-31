import React from 'react';

// Core style
import './App.css';

import { BrowserRouter } from 'react-router-dom'

import Navigation from './components/Navigation';
import Home from './pages/Home/Home';
import Footer from './components/Footer';



export default function App() {

  return (
    <BrowserRouter>
    <div>
      <Navigation />
    </div>
    <div>
      <Home />
    </div>
    <div>
      <Footer />
    </div>
    </BrowserRouter>

  );
}


