import { useNavigate } from "react-router-dom";
import "./style/floatingcontactwidget.css";

export default function FloatingContactWidget() {
  const navigate = useNavigate();

  return (
    <div
      className="floating-contact-widget"
      onClick={() => navigate("/contact")}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          navigate("/contact");
        }
      }}
      title="Click to Contact Us"
    >
      <div className="widget-gold-indicator" />
      <div className="widget-content">
        <div className="widget-quote-box">
          <span className="widget-sparkle">✦</span>
          <span className="widget-quote">“Your mind deserves a safe space.”</span>
        </div>
        <div className="widget-divider" />
        <button
          className="widget-btn"
          onClick={(e) => {
            e.stopPropagation();
            navigate("/contact");
          }}
        >
          Contact Us
        </button>
      </div>
    </div>
  );
}
