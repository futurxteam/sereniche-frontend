import "./style/info2.css";
export default function Info2() {
  return (
    <section className="info-section alt">
      
      {/* Background */}
      <div className="info-bg info-bg-2" />

      {/* Overlay */}
      <div className="info-overlay" />

      {/* Content */}
      <div className="info-content">
        <h2 className="info-quote">
          “Finding clarity in a sea of noise requires a focused approach.
          Let the ripples settle, and the reflection will reveal the way forward.”
        </h2>

        <p className="info-author">
          — Clear Path Philosophy
        </p>
      </div>

    </section>
  );
}