export default function FAQ() {
  return (
    <div className="content-block">
      <h2>Frequently Asked Questions</h2>
      <br />
      <div className="faq-item" style={{ marginBottom: "1.5rem" }}>
        <h3>How is this built?</h3>
        <p>Using React, Framer Motion, and CSS for a performant parallax effect.</p>
      </div>
      <div className="faq-item">
        <h3>Is it responsive?</h3>
        <p>Completely. The background adapts to any viewport size inherently.</p>
      </div>
    </div>
  );
}
