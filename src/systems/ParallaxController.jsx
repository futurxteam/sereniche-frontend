import { motion, useScroll, useTransform } from "framer-motion";

export default function ParallaxController() {
  const { scrollY } = useScroll();

  // Slow moving background effect
  const y = useTransform(scrollY, [0, 1000], [0, -200]);

  return (
    <motion.div
      className="parallax-bg"
      style={{ y }}
    />
  );
}
