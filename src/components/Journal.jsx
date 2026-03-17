import React from "react";
import "./style/journal.css";
export default function Journal() {
  return (
    <section className="journal-section">

      <div className="journal-container">
        <div className="journal-icon-box">
          <svg fill="none" height="40" stroke="#b8a9c9" strokeWidth="2" viewBox="0 0 24 24" width="40">
            <path d="M12 22c-4-4-6-8-6-12a6 6 0 0 1 12 0c0 4-2 8-6 12z"/>
            <path d="M12 22c-2-4-3-8-3-12a3 3 0 0 1 6 0c0 4-1 8-3 12z"/>
          </svg>
        </div>

        <p className="journal-label">OUR JOURNAL</p>

        <h2 className="journal-title">
          Insights for Growth, Healing<br />and Clarity.
        </h2>

        <p className="journal-description">
          We share reflections, tools, and gentle prompts to support personal growth — one step at a time.
        </p>

        <button className="journal-button">BROWSE INSIGHTS</button>
      </div>

      <div className="journal-cards">
        
        <div className="journal-card">
          <div className="blob">
            <img src="/journal/1.png" alt="" />
          </div>
          <h3>Learning to Pause Without Guilt.</h3>
          <p>Taking a break isn’t failure — it’s part of the process.</p>
          <button>READ MORE</button>
        </div>

        <div className="journal-card center">
          <div className="blob">
            <img src="/journal/2.png" alt="" />
          </div>
          <h3>What Makes Therapy Work?</h3>
          <p>Beyond techniques or tools, therapy works best when it feels safe and human.</p>
          <button>READ MORE</button>
        </div>

        <div className="journal-card">
          <div className="blob">
            <img src="/journal/3.png" alt="" />
          </div>
          <h3>The Gentle Art of Slowing Down.</h3>
          <p>Slowing down is more than rest — it’s a conscious choice.</p>
          <button>READ MORE</button>
        </div>

      </div>
    </section>
  );
}