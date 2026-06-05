import React, { useState } from "react";
import "./style/contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    pronouns: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, pronouns, message } = formData;

    const subject = encodeURIComponent(`Contact Request from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Phone: ${phone || "Not provided"}\n` +
      `Pronouns: ${pronouns || "Not provided"}\n\n` +
      `Message:\n${message}`
    );

    window.location.href = `mailto:hello@sereniche.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="contact-container">
      <div className="contact-layout">
        <div className="contact-info">
          <h2 className="contact-title font-display">
            Support starts<br />with <span>a simple step.</span>
          </h2>
          <p className="contact-description">
            Whether you're starting fresh, returning for ongoing support, or simply exploring your options — we're here to meet you where you are. Submit the form below to reach us directly.
          </p>
        </div>

        <div className="contact-form-side">
          <h3 className="form-header font-display">Tell us about you.</h3>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name *"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email *"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <select
                name="pronouns"
                value={formData.pronouns}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Preferred Pronouns *</option>
                <option value="He/Him">He/Him</option>
                <option value="She/Her">She/Her</option>
                <option value="They/Them">They/Them</option>
                <option value="Other / Prefer not to say">Other / Prefer not to say</option>
              </select>
            </div>

            <h3 className="form-section-title font-display">How can we help?</h3>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Feel free to share anything that helps us understand your needs..."
                rows="3"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="contact-submit-btn">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
