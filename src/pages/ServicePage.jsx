import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { services } from "../data/services";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import "../styles/servicepage.css";
import "../styles/servicepage.css";

function WideServiceCard({ service, isFirst }) {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [-80, 80]);

  return (
    <div className={`wide-service-card ${isFirst ? 'navbar-dark-zone' : ''}`} ref={cardRef}>
      <motion.img
        src={service.image}
        alt={service.title}
        className="ws-bg-image"
        style={{ y: bgY, scale: 1.15 }}
      />
      <div className="ws-overlay" />
      <div className="ws-content">
        <h2 className="ws-title">{service.title}</h2>
        <p className="ws-desc">{service.text}</p>
        <p className="ws-desc">{service.fullDescription}</p>
        <Link to={`/services/${service.id}`} className="ws-btn">
          BOOK A SESSION <span className="ws-btn-dot">•</span>
        </Link>
      </div>
    </div>
  );
}

export default function ServicePage() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <div className="service-page">
      <Navbar />

      {/* Hero banner */}
      <div className="sp-hero navbar-dark-zone" ref={ref}>
        <motion.img
          src="/subpagehero/bg3.png"
          className="sp-hero-bg"
          style={{ y: imageY }}
        />
        <div className="sp-hero-content">
          <div className="sp-hero-top">
            <h1 className="sp-title" style={{textTransform:'lowercase'}}>
              Sereniche -<br />your safe space
            </h1>
            <p className="sp-micro">
              Explore our therapy and coaching options tailored to your goals, pace, and needs.
            </p>
          </div>
          
          <div className="sp-statement">
            <p>
              Sereniche is a multidisciplinary mental health centre offering psychiatry, psychology, geriatric mental health services, professional training, and corporate wellness programs. We are committed to compassionate care, clinical excellence, and holistic emotional well-being. Through Sereniche Academy, we extend our work into education and professional development — fostering a trusted space for learning, growth, and lasting impact.
            </p>
          </div>
        </div>
      </div>

      {/* Services full-width stacked grid taking over the entire page */}
      <div className="sp-wide-stack">
        {services.map((s, index) => (
          <WideServiceCard key={s.id} service={s} isFirst={false} />
        ))}
      </div>

      <Footer />
    </div>
  );
}
