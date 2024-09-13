import React from 'react';
import './Stores.css';
import mall1 from '../assets/images/image 1971.png'
import store1 from '../assets/images/store1.png'
import icon from '../assets/icons/Vector.png'

function Stores() {
  return (
    <section className="our-stores">
        <div className="store-header">
          <h2>Our Stores</h2></div>
          <div className="store-place">
            
              <button>
              <div className="icon-img"><img
              src={icon}
              alt="mall"/></div>
                Delhi</button>
              <button><div className="icon-img"><img
              src={icon}
              alt="mall"/></div>
                Gurgaon</button>
              </div>
              <div className="our-stores-content">
              <div className="store-name">
                <div className="store-img"><img
              src={mall1}
              alt="mall"/></div>
              <div className="store-details">
              <div className="details-button">
                <h3>Ambience Mall</h3>
                <a>View Details →</a></div>
                <p>Ambience Island, Vasant Kunj, Delhi</p>
                <p>10:00 AM to 09:00 PM</p>
                
              </div>
              </div>
              
              <div className="store-name">
              <div className="store-img"><img
              src={mall1}
              alt="mall"/></div>
              <div className="store-details">
                <div className="details-button">
                <h3>Ambience Mall</h3>
                <a>View Details →</a></div>
                <p>Ambience Island, Vasant Kunj, Delhi</p>
                <p>10:00 AM to 09:00 PM</p>
                
              </div>
              </div>
            </div>
          
          <div className="store-events">
          <h2>Store Events</h2>
          <div className="store-events-content">
            <div className="event">
              <img src={store1} alt="Evening Glamour Event Image" />
              <h3>Ambience Mall, Vasant Kunj</h3>
              <p>Collection drop: Evening Glamour</p>
              <p>26-Aug-2024</p>
              <a>Book a Slot →</a>
            </div>
            <div className="event">
              <img src={store1} alt="Independence Day Event Image" />
              <h3>Ambience Mall, Vasant Kunj</h3>
              <p>Independence Day Collection</p>
              <p>26-Aug-2024</p>
              <a>Book a Slot →</a>
            </div>
          </div>

          </div>
        </section>
  );
}

export default Stores;
