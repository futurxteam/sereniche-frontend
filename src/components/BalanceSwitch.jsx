import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "./style/balance.css";

export default function BalanceSection() {

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  });

  // toggle progress
  const toggleProgress = useTransform(scrollYProgress, [0.3, 0.7], [0, 1]);

  // knob movement
  const toggleX = useTransform(toggleProgress, [0, 1], [0, 28]);

  // background is static white as requested "no background change"
  const bg = "#ffffff";

  // text colors: black on off as requested
  const offColor = "#000000";
  const onColor = "#000000";

  // OFF text visibility
  const offOpacity = useTransform(toggleProgress, [0, 0.4], [1, 0]);

  // ON text visibility
  const onOpacity = useTransform(toggleProgress, [0.4, 1], [0, 1]);

  return (

    <motion.section
      ref={ref}
      className="balance-section"
      style={{ background: bg }}
    >

      {/* Toggle */}

      <div className="toggle-row" style={{ color: "#000000" }}>

        <span>BALANCE</span>

        <div className="toggle" style={{ backgroundColor: "#5f6e68" }}>
          <motion.div
            className="toggle-knob"
            style={{ x: toggleX }}
          />
        </div>

        <motion.div 
          className="switch-label"
          style={{ opacity: onOpacity, fontWeight: "bold" }}
        >
          ON
        </motion.div>

      </div>


      {/* OFF TEXT */}

      <motion.div
        className="balance-text"
        style={{ opacity: offOpacity, color: offColor }}
      >

        <h1>
          If only finding balance were
          <br />
          as simple as flipping a switch.
        </h1>

        <p>
          You're closer than you think.<br />
          And every step you take makes it clearer.
        </p>

      </motion.div>


      {/* ON TEXT */}

      <motion.div
        className="balance-text"
        style={{ opacity: onOpacity, color: onColor }}
      >

        <h1>
          There may not be a single switch,
          <br />
          <span className="accent">
            but there are clear steps forward.
          </span>
        </h1>

        <p>
          Every path is different. These are the ways we help
          people move forward with confidence.
        </p>

      </motion.div>

    </motion.section>
  );
}