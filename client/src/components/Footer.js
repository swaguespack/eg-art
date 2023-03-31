import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

// Style
import "../styles/components/footer.css";

function Footer() {
  return (
    <div className="footer-div">
      <footer>
        <ul>
          <a href="https://github.com/swaguespack" target="blank">
            <li>
              <FaGithub />
            </li>
          </a>
          <a href="https://www.linkedin.com/in/shellby-miller/" target="blank">
            <li>
              <FaLinkedin />
            </li>
          </a>

          <a href="https://www.instagram.com" target="blank">
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