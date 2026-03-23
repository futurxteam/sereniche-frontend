import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function ParallaxController() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const { scrollY } = useScroll();

  // Slow moving background effect
  const y = useTransform(scrollY, [0, 1000], [0, -200]);

  if (isMobile) return null;

  return (

    <motion.div
      className="parallax-bg"
      style={{ y }}
    />
  );
}

