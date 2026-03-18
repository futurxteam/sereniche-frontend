import { motion, useScroll, useTransform } from "framer-motion";
import Stats from "../components/Stats";

export default function StatsOverlay() {
  const { scrollYProgress } = useScroll();

  // 👇 control when stats appears
  const opacity = useTransform(
    scrollYProgress,
    [0.18, 0.22, 0.32, 0.36],
    [0,    1,    1,    0]
  );

  const scale = useTransform(
    scrollYProgress,
    [0.18, 0.22],
    [0.95, 1]
  );

  return (
    <motion.div
      className="stats-overlay"
      style={{ opacity, scale }}
    >
      <Stats />
    </motion.div>
  );
}