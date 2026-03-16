import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "./style/Services.css";

const services = [
  {
    title: "Mindfulness & Stress Support",
    text: "Gentle practices to reduce overwhelm, build resilience, and reconnect with yourself.",
    image: "/services/4.png"
  },
  {
    title: "Individual Therapy",
    text: "One-on-one sessions for emotional clarity, healing, and deeper self-understanding.",
    image: "/services/5.png"
  },
  {
    title: "Clarity Consult",
    text: "A short-term space to gain insight, assess your needs, or reset your course.",
    image: "/services/6.png"
  },
  {
    title: "Life Coaching",
    text: "Goal-focused sessions to build direction, motivation and confidence.",
    image: "/services/7.png"
  }
];

export default function Services() {

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress,[0,1],[-120,120]);

  return (
    <div className="services-wrapper" ref={ref}>

      {services.map((s,i)=>(
       <motion.div
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
            <span className="service-read">• READ MORE</span>
          </div>

        </motion.div>
      ))}

    </div>
  );
}