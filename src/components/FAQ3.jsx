import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style/faq3.css";

const FAQs = [
  { q: "How do I know if therapy is right for me?", a: "Therapy isn't just for crises. It's for anyone curious about growth, clarity, or navigating life changes with more support and self-awareness." },
  { q: "What can I expect from the first session?", a: "Your first session is a chance for us to get to know each other. We'll outline your background, understand what brought you here, and discuss what you hope to achieve." },
  { q: "Do you offer both online and in-person sessions?", a: "Yes, we offer both formats. You can choose whichever feels most comfortable and convenient for your schedule." },
  { q: "How often should I come to therapy?", a: "We usually recommend starting with weekly or bi-weekly sessions to build momentum, but frequency is always tailored to your specific needs." },
  { q: "Is everything I share kept private?", a: "Absolutely. Your privacy and confidentiality are legally and ethically protected, except in rare situations involving immediate safety." },
  { q: "What if I don't know what to talk about?", a: "That's completely normal. Your therapist is trained to guide the conversation and help uncover the areas that are most meaningful to explore." },
  { q: "How long does therapy typically take?", a: "The timeline varies for everyone. Some clients find clarity in a few sessions, while others benefit from longer-term support over several months." },
  { q: "Can I change therapists if it doesn't feel like a good fit?", a: "Yes. The therapeutic relationship is the most important factor in your progress. We want you to feel completely comfortable." },
  { q: "Do you collaborate with other professionals?", a: "When appropriate and with your permission, we can coordinate care with your physician to ensure a holistic approach." },
  { q: "How do I get started with an appointment?", a: "You can easily schedule your initial session through our online booking portal or by reaching out to our team." }
];

function AccordionItem({ question, answer, isOpen, onClick }) {
  return (
    <div className={`faq3-item ${isOpen ? "open" : ""}`}>
      <button className="faq3-q" onClick={onClick}>
        <span>{question}</span>
      </button>
      <div className="faq3-a-wrap">
        <div className="faq3-a-inner">
          <p className="faq3-a">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ3() {
  const [openIndex, setOpenIndex] = useState(0); // keep first one open by default like the image

  const toggle = (i) => setOpenIndex(i === openIndex ? -1 : i);

  return (
    <section className="faq3-section">
      <div className="faq3-container">
        
        {/* Left Side */}
        <div className="faq3-left">
          <div className="faq3-left-top">
            <h2 className="faq3-headline">
              Your questions.<br/>
              <span className="faq3-highlight">Answered.</span>
            </h2>
            <p className="faq3-subtext">
              Not sure what to expect? These answers might help you feel more confident as you begin.
            </p>
          </div>

          <div className="faq3-left-bottom">
            <p className="faq3-fallback">
              Didn't find your answer? Send us a message — we'll respond with care and clarity.
            </p>
            <Link to="/about" className="faq3-btn">
              ABOUT SERENICHE <span className="faq3-btn-dot">•</span>
            </Link>
          </div>
        </div>

        {/* Right Side */}
        <div className="faq3-right">
          {FAQs.map((faq, i) => (
            <AccordionItem 
              key={i} 
              question={faq.q} 
              answer={faq.a} 
              isOpen={openIndex === i}
              onClick={() => toggle(i)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
