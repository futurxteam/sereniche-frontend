import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import "../styles/navbar.css";
import "../styles/contactpage.css";

export default function ContactPage() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <div className="contact-page">
      <Navbar />

      {/* Hero banner */}
      <div className="cp-hero" ref={ref}>
        <motion.img 
          src="/bg4.jpg" 
          className="cp-hero-bg" 
          style={{ y: imageY }}
        />
        <div className="cp-hero-content">
          <p className="cp-label">GET IN TOUCH</p>
          <h1 className="cp-title">
            Support starts with<br />a simple step.
          </h1>
          <p className="cp-sub">
            Whether you're starting fresh or returning for support — we're
            here to meet you where you are.
          </p>
        </div>
      </div>

      {/* Contact form */}
      <div className="cp-section light-section">
        <Contact />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
