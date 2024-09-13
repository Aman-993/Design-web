import React from 'react';
import './Email.css'; // Separate CSS file for styles

function Email() {
  return (
    <section className="email-section">
      <div className="sign-up-for-email">
        <div className="email-title">SIGN UP FOR EMAIL</div>
        <p className="email-description">
          Receive early access to new arrivals, sales, exclusive content, events and much more!
        </p>
        <form className="email-form">
          <label htmlFor="email" className="email-label">
            EMAIL ADDRESS*
          </label>
          <input type="email" id="email" className="email-input" placeholder="Enter your email address" required />
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
        <p className="email-policy">
          By Signing up, you will receive Coyu offers, Promotions and other commercial messages. 
          You are also agreeing to Coyu <a href="/privacy-policy">Privacy policy</a>. You may unsubscribe any time.
        </p>
      </div>
    </section>
  );
}

export default Email;
