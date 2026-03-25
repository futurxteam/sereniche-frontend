import React from "react";
import "./style/userstats.css";

export default function UserStats() {
  return (
    <section className="user-stats-section">
      <div className="user-stats-header">
        <h2 className="us-headline">
          From first steps to lasting change, these numbers reflect the impact of{" "}
          <span className="us-highlight">walking the path together.</span>
        </h2>
        <p className="us-subtext">
          Behind every number is a story of progress. These milestones capture
          the work, dedication, and care we bring to each step of the journey.
        </p>
      </div>

      <div className="us-grid">
        <div className="us-card">
          <h3 className="us-number">450+</h3>
          <p className="us-desc">
            Therapy sessions
            <br />
            completed
          </p>
        </div>
        <div className="us-card">
          <h3 className="us-number">80+</h3>
          <p className="us-desc">
            Clients
            <br />
            supported
          </p>
        </div>
        <div className="us-card">
          <h3 className="us-number">9+</h3>
          <p className="us-desc">
            Years of professional
            <br />
            experience
          </p>
        </div>
        <div className="us-card">
          <h3 className="us-number">25+</h3>
          <p className="us-desc">
            Programs and
            <br />
            tools offered
          </p>
        </div>
      </div>
    </section>
  );
}
