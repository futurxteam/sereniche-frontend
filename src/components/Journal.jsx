import React from "react";

export default function Journal() {
  return (
    <div className="journal-container">
      <div className="journal-icon-box">
        <svg fill="none" height="40" stroke="#82a496" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22c-4-4-6-8-6-12a6 6 0 0 1 12 0c0 4-2 8-6 12z"></path>
          <path d="M12 22c-2-4-3-8-3-12a3 3 0 0 1 6 0c0 4-1 8-3 12z"></path>
        </svg>
      </div>
      <p className="journal-label">Our Journal</p>
      <h2 className="journal-title font-display">
        Insights for Growth, Healing<br/>and Clarity.
      </h2>
      <p className="journal-description">
        We share reflections, tools, and gentle prompts to support personal growth — one step at a time.
      </p>
      <button className="journal-button">
        Browse Insights
      </button>
    </div>
  );
}
