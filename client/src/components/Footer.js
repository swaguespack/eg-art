import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

// Style
import "../styles/components/footer.css";

function Footer() {
  return (
    <div className="footer-div w-100 mt-auto">
      <footer className='container text-center mb-5'>
        <ul>
          <a href="https://github.com/swaguespack/eg-art" target="blank">
            <li>
              <FaGithub />
            </li>
          </a>
          <a href="https://www.linkedin.com/in/elena-garza-3aa171193/" target="blank">
            <li>
              <FaLinkedin />
            </li>
          </a>

          <a href="https://www.instagram.com/elenagarza.art/" target="blank">
            <li>
              <FaInstagram />
            </li>
          </a>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;