import React from 'react'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import logo from '../Assets/Navbar.png'

function Navbar() {
  return (
    <nav className="navbar sticky navbar-expand-lg  background_navbar">
    <div className="container">
      <a className="navbar-brand" href="/">
        <img src={logo} alt="Your Logo" style={{ height: '48px'}} className="logo" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <ScrollLink to="home" spy={true} smooth={true} offset={-70} duration={500} className="nav-link">
              Home
            </ScrollLink>
          </li>
          <li className="nav-item">
            <ScrollLink to="menu" spy={true} smooth={true} offset={-70} duration={500} className="nav-link">
              Menu
            </ScrollLink>
          </li>
          <li className="nav-item">
            <ScrollLink to="about" spy={true} smooth={true} offset={-70} duration={500} className="nav-link">
              About
            </ScrollLink>
          </li>
          <li className="nav-item">
            <ScrollLink to="review" spy={true} smooth={true} offset={-70} duration={500} className="nav-link">
              Reviews
            </ScrollLink>
          </li>
          <li className="nav-item">
            <ScrollLink to="contact" spy={true} smooth={true} offset={-70} duration={500} className="nav-link">
              Contact
            </ScrollLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar