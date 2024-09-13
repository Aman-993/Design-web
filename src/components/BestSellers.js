import React, { useState } from 'react';
import './BestSellers.css';
import sun from '../assets/images/sun-umbrella.png';
import party from '../assets/images/confetti.png';
import vacation from '../assets/images/sun-umbrella.png';
import gift from '../assets/images/spark.png';
import img1 from '../assets/images/image (1).png';
import img2 from '../assets/images/next.png';
import img3 from '../assets/images/image (2).png';
import img4 from '../assets/images/dresses.png';

function BestSellers() {
  // Set initial active button to 'day-out'
  const [activeButton, setActiveButton] = useState('day-out');

  const handleButtonClick = (occasion) => {
    setActiveButton(occasion);
  };

  return (
    <div className="section">
      <div className="section-header">
        <h2>SHOP BY OCCASIONS</h2>
      </div>
      <div className="section-content">
        <div className='onclick'>
          <button
            className={`occasion-button ${activeButton === 'day-out' ? 'active' : ''}`}
            onClick={() => handleButtonClick('day-out')}
          >
            <img src={sun} alt="Sun" />
            Day-out
          </button>
        </div>
        <button
          className={`occasion-button ${activeButton === 'party' ? 'active' : ''}`}
          onClick={() => handleButtonClick('party')}
        >
          <img src={party} alt="Party" />
          Party
        </button>
        <button
          className={`occasion-button ${activeButton === 'vacation' ? 'active' : ''}`}
          onClick={() => handleButtonClick('vacation')}
        >
          <img src={vacation} alt="Vacation" />
          Vacation
        </button>
        <button
          className={`occasion-button ${activeButton === 'festive' ? 'active' : ''}`}
          onClick={() => handleButtonClick('festive')}
        >
          <img src={gift} alt="Gift" />
          Festive
        </button>
      </div>
      <div className="section-content">
        <div className="product-grid">
          <div className="product-item">
            <img src={img1} alt="Product 12" />
            <p>OCCASION</p>
            <div className="button1">
              <h3>Day-Out</h3>
              <button className="view-all">
                <img src={img2} alt="Right Arrow" />
              </button>
            </div>
          </div>
          <div className="product-item">
            <img src={img3} alt="Product 13" />
          </div>
          <div className="product-item">
            <img src={img4} alt="Product 14" />
          </div>
          <div className="product-item">
            <img src={img3} alt="Product 13" />
          </div>
          <div className="product-item">
            <img src={img4} alt="Product 14" />
          </div>
          <div className="product-item">
            <img src={img3} alt="Product 13" />
          </div>
          <div className="product-item">
            <img src={img4} alt="Product 14" />
          </div>
        </div>
      </div>
      <div className="lastbutton">
        <button>
          DAY-OUT-COLLECTION →
        </button>
      </div>
    </div>
  );
}

export default BestSellers;
