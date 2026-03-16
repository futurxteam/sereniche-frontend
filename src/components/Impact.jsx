import React from "react";

export default function Impact() {
  return (
    <div className="impact-container">
      <div className="impact-header">
        <h2 className="impact-title font-display">
          From first steps to lasting change,<br/>these numbers reflect the impact of <span>walking the path together.</span>
        </h2>
        <p className="impact-description">
          Behind every number is a story of progress. These milestones capture the work, dedication, and care we bring to each step of the journey.
        </p>
      </div>
      <div className="impact-stats-grid">
        <div className="stat-item">
          <div className="stat-number font-display">450+</div>
          <p className="stat-label">Therapy sessions<br/>completed</p>
        </div>
        <div className="stat-item">
          <div className="stat-number font-display">80+</div>
          <p className="stat-label">Clients<br/>supported</p>
        </div>
        <div className="stat-item">
          <div className="stat-number font-display">9+</div>
          <p className="stat-label">Years of professional<br/>experience</p>
        </div>
        <div className="stat-item">
          <div className="stat-number font-display">25+</div>
          <p className="stat-label">Programs and<br/>tools offered</p>
        </div>
      </div>
    </div>
  );
}
