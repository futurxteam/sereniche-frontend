import { useParams, Link } from "react-router-dom";
import { services } from "../data/services";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/navbar.css";
import "../styles/servicedetail.css";

import ParallaxImage from "../components/animations/ParallaxImage";

export default function ServiceDetailPage() {
  const { id } = useParams();
  const service = services.find((s) => s.id === id);

  if (!service) {
    return (
      <div className="sd-not-found">
        <Navbar />
        <div className="sd-404">
          <h2>Service not found.</h2>
          <Link to="/services">← Back to Services</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="sd-page">
      <Navbar />

      {/* Hero */}
      <div className="sd-hero">
        <ParallaxImage 
          src={service.heroImage} 
          alt={service.title} 
          containerClass="sd-hero-img" 
          amount={80}
        />
        <div className="sd-hero-overlay" />
        <div className="sd-hero-content">
          <Link to="/services" className="sd-back">← All Services</Link>
          <span className="sd-tag">{service.tag}</span>
          <h1 className="sd-title">{service.title}</h1>
          <p className="sd-tagline">{service.text}</p>
        </div>
      </div>

      {/* Body */}
      <div className="sd-body light-section">

        {/* Meta strip */}
        <div className="sd-meta">
          <div className="sd-meta-item">
            <span className="sd-meta-label">Duration</span>
            <span className="sd-meta-value">{service.duration}</span>
          </div>
          <div className="sd-meta-item">
            <span className="sd-meta-label">Format</span>
            <span className="sd-meta-value">{service.format}</span>
          </div>
          <div className="sd-meta-item">
            <span className="sd-meta-label">Frequency</span>
            <span className="sd-meta-value">{service.frequency}</span>
          </div>
        </div>

        <div className="sd-grid">
          {/* Left — description */}
          <div className="sd-left">
            <h2 className="sd-section-title">About this service</h2>
            <p className="sd-description">{service.fullDescription}</p>

            <h2 className="sd-section-title">What to expect</h2>
            <ul className="sd-list">
              {service.whatToExpect.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Right — good for + CTA */}
          <div className="sd-right">
            <div className="sd-good-for-card">
              <h3>Good for</h3>
              <ul>
                {service.goodFor.map((item, i) => (
                  <li key={i}>
                    <span className="sd-dot" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="sd-cta-card">
              <p>Ready to take the first step?</p>
              <Link to="/contact" className="sd-cta-btn">Book a Session</Link>
            </div>
          </div>
        </div>

        {/* Other services */}
        <div className="sd-others">
          <h2 className="sd-section-title">Explore other services</h2>
          <div className="sd-others-grid">
            {services
              .filter((s) => s.id !== id)
              .map((s) => (
                <Link to={`/services/${s.id}`} key={s.id} className="sd-other-card">
                  <ParallaxImage 
                    src={s.image} 
                    alt={s.title} 
                    containerClass="sd-other-img-wrap"
                    className="sd-other-card-img"
                    amount={30}
                  />
                  <div className="sd-other-card-body">
                    <span className="sd-other-tag">{s.tag}</span>
                    <h4>{s.title}</h4>
                    <span className="sd-other-link">Read more →</span>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
