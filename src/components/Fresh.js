import React from 'react';
import './Fresh.css'; // Separate CSS file for styles
import image from '../assets/images/image.png'
import image1 from '../assets/images/image (1).png'
import image2 from '../assets/images/image (2).png'
import image3 from '../assets/images/image (3).png'
import image4 from '../assets/images/image (4).png'
import image5 from '../assets/images/image (5).png'
import image6 from '../assets/images/image (6).png'
function freshdrops() {
  return (
    <section className="fresh-drops">
          <h2>FRESH DROPS OF THE WEEK</h2>
          <p>300+ styles dropped  
          <a>VIEW ALL →</a>
          </p>
          
          <div className="slider-container">
            <div className="fresh-drops-container">
              <div className="fresh-drop">
                <img
                  src={image}
                  alt="Woman in a floral dress"
                />
              </div>
              <div className="fresh-drop">
                <img
                  src={image1}
                  alt="Woman in a red dress"
                />
              </div>
              <div className="fresh-drop">
                <img
                  src={image2}
                  alt="Woman in a green dress"
                />
              </div>
              <div className="fresh-drop">
                <img
                  src={image3}
                  alt="Woman in a green dress"
                />
              </div>
              <div className="fresh-drop">
                <img
                  src={image4}
                  alt="Woman in a green dress"
                />
              </div>
              <div className="fresh-drop">
                <img
                  src={image5}
                  alt="Woman in a green dress"
                />
              </div>
              <div className="fresh-drop">
                <img
                  src={image6}
                  alt="Woman in a green dress"
                />
              </div>
            </div>
      
            </div>
        </section>
  );
}

export default freshdrops;
