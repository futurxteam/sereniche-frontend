import React, { useState } from "react";
import "./style/contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, message } = formData;

    const whatsappMessage =
      `*Contact Request*\n\n` +
      `*Name:* ${name}\n` +
      `*Email:* ${email}\n` +
      `*Phone:* ${phone || "Not provided"}\n\n` +
      `*Message:*\n${message}`;

    const whatsappURL = `https://wa.me/917736040267?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
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
