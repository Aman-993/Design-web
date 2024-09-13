import React from 'react';
import './Categories.css';
import bag from '../assets/images/bag.png'
import coord from '../assets/images/coord.png'
import dresses from '../assets/images/dresses.png'
import top from '../assets/images/top.png'
import jackets from '../assets/images/jackets.png'
import jewellery from '../assets/images/jewellery.png'

function Categories() {
  return (
    <section className="categories-section">
          <div className="container">
          <div className="head">
            <h2>Shop by Categories</h2>
            
              <a className="view-all-button">VIEW ALL →</a>
              </div>
            <div className="categories-grid">
              <div className="category-item">
                <img src={top} alt="Topwear" />
                <h3>Bottomwear</h3>
                <div className="tophead1">Topwear</div>


                <div className="white-line"></div>
              </div>
              
              <div className="category-item">
                <img src={dresses} alt="Dresses" />
                <h3>Dresses</h3>
              </div>
              <div className="category-item">
                <img src={coord} alt="Co-ord Sets" />
                <h3>Co-ord Sets</h3>
              </div>
              <div className="category-item">
                <img src={jackets} alt="Jeans" />
                <h3>Jeans</h3>
                <div className="tophead2">Jackets</div>
                <div className="white-line2"></div>
              </div>
              <div className="category-item">
                <img src={bag} alt="Bags" />
                <h3>Bags</h3>
              </div>
              <div className="category-item">
                <img src={jewellery} alt="Jewellery" />
                <h3>Jewellery</h3>
              </div>
            </div>
          </div>
        </section>
  );
}

export default Categories;
