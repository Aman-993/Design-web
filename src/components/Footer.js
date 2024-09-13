import React from 'react';
import './Footer.css';
import instagram from '../assets/icons/insta-icon.png'
import facebook from '../assets/icons/fb.png'
import twitter from '../assets/icons/x.png'
import locator from '../assets/icons/locator.png'
import email from '../assets/icons/mail.png'
import plus from '../assets/icons/plus.png'

function Footer() {
  return (
    <footer className="footer">
       <div className="footer-buttons">
          <div className="footer-button">
            <span ></span>
            <span className="store-icon"><img src={locator} alt="store" /><span className="footer-text">STORE LOCATOR </span></span>
          </div>
          <div className="footer-button">
            <span ></span>
            <span className="email-icon"><img src={email} alt="mail" /> <span className="footer-text"> GET EMAIL </span></span>
          </div>
        </div>
        <div className="footer-sections">
          <div className="footer-section">
            <div className="footer-section-title">PRODUCTS</div>
            <div className="footer-section-items">
              <img src={plus} alt="plus" />
            </div>
          </div>
          <div className="footer-section">
            <div className="footer-section-title">SERVICES</div>
            <div className="footer-section-items">
              <img src={plus} alt="plus" />
            </div>
          </div>
          <div className="footer-section">
            <div className="footer-section-title">CONNECT</div>
            <div className="footer-section-items">
              <img src={plus} alt="plus" />
            </div>
            
          </div>
          <div className="footer-section-icons">
              <span className="instagram-icon"><img src={instagram} alt="insta" /></span>
              <span className="facebook-icon"><img src={facebook} alt="fb" /></span>
              <span className="twitter-icon"><img src={twitter} alt="twitter" /></span>
            </div>
        </div>
        <div className="footer-copyright">© 2024 COYU.COM. ALL RIGHTS RESERVED.</div>
    </footer>
  );
}

export default Footer;
