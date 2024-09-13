import React from 'react';
import './Insta.css'; 
import insta1 from '../assets/images/insta1.png'
import insta2 from '../assets/images/insta2.png'
import insta3 from '../assets/images/insta3.png'
import insta4 from '../assets/images/insta6.png'
import insta5 from '../assets/images/insta5.png'
import insta6 from '../assets/images/insta6.png'
import insta7 from '../assets/images/insta7.png'
import insta8 from '../assets/images/insta2.png'
import whatsapp from '../assets/images/whatsapp-icon.png'

function Insta() {
  return (
    <section className="insta">
      <div className="our-instagram">
        <div className="insta-head">
        <div className="instagram-title">OUR INSTAGRAM @COYU</div>
        <div className="instagram-view-all">
            <a href="https://www.instagram.com/anecdotesluxurypopup/?locale=en_GB">
            INSTAGRAM →
            </a>
            </div>
            </div>
        <div className="instagram-items">
          <div className="instagram-item">
            <img src={insta1} alt="Instagram Image" />
          </div>
          <div className="instagram-item">
            <img src={insta2} alt="Instagram Image" />
          </div>
          <div className="instagram-item">
            <img src={insta3} alt="Instagram Image" />
          </div>
          <div className="instagram-item">
            <img src={insta4} alt="Instagram Image" />
          </div>
          <div className="instagram-item">
            <img src={insta5} alt="Instagram Image" />
          </div>
          <div className="instagram-item">
            <img src={insta6} alt="Instagram Image" />
          </div>
          <div className="instagram-item">
            <img src={insta7} alt="Instagram Image" />
          </div>
          <div className="instagram-item">
            <img src={insta8} alt="Instagram Image" />
          </div>
        </div>
      </div>

      <div className="whatsapp-banner">
        <div className="whatsapp-title">
        <div className="whatsapp-buttons"><p>
        Need any help? Simply <br></br> drop us a text.</p>
        
          <div className="whatsapp-icon">
          <img src={whatsapp} alt="whatsapp Image" />
          </div>
        </div>
        <div className="whatsapp-link">
        <a href="instalink">WHATSAPP US →</a>
        </div>
      </div>
      </div>
    </section>
  );
}

export default Insta;
