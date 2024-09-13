import React from 'react';
import './Header.css'; // Separate CSS file for styles
import hero from '../assets/icons/hero.png'

import delivery from '../assets/icons/delivery.png'

function Header() {
  return (
    <header className="hero">
      <div className="header">
      <div className="hero-image">
            <img
              src={hero}
              alt="Woman in a white coat"
            />
            <div className="hero-text">
            <h2>NEW COLLECTION</h2>
            <h1>Winter Edit</h1>
            <div className="arrow">
            <button>→ </button>
            </div>
          </div>
          </div>
          </div>
      <div className="delivery-image">
        <img
          src={delivery}
          alt="delivery time"
        />
        </div>
          
    </header>
  );
}

export default Header;
