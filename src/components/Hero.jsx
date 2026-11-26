import { useScroll, useTransform, motion } from "framer-motion";
import "./style/hero.css";

export default function Hero() {
  const { scrollYProgress } = useScroll();

  // --- HERO CONTENT TRANSFORMS (all happen in first 25% of scroll) ---

  // Scale down slightly
  const scale = useTransform(scrollYProgress, [0, 0.25], [1, 0.88]);

  // Move up
  const yScroll = useTransform(scrollYProgress, [0, 0.25], [0, -60]);

  // Fade out hero content as scroll progresses
  const opacityScroll = useTransform(scrollYProgress, [0, 0.10, 0.22], [1, 0.9, 0]);

  return (
    <motion.div
      className="hero-container"
      style={{ scale, y: yScroll, opacity: opacityScroll }}
    >
      {/* LEFT   Title (Entry animation reveals from down) */}
      <motion.div
        className="hero-left"
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <h1 className="hero-title">
          A safe
          <br />
          NICHE for   <br />
          your mind
        </h1>
      </motion.div>

      {/* RIGHT side */}
      <motion.div
        className="hero-right"
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="hero-buttons-wrap">
          <a
            href="tel:+917736323331"
            className="hero-pill-btn hero-pill-contact"
          >
            <svg
              className="hero-btn-icon"
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="currentColor"
            >
              <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" />
            </svg>
            <span>Contact Us</span>
          </a>

          <a
            href="https://telemed.smrkomed.com/?clinic=sereniche-wellness-edappally-kochi-kerala"
            className="hero-pill-btn hero-pill-book"
          >
            <svg
              className="hero-btn-icon"
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <span>Book an Appointment</span>
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}