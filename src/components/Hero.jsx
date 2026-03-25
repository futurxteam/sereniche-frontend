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
      {/* LEFT — Title (Entry animation reveals from down) */}
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

      {/* RIGHT — Description + Button (Entry animation reveals from down with slight delay) */}
      <motion.div
        className="hero-right"
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="hero-description">
          personalized and confidential space where you can speak freely, reflect deeply, and feel emotionally secure.
        </p>

        <button className="hero-button">
          START YOUR JOURNEY
        </button>
      </motion.div>
    </motion.div>
  );
}