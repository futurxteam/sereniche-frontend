import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style/philosophy.css";

const FULL_TEXT =
'At Sereniche, we believe mental strength begins with inner balance. Like stones carefully stacked, emotional wellbeing is built with intention, stability, and support. We stand for compassionate, quality care and scientifically grounded methods, empowering individuals with practical wisdom to find clarity, resilience, and lasting peace.';

export default function Philosophy() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  const words = FULL_TEXT.split(" ");

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const windowH = window.innerHeight;

      // Start highlighting when section enters mid-screen, finish when it exits top
      const start = windowH * 0.75;
      const end = windowH * 0.1;

      // rect.top goes from positive (below viewport) → negative (above viewport)
      const raw = (start - rect.top) / (start - end);
      const clamped = Math.max(0, Math.min(1, raw));
      setProgress(clamped);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // How many words are "lit"
  const litCount = Math.round(progress * words.length);

  return (
    <section className="philosophy-section" ref={sectionRef}>
      {/* Icon */}
      <div className="phil-icon">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="12" r="6" stroke="#a067bc" strokeWidth="2" />
          <path
            d="M12 42c0-7 5-12 12-12s12 5 12 12"
            stroke="#a067bc"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M8 36c2-4 6-6 10-6"
            stroke="#a067bc"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.5"
          />
          <path
            d="M40 36c-2-4-6-6-10-6"
            stroke="#a067bc"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* Label */}
      <p className="phil-label">OUR PHILOSOPHY</p>

      {/* Highlighted text */}
      <h2 className="phil-text">
        {words.map((word, i) => {
          const lit = i < litCount;
          return (
            <span
              key={i}
              className={`phil-word ${lit ? "lit" : "dim"}`}
              style={{ "--i": i }}
            >
              {word}{" "}
            </span>
          );
        })}
      </h2>

      {/* Button */}
      <button
        className="phil-btn"
        onClick={() => window.location.href = "http://localhost:4000/facility/af391f25-96f5-4364-876d-99c393530802"}
      >
        BOOK SESSION <span className="phil-btn-dot">•</span>
      </button>
    </section>
  );
}
