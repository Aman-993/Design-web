// components/Assure.js
import React from 'react';
import './Assure.css';
import icon from '../assets/icons/icon.png'
function Assure() {
  return (
    <section className="assurance-section">
      <div className='left'> 
      <h2>Coyu Assurance</h2>
      <p>Premium quality | Perfect fit | 24x7 Support</p></div>
      <div className="assurance-slider">
        <div className="assurance-card">
          <div className="icon"><img src={icon} alt="icon" /></div>
          <div className="assurance-text">
            <h3>Premium Quality</h3>
            <p>Each product is tested in store for premium fabric and exceptional craftsmanship.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Assure;
