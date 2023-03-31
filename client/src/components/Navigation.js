import React, { useState } from "react";
import { Link } from "react-router-dom";

// Style
import "../styles/components/nav.css";

// Placeholder for logo
import Logo from "../imgs/Home/elenagarza.png";

function Nav(){
  // Hamburger nav is active
  const [isActive, setActive] = useState("false");

  const handleToggle = () =>{
    setActive(!isActive);
  };

  return(
    <nav class="navbar">
      <Link to="/">          

        <img id="logo" src={Logo} alt="@ elena garza" />
        
      </Link>
      <ul class={`nav-menu ${isActive ? "" : "active"}`}>

        <li class="nav-item">
          <Link onClick={handleToggle} to="/" class="nav-link">
            Home
          </Link>
        </li>

        <li class="nav-item">
          <Link onClick={handleToggle} to="/about" class="nav-link">
            About
          </Link>
        </li>

        <li class="nav-item">
          <Link onClick={handleToggle} to="/gallery" class="nav-link">
            Gallery
          </Link>
        </li>

        <li class="nav-item">
          <a
            onClick={handleToggle}
            href="https://www.instagram.com/elenagarza.art/"
            target="_blank"
            rel="noreferrer"
            class="nav-link"
          >
            Instagram
          </a>
        </li>

        <li class="nav-item">
          <Link onClick={handleToggle} to="/login" class="nav-link">
            Log In
          </Link>
        </li>

      </ul>

      <div
        class={`hamburger ${isActive ? "" : "active"}`}
        onClick={handleToggle}
      >
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
      
    </nav>
  )
}

export default Nav;
