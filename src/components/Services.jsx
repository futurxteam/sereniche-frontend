import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { services } from "../data/services";
import "./style/Services.css";

export default function Services() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], [-120, 120]);

  return (
    <div className="services-wrapper" ref={ref}>
      {services.map((s) => (
        <motion.div
          key={s.id}
          className="service-card"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.35 }}
        >
          <div className="image-wrapper">
            <motion.img
              src={s.image}
              className="service-image"
              style={{ y: imageY }}
            />
          </div>

          <div className="service-content">
            <h3>{s.title}</h3>
            <p>{s.text}</p>
            <Link to={`/services/${s.id}`} className="service-read">
              • READ MORE
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  );
}