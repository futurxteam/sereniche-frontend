import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./style/stats.css";

const steps = [
  {
    number: "01",
    title: "Connect With Us",
    text: "The journey begins when you connect with us for support, followed by an intake session to understand your concerns, background, and current challenges — at a pace that feels right for you.",
  },
  {
    number: "02",
    title: "Initial Assessment",
    text: "A structured initial session to understand your concerns, background history, and current challenges, giving our team a clear picture of where you are and what you need.",
  },
  {
    number: "03",
    title: "Your Care Plan",
    text: "A tailored treatment plan is curated just for you — combining therapy, medication, or both — designed to support your recovery and long-term wellbeing with evidence-based care.",
  },
  {
    number: "04",
    title: "Walk Together",
    text: "Ready to create your space? Whether you're here for a short chapter or a longer journey, we'll walk it together — adapting your care as you grow and heal.",
  },
];

export default function Stats(){

  const [index,setIndex] = useState(0);

  useEffect(()=>{

    const interval = setInterval(()=>{
      setIndex((prev)=>(prev+1)%steps.length);
    },4000);

    return ()=>clearInterval(interval);

  },[]);

  const step = steps[index];

  return (
    <section className="stats-section">

      {/* TEXT RIGHT */}
      <div className="stats-left">

        <AnimatePresence mode="wait">

          <motion.div
            key={index}
            initial={{ opacity:0, y:-80 }}
            animate={{ opacity:1, y:0 }}
            exit={{ opacity:0, y:80 }}
            transition={{ duration:0.7, ease:"easeInOut" }}
          >
            <h2>{step.title}</h2>
            <p>{step.text}</p>
          </motion.div>

        </AnimatePresence>

        {/* Step dot indicators */}
        <div className="stats-dots">
          {steps.map((_, i) => (
            <button
              key={i}
              className={`stats-dot ${i === index ? "active" : ""}`}
              onClick={() => setIndex(i)}
              aria-label={`Go to step ${i + 1}`}
            />
          ))}
        </div>

      </div>

      {/* NUMBER LEFT */}
      <div className="stats-right">

        <AnimatePresence mode="wait">

          <motion.span
            key={step.number}
            className="stats-number"
            initial={{ opacity:0, y:120 }}
            animate={{ opacity:1, y:0 }}
            exit={{ opacity:0, y:-120 }}
            transition={{ duration:0.8, ease:"easeInOut" }}
          >
            {step.number}
          </motion.span>

        </AnimatePresence>

      </div>

    </section>
  );
}