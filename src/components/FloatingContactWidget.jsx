import "./style/floatingcontactwidget.css";

const BOOKING_URL = "https://sereniche.smrkomed.com/";

export default function FloatingContactWidget() {
  const handleBookNow = () => {
    window.location.href = BOOKING_URL;
  };

  return (
    <div
      className="floating-contact-widget"
      onClick={handleBookNow}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          handleBookNow();
        }
      }}
      title="Click to Book Now"
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
            handleBookNow();
          }}
        >
          Book Now
        </button>
      </div>
    </div>
  );
}
