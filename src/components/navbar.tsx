import Link from 'next/link';
import React from 'react';
import '../app/styles/navbar.css'; // Import your custom CSS file

const Navbar = () => {
  return (
    <div className="navbar">
      <header className="header">
        <div className="header-md">
          <a className="title">
            <span>MY PORTFOLIO</span>
          </a>
          <nav>
            <Link href="#/" className="nav-link">Home</Link>
            <Link href="#skills" className="nav-link">Skills</Link>
            <Link href="#Contact" className="nav-link">Contact</Link>
            <Link href="#aboutme" className="nav-link">About</Link>
          </nav>
          <a href="/my cv.JPG">
            <button className="cv-button">Download CV</button>
          </a>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
