import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./style/floatingcontactwidget.css";

const BOOKING_URL = "https://sereniche.smrkomed.com/";

export default function FloatingContactWidget() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [showOnHome, setShowOnHome] = useState(false);

  useEffect(() => {
    if (!isHome) {
      setShowOnHome(true);
      return;
    }

    const handleScroll = () => {
      const scrollPos = window.scrollY || document.documentElement.scrollTop;
      setShowOnHome(scrollPos > 180);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const isVisible = !isHome || showOnHome;

  const handleBookNow = () => {
    window.location.href = BOOKING_URL;
  };

  return (
    <div
      className={`floating-contact-widget${isVisible ? "" : " hidden"}`}
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
