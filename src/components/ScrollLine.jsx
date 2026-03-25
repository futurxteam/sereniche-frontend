import { motion, useScroll, useTransform, useSpring } from "framer-motion";

/**
 * ScrollLine
 * A glowing curved SVG line that:
 *  - Originates near the hero focal point (right side, ~60% down)
 *  - Draws itself in fast (0 → 0.2 scroll)
 *  - Fades out as stats bg arrives (0.15 → 0.26 scroll)
 *
 * Lives inside .bg-system (fixed, z-index:1), above bg images.
 */
export default function ScrollLine() {
  const { scrollYProgress } = useScroll();

  // Apply spring physics to scroll progress for premium, fluid, non-jittery motion
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Non-linear scroll mapping — Accelerates drawing exclusively during the loop part!
  // At exactly 10% scroll, we force 20% of the actual SVG path length (getTotalLength) to be fully drawn.
  // This violently solves the "cut off midway" issue, ensuring the entire circle completes before cards arrive.
  const pathLength = useTransform(smoothProgress, [0, 0.02, 0.10, 0.50, 1], [0, 0.10, 0.30, 0.80, 1]);

  // The glowing line NEVER fades out. It remains fully visible through the journey.
  const opacity = useTransform(smoothProgress, [0, 0.02], [0, 1]);

  // Steady origin bloom
  const glowOpacity = useTransform(smoothProgress, [0, 0.05], [0, 0.6]);

  return (
    <div className="scroll-line-layer">
      {/* Glow bloom at origin point */}
      <motion.div
        className="scroll-line-bloom"
        style={{ opacity: glowOpacity }}
      />

      <svg
        className="scroll-line-svg"
        viewBox="0 0 1440 10000"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(200,180,255,0.95)" />
            <stop offset="20%" stopColor="rgba(167,139,250,0.85)" />
            <stop offset="60%" stopColor="rgba(167,139,250,0.7)" />
            <stop offset="100%" stopColor="rgba(139,92,246,0.3)" />
          </linearGradient>

          <filter id="lineGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* --- CONTINUOUS JOURNEY PATH --- */}
        <motion.path
          d="
            M 980 250
            C 980 500  640 550  640 800
            C 640 900  800 900  800 800
            C 800 700  720 700  720 800
            C 720 1200 1100 1300 1100 1800
            C 1100 2300 340 2300 340 2800
            C 340 3500 720 3800 720 4500
            C 720 5200 1100 5500 1100 6000
            C 1100 6800 340 7200 340 7800
            C 340 8800 900 9200 900 9800
          "
          stroke="url(#lineGrad)"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          filter="url(#lineGlow)"
          vectorEffect="non-scaling-stroke"
          style={{ pathLength, opacity }}
        />

        {/* --- SECONDARY ECHO WAVE --- */}
        <motion.path
          d="
            M 1000 270
            C 1000 520 660 570  660 820
            C 660 920  820 920  820 820
            C 820 720  740 720  740 820
            C 740 1220 1120 1320 1120 1820
            C 1120 2320 360 2320 360 2820
            C 360 3520 740 3820 740 4520
            C 740 5220 1120 5520 1120 6020
            C 1120 6820 360 7220 360 7820
            C 360 8820 740 9220 740 9820
          "
          stroke="rgba(167,139,250,0.3)"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          style={{ pathLength, opacity }}
        />

        {/* --- FINAL ENDING PULSE --- */}
        {/* Only appears explicitly at the tail of the line as a culminating highlight */}
        <motion.circle
          cx="720"
          cy="9800"
          r="12"
          fill="rgba(200,180,255,1)"
          filter="url(#lineGlow)"
          vectorEffect="non-scaling-stroke"
          style={{ opacity }}
          animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* --- ORIGIN DOT / PULSE --- */}
        <motion.circle
          cx="980"
          cy="340"
          r="6"
          fill="rgba(200,180,255,0.95)"
          filter="url(#lineGlow)"
          style={{ opacity }}
        />
      </svg>
    </div>
  );
}
