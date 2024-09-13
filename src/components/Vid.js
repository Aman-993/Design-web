import React from 'react';
import './Vid.css'; // Separate CSS file for styles
import call from '../assets/images/call.png';
import vc from '../assets/icons/vc.png';
import chat from '../assets/icons/chat.png';
function Vid() {
  return (
    <div className="section">
          <h2>SHOP FROM OUR STORE VIA VIDEO CALL</h2>
          <div className='text'>
          <div className="section-img">
            <img src={call} alt="store" />
          </div>
          
          <p className='p1'>Let our stylist give you a store tour and show you the perfect items for your needs - fast and easy!</p>
          <div className="section-buttons">
            <button className="video-call">
              <i className="video"><img src={vc} alt="vc" /></i>
              <p>VIDEO CALL</p>
            </button>
            <button className="chat-now">
            <i className="chat"><img src={chat} alt="chat" /></i>
              <p>CHAT NOW</p>
            </button>
          </div>
          </div>
        </div>
  );
}

export default Vid;
