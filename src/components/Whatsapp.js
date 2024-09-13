import React, { useState } from 'react';

import './Whatsapp.css';

function Whatsapp() {
    const [email, setEmail] = useState('');  // Email state

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();  // Prevent page reload
    console.log("Email submitted:", email);  // You can add your form submission logic here
  };

  // Function to handle email input changes
  const handleEmailChange = (event) => {
    setEmail(event.target.value);  // Update the email state as the user types
  };
  return (
<section className="whatsapp-section">
  <div className="container">
    <h2>GET NEW DROPS & OFFERS ON WHATSAPP</h2>

    <div className="next-in">
    <div className="next-drop-in">
      <p>NEXT DROP IN</p>
      
      <div className="countdown-timer">
        <div className="timer-item">
          <span>03</span>
          <p>DAYS</p>
        </div>
        <div className="timer-item">
          <span>15</span>
          <p>HRS</p>
        </div>
        <div className="timer-item">
          <span>40</span>
          <p>MINS</p>
        </div>
        <div className="timer-item">
          <span>29</span>
          <p>SECS</p>
        </div>
      </div>
    </div>
    <div className="whatsapp">
    <form className="whatsapp-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your number"
          value={email}
          onChange={handleEmailChange}
        />
        <button type="submit">SUBMIT</button>
      </form>
    </div>
    </div>
  </div>
</section>

  );
}

export default Whatsapp;
