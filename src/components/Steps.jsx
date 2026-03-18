import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import "./style/steps.css";

const steps = [
  {
    number: "01",
    title: "Reach Out",
    text: "Start with a short introductory call. We'll talk through what brings you here and how we might support you.",
  },
  {
    number: "02",
    title: "Initial Conversation",
    text: "We'll explore your goals and understand your needs in a calm and open environment.",
  },
  {
    number: "03",
    title: "Meet & Reflect",
    text: "Ongoing one-on-one sessions, held online, offer a consistent space to explore, reflect, and move forward with support and intention.",
  },
];

function StepSlide({ step, index, total, progress }) {
  const seg = 1 / total;
  const start = index * seg;
  const end = (index + 1) * seg;

  const isFirst = index === 0;
  const isLast = index === total - 1;

  const stepProgress = useTransform(progress, [start, end], [0, 1]);

  // TEXT ────────────────────────────────────────────────
  const textOpacity = useTransform(
    stepProgress,
    isFirst
      ? [0, 0.12, 0.88, 1.0]          // stays visible almost entire segment
      : [0, 0.18, 0.72, 0.92],
    isFirst
      ? [0, 1, 1, 1]
      : [0, 1, 1, 0]
  );

  const textY = useTransform(
    stepProgress,
    isFirst
      ? [0, 0.12, 1.0]
      : [0, 0.18, 0.92],
    isFirst
      ? [50, 0, 0]
      : [70, 0, -50]
  );

  // NUMBER ──────────────────────────────────────────────── (delayed ~0.1–0.15 after text)
  const numOpacity = useTransform(
    stepProgress,
    isFirst
      ? [0, 0.22, 0.92, 1.0]
      : [0, 0.30, 0.80, 0.96],
    isFirst
      ? [0, 1, 1, 1]
      : [0, 1, 1, 0]
  );

  const numY = useTransform(
    stepProgress,
    isFirst
      ? [0, 0.22, 1.0]
      : [0, 0.30, 0.96],
    isFirst
      ? [100, 0, 0]
      : [140, 0, -100]
  );

  return (
    <div className={`steps-slide ${index === 0 ? "active" : ""}`}>
      <motion.div
        className="steps-left"
        style={{ opacity: textOpacity, y: textY }}
      >
        <h2>{step.title}</h2>
        <p>{step.text}</p>
      </motion.div>

      <motion.div
        className="steps-right"
        style={{ opacity: numOpacity, y: numY }}
      >
        <div className="steps-number">{step.number}</div>
      </motion.div>
    </div>
  );
}

export default function Steps() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProg = useSpring(scrollYProgress, {
    stiffness: 32,
    damping: 28,
    mass: 1.25,
    restDelta: 0.0005,
  });

  return (
    <section ref={containerRef} className="steps-wrapper">
      <div className="steps-sticky">
        <div className="steps-stage">
          {steps.map((step, i) => (
            <StepSlide
              key={i}
              step={step}
              index={i}
              total={steps.length}
              progress={smoothProg}
            />
          ))}
        </div>
      </div>
    </section>
  );
}