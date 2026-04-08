import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./style/cta.css";

export default function CTA() {
  const navigate = useNavigate();
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Left side rises up slightly as you scroll in
  const leftY = useTransform(scrollYProgress, [0, 1], [60, -90]);
  // Right side sinks slightly — opposite direction for depth
  const rightY = useTransform(scrollYProgress, [0, 1], [-40, 80]);

  return (
    <div className="cta-block" ref={ref}>
      <div className="cta-inner">

        {/* LEFT — bold value headline */}
        <motion.div className="cta-left" style={{ y: leftY }}>
          <span className="cta-eyebrow">About Sereniche</span>
          <h2 className="cta-headline">
            From childhood to geriatric care — integrating psychiatry,
            psychology, and preventive mental wellness with ethical,
            evidence-based practice.
          </h2>
        </motion.div>

        {/* RIGHT — body + button */}
        <motion.div className="cta-right" style={{ y: rightY }}>
          <p className="cta-body">
            Our sessions create space for that change to happen. We take time to
            understand your needs, offer structure where it helps, and support
            your direction — not ours. Learn more about how we work and what to
            expect from the process.
          </p>
          <button 
            className="cta-btn" 
            onClick={() => window.location.href = "http://localhost:4000/facility/af391f25-96f5-4364-876d-99c393530802"}
          >
            BOOK SESSION <span className="cta-arrow">→</span>
          </button>
        </motion.div>

      </div>
    </div>
  );
}