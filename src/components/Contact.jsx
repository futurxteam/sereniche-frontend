import React from "react";
import "./style/contact.css";
export default function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-layout">
        <div className="contact-info">
          <h2 className="contact-title font-display">
            Support starts<br/>with <span>a simple step.</span>
          </h2>
          <p className="contact-description">
            Whether you're starting fresh, returning for ongoing support, or simply exploring your options — we're here to meet you where you are. Use the form to book a session that feels right for you.
          </p>
          
        
        </div>

        <div className="contact-form-side">
          <h3 className="form-header font-display">Tell us about you.</h3>
          <form className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="Your Name *" />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email *" />
            </div>
            <div className="form-group">
              <input type="tel" placeholder="Phone Number" />
            </div>
            <div className="form-group">
              <select defaultValue="">
                <option value="" disabled>Preferred Pronouns *</option>
                <option>He/Him</option>
                <option>She/Her</option>
                <option>They/Them</option>
                <option>Other / Prefer not to say</option>
              </select>
            </div>
            
            <h3 className="form-section-title font-display">How can we help?</h3>
            <div className="form-group">
              <textarea placeholder="Feel free to share anything that helps us understand your needs..." rows="2"></textarea>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
