import React from 'react';
import './Bests.css'; // Separate CSS file for styles
import sell1 from '../assets/images/seller1.png'
import sell2 from '../assets/images/seller2.png'
import sell3 from '../assets/images/seller3.png'
import sell4 from '../assets/images/seller4.png'
import sell5 from '../assets/images/dresses.png'
import sell6 from '../assets/images/top.png'
import sell7 from '../assets/images/coord.png'
import sell8 from '../assets/images/dresses.png'

function Bests() {
  return (
    <section className="Allbests">
        <div className="best-head">
          <h2>Bestsellers</h2>
          <button className="all-button">View All →</button>
          </div>
          <div className="bests-content">
            <div className="bests">
              <img src={sell1} alt="Bestseller 1 Image" />
            </div>
            <div className="bests">
              <img src={sell2} alt="Bestseller 2 Image" />
            </div>
            <div className="bests">
              <img src={sell3} alt="Bestseller 3 Image" />
            </div>
            <div className="bests">
              <img src={sell4} alt="Bestseller 4 Image" />
            </div>
            <div className="bests">
              <img src={sell5} alt="Bestseller 5 Image" />
            </div>
            <div className="bests">
              <img src={sell6} alt="Bestseller 6 Image" />
            </div>
            <div className="bests">
              <img src={sell7} alt="Bestseller 7 Image" />
            </div>
            <div className="bests">
              <img src={sell8} alt="Bestseller 8 Image" />
            </div>
          </div>
        
        </section>
  );
}

export default Bests;
