import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Path = () => {

  const { scrollYProgress } = useScroll();

  // Draw path quickly in first 25% of scroll, then hold
  const pathLength = useTransform(
    scrollYProgress,
    [0, 0.25, 1],
    [0, 1, 1]
  );

  // Fade out the whole path as Stats bg fades in (scrollYProgress 0.18 → 0.28)
  const fade = useTransform(scrollYProgress, [0.15, 0.26], [1, 0]);

  return (
    <div className="path-layer">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1440 1800"
        preserveAspectRatio="none"
      >

        {/* MAIN LINE */}
        <motion.path
          d="
            M 720 120
            C 900 160 1100 260 1200 380
            C 1280 480 1200 600 1050 700
            C 900 800 700 900 600 1100
            C 500 1300 650 1500 850 1700
          "
          stroke="rgba(167,139,250,0.9)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          style={{ pathLength, opacity: fade }}
        />

        {/* SECOND LINE */}
        <motion.path
          d="
            M 720 150
            C 900 190 1100 290 1200 410
            C 1280 500 1200 620 1050 720
          "
          stroke="rgba(167,139,250,0.5)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          style={{ pathLength, opacity: fade }}
        />

      </svg>
    </div>
  );
};

export default Path;