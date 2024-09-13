import React from 'react';
import { useState } from 'react'; 
import './Navbar.css'; // Separate CSS file for styles
import logo from '../assets/icons/logo.png'
import cart from '../assets/icons/cart.png'
import menu from '../assets/icons/menu.png'
function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
    
  return (
    <nav className="navbar">
      
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li><a href="#">Home</a></li>
        <li><a href="#">Categories</a></li>
        <li><a href="#">Speak to stylist</a></li>
        <li><a href="#">Occasion</a></li>
        <li><a href="#">Search</a></li>
      </ul>

      <a className="menu-button" onClick={toggleMenu}>
        <img src={menu} alt="Menu" />
      </a>
      <div className="logo">
        {/* Placeholder for Logo */}
        <img src={logo} alt="Coyu Logo" />
      </div>
      <div className="cart">
          <img src={cart} alt="cart" />
     
      </div>
    </nav>
  );
}

export default Navbar;
