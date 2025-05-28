import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div id="nav-title">
        <h3>Ty's Vault</h3>
      </div>

      <div className="nav-sections">
        <div id="about-me-container">
          <a id="about-title" href="#about">
            About Me
          </a>
        </div>

        <div id="project-container">
          <a id="project-title" href="#projects">
            Projects
          </a>
        </div>

        <div id="socials-container">
          <a id="socials-title" href="#socials">
            Socials
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
