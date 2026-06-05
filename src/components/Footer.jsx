import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import "./style/footer.css";

export default function Footer() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <div className="footer-container" ref={ref}>

      {/* Background */}
      <motion.img
        src="/footer.jpg"
        className="footer-image"
        style={{ y: imageY }}
      />

      {/* LIGHT overlay (reduced) */}
      <div className="footer-overlay" />

      {/* CONTENT */}
      <div className="footer-content">

        {/* LEFT */}
        <div className="footer-left">
          <h2>Contact Us.</h2>

          <p>
            Have questions or want to reach out? Feel free to email us directly. We are here to support you.
          </p>

          <div className="footer-email-wrap">
            <a href="mailto:hello@sereniche.com" className="footer-email-link">
              hello@sereniche.com
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="footer-right">
          <h4>SITEMAP</h4>

          <div className="footer-links">
            <div>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/services">Services</Link>
            </div>

            <div>
              <Link to="/stories">Stories</Link>
              <Link to="/insights">Insights</Link>
              <Link to="/contact">Contact Us</Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}