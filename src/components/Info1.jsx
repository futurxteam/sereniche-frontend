import "./style/info1.css";
export default function Info1() {
  return (
    <section className="info-section">
      
      {/* Background */}
      <div className="info-bg" />

      {/* Overlay (for readability) */}
      <div className="info-overlay" />

      {/* Content */}
      <div className="info-content">
        <h2 className="info-quote">
          “Water is fluid, soft, and yielding. But water will wear away rock,
          which is rigid and cannot yield.”
        </h2>

        <p className="info-author">
          — Philosophy of Nature
        </p>
      </div>

    </section>
  );
}