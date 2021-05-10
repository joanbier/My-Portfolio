import React from "react";
import { FooterContainer } from "../components/FooterElements";
import {
  FaInstagramSquare,
  FaFacebookSquare,
  FaLinkedin,
  FaGithub
} from "react-icons/fa";
const Footer = () => {
  return (
    <FooterContainer>
      <div className="footer-icons-container">
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.facebook.com/joanna.biernat.95/"
        >
          {" "}
          <FaFacebookSquare />
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.instagram.com/beer_nut95/"
        >
          {" "}
          <FaInstagramSquare />
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/joanna-biernat-220bb9194/"
        >
          {" "}
          <FaLinkedin />
        </a>
        <a rel="noreferrer" target="_blank" href="https://github.com/joanbier">
          {" "}
          <FaGithub />
        </a>
      </div>

      <hr />
      <div className="copyright">
        <span>
          Coded with ❤️ by Joanna Biernat. Thank you for visiting my page.
        </span>
        <span>
          &copy; Copyright {new Date().getFullYear()} All Rights Reserved
        </span>
      </div>
    </FooterContainer>
  );
};

export default Footer;
