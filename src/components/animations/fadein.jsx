import { motion } from "framer-motion";

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.8,
  y = 40
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration,
        delay,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  );
}