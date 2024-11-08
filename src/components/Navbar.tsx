import "../stylesheets/Navbar.css";
// import fccLogo from "../images/fcc_primary_large.webp";
import React from "react";

const Navbar = () => {
  return (
    <>
      <header>
        <nav className="homepage-navbar">
          <a
            target="_blank"
            rel="noreferrer"
            href=""
            // href="https://www.freecodecamp.org/"
          >
            HELLO ALL
            {/* <img
              className="website-logo"
              src={fccLogo}
              alt="freeCodeCamp logo"
            /> */}
          </a>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
