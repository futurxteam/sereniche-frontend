import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./style/stats.css";

const steps = [
  {
    number: "01",
    title: "Reach Out",
    text: "Start with a short introductory call. We'll talk through what brings you here and how we might support you."
  },
  {
    number: "02",
    title: "Initial Conversation",
    text: "We'll explore your goals and understand your needs in a calm and open environment."
  },
  {
    number: "03",
    title: "Start Your Journey",
    text: "Together we'll create a plan that supports your growth and personal wellbeing."
  }
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