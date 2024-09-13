import React from 'react';
import './Brands.css'; // Separate CSS file for styles
import img1 from '../assets/images/brand1.png'
import arr from '../assets/images/next.png'
import img2 from '../assets/images/brand2.png'
import img3 from '../assets/images/brand3.png'
import img4 from '../assets/images/brand4.png'
import img5 from '../assets/images/brand5.png'
import img6 from '../assets/images/brand6.png'
import star1 from '../assets/images/Star 10.png'
import star2 from '../assets/images/Star 8.png'

function Brands() {
  return (
    <div className="section">
          <div className="section-header">
            <h2>OUR BRANDS</h2>
            <a className="viewallbutton">
              VIEW ALL →
              
            </a>
          </div>
          <div className="section-content1">
            <div className="brands-container">
              <div className="brand-item">
                <div className='star1'>
                <img src={star1} alt="Star" />
              </div></div>
              <div className="brand-item">
                <h2>Curated for you</h2>
              </div>
              <div className="brand-item">
                <div className='star2'>
                <img src={star2} alt="Star" />
              </div></div>
            </div>
            <div className="brands-grid">
              <div className="brand-item">
                <img src={img1} alt="Brand 1" />
              </div>
              <div className="brand-item">
                <img src={img2} alt="Brand 2" />
              </div>
              <div className="brand-item">
                <img src={img3} alt="Brand 3" />
              </div>
              <div className="brand-item">
                <img src={img4} alt="Brand 4" />
              </div>
              <div className="brand-item">
                <img src={img5} alt="Brand 5" />
              </div>
              <div className="brand-item">
                <img src={img6} alt="Brand 6" />
              </div>
              <div className="brand-item">
                <img src={img1} alt="Brand 7" />
              </div>
              <div className="brand-item">
                <img src={img2} alt="Brand 8" />
              </div>
            </div>
          </div>
        </div>
  );
}

export default Brands;
