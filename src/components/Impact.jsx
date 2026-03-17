import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./style/impact.css";
export default function Impact() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Parallax values
 const imageY1 = useTransform(scrollYProgress, [0, 1], [-120, 120]); // container
const imageY2 = useTransform(scrollYProgress, [0, 1], [-80, 80]);

// INNER image (slower = depth effect)
const innerY1 = useTransform(scrollYProgress, [0, 1], [-80, 80]);
const innerY2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  return (
    <section className="impact-section" ref={ref}>

      {/* LEFT CONTENT */}
      <div className="impact-left">
        <p className="impact-label">REAL PEOPLE. REAL CHANGES.</p>

        <h2 className="impact-heading">
          Starting over and<br />
          finding herself in the<br />
          process.
        </h2>

        <p className="impact-text">
          After moving to a new city, Lisa thought she'd feel excited.
          Instead, she felt unmoored — away from her friends, her old
          routines, and her sense of who she was. She came to therapy
          not because something was "wrong," but because she wanted
          to feel at home in her own life again.
        </p>

        <button className="impact-btn">READ FULL STORY</button>
      </div>

      {/* RIGHT IMAGES */}
  <div className="impact-images">

  {/* BACK IMAGE */}
  <motion.div className="impact-img img-back" style={{ y: imageY1 }}>
    <motion.img
      src="/journal/2.png"
      alt=""
      style={{ y: innerY1 }}
    />
  </motion.div>

  {/* FRONT IMAGE */}
  <motion.div className="impact-img img-front" style={{ y: imageY2 }}>
    <motion.img
      src="/journal/1.png"
      alt=""
      style={{ y: innerY2 }}
    />
  </motion.div>

</div>

    </section>
  );
}