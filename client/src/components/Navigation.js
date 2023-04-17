import React, { useState } from "react";
import { Link } from "react-router-dom";
import Auth from '../utils/auth';

// Style
import "../styles/components/nav.css";

function Navigation(){
  // Hamburger nav is active
  const [isActive, setActive] = useState("false");

  const handleToggle = () =>{
    setActive(!isActive);
  };
if (Auth.loggedIn()){
  return(
  < nav className="navbar">
    <ul className={`nav-menu ${isActive ? "" : "active"}`}>
    <li className="nav-item">
          <Link onClick={handleToggle} to="/" className="nav-link">
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link onClick={handleToggle} to="/about" className="nav-link">
            About
          </Link>
        </li>

        <li className="nav-item">
          <Link onClick={handleToggle} to="/gallery" className="nav-link">
            Gallery
          </Link>
        </li>

        <li className="nav-item">
          <Link onClick={handleToggle} to="/savedart" className="nav-link" >
            Saved Art
          </Link>
        </li>

        <li className="nav-item">
          <a
            onClick={handleToggle}
            href="https://www.instagram.com/elenagarza.art/"
            target="_blank"
            rel="noreferrer"
            className="nav-link"
          >
            Instagram
          </a>
        </li>

        <li className="nav-item">
            
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
    </ul>


  </nav>
  )
  
} else {




  return(

    <nav className="navbar">

      <Link to="/">         
       
      </Link>
      <ul className={`nav-menu ${isActive ? "" : "active"}`}>

        <li className="nav-item">
          <Link onClick={handleToggle} to="/" className="nav-link">
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link onClick={handleToggle} to="/about" className="nav-link">
            About
          </Link>
        </li>

        <li className="nav-item">
          <Link onClick={handleToggle} to="/gallery" className="nav-link">
            Gallery
          </Link>
        </li>

        <li className="nav-item">
          <a
            onClick={handleToggle}
            href="https://www.instagram.com/elenagarza.art/"
            target="_blank"
            rel="noreferrer"
            className="nav-link"
          >
            Instagram
          </a>
        </li>

          <li className="nav-item">
          <Link onClick={handleToggle} to="/login" className="nav-link">
            Log In
          </Link>
        </li>

        <li className="nav-item">
          <Link onClick={handleToggle} to="/signup" className="nav-link">
           Sign Up
          </Link>
        </li>

      </ul>

      <div
        className={`hamburger ${isActive ? "" : "active"}`}
        onClick={handleToggle}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      
    </nav>

    
  )
}
}

export default Navigation;

