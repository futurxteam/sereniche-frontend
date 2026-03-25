import { useScroll, useTransform, motion } from "framer-motion";
import "./style/hero.css";

export default function Hero() {
  const { scrollYProgress } = useScroll();

  // --- HERO CONTENT TRANSFORMS (all happen in first 25% of scroll) ---

  // Scale down slightly
  const scale = useTransform(scrollYProgress, [0, 0.25], [1, 0.88]);

  // Move up
  const y = useTransform(scrollYProgress, [0, 0.25], [0, -60]);

  // Tilt (rotate) — the "karangi pokanam" lean
  const rotate = useTransform(scrollYProgress, [0, 0.20], [0, -3]);

  // Fade out hero content as scroll progresses
  const opacity = useTransform(scrollYProgress, [0, 0.10, 0.22], [1, 0.9, 0]);

  // Left side tilts a bit more dramatically
  const rotateLeft = useTransform(scrollYProgress, [0, 0.20], [0, -5]);
  const xLeft = useTransform(scrollYProgress, [0, 0.25], [0, -40]);

  // Right side slides and fades slightly later
  const xRight = useTransform(scrollYProgress, [0, 0.25], [0, 30]);
  const opacityRight = useTransform(scrollYProgress, [0, 0.08, 0.20], [1, 1, 0]);

  return (
    <motion.div
      className="hero-container"
      style={{ scale, y, rotate, opacity }}
    >
      {/* LEFT — Title */}
      <motion.div
        className="hero-left"
        style={{ x: xLeft, rotate: rotateLeft }}
      >
        <h1 className="hero-title">
          A Path <br />
          That Shapes <br />
          Your Future.
        </h1>
      </motion.div>

      {/* RIGHT — Description + Button */}
      <motion.div
        className="hero-right"
        style={{ x: xRight, opacity: opacityRight }}
      >
        <p className="hero-description">
          We offer therapy and coaching to help you navigate life's
          challenges with confidence and care. Together, we'll build
          personal insight, emotional well-being, and the steps
          needed for lasting change — at your own pace.
        </p>

        <button className="hero-button">
          START YOUR JOURNEY
        </button>
      </motion.div>
    </motion.div>
  );
}