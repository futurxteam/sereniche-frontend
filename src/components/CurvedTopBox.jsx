import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef } from "react";

export default function CurvedTopBox({ children, className = "" }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end 75%"], // Adjust % higher (80-90) if still not reaching ~1
  });

const curve = useTransform(scrollYProgress, [0, 0.5, 0.8, 0.92], [
  "70% 100px",
 "50% 60px",
  "50% 0px",
  "50% 0px"      // reach 0 well before max progress
]);
  // Keep debug for now – remove after confirming
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    console.log("Info progress:", v.toFixed(3));
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        borderTopLeftRadius: curve,
        borderTopRightRadius: curve,
        overflow: "hidden",
        willChange: "border-top-left-radius, border-top-right-radius",
      }}
    >
      {children}
    </motion.div>
  );
}