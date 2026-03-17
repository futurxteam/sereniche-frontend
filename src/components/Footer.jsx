import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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
          <h2>Join Our<br />Newsletter.</h2>

          <p>
            We share occasional insights on personal growth,
            emotional well-being, and practical tools to
            navigate life with more clarity and balance.
          </p>

          <div className="footer-input">
            <input placeholder="Your Email" />
            <button>SUBSCRIBE</button>
          </div>

          <span className="footer-note">
            By signing up, you agree to our Privacy Policy.
          </span>
        </div>

        {/* RIGHT */}
        <div className="footer-right">
          <h4>SITEMAP</h4>

          <div className="footer-links">
            <div>
              <a>Main Page</a>
              <a>About</a>
              <a>Services</a>
              <a>Stories</a>
              <a>Journal</a>
            </div>

            <div>
              <a>Articles</a>
              <a>Book a Session</a>
              <a>Privacy Policy</a>
              <a>Terms of Use</a>
              <a>404</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}