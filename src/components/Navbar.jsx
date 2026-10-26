import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
  const [isLight, setIsLight] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const MID_Y = 42; // vertical midpoint of the navbar

    const coversMid = (selector) => {
      const elements = document.querySelectorAll(selector);
      for (const el of elements) {
        const { top, bottom } = el.getBoundingClientRect();
        if (top <= MID_Y && bottom > MID_Y) return true;
      }
      return false;
    };

    const check = () => {
      const overDark = coversMid(".navbar-dark-zone");
      const overLight =
        coversMid(".light-section") ||
        coversMid(".faq-bg") ||
        coversMid(".white-footer-section");
      setIsLight(overLight && !overDark);
    };

    window.addEventListener("scroll", check, { passive: true });
    check();
    return () => window.removeEventListener("scroll", check);
  }, [location.pathname]);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* GLASS BACKGROUND (separate layer, never overlaps nav contents) */}
      <div className="nav-bg-overlay" />

      {/* NAVBAR CONTENTS */}
      <nav
        ref={navRef}
        className={`glass-navbar${isLight ? " dark" : ""}${isOpen ? " menu-open" : ""}`}
      >
        <div className="nav-container">
          <Link className="nav-logo sereniche-logo-wrapper" to="/">
            <img
              src={isLight ? "/Sereniche academy-dark.webp" : "/Sereniche academy-light.webp"}
              alt="Sereniche"
              className="nav-logo-img sereniche-logo"
            />
          </Link>

          {/* ✅ DESKTOP MENU (ALWAYS INSIDE NAVBAR) */}
          <div className="nav-menu desktop">
            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
            </ul>
            <div className="nav-actions">
              <button
                className="login-btn"
                onClick={() => navigate("/contact")}
              >
                Contact Us
              </button>
            </div>
          </div>

          <button
            className="nav-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span className="hamburger"></span>
          </button>
        </div>
      </nav>

      {/* ✅ MOBILE FULLSCREEN MENU */}
      <div className={`nav-menu mobile ${isOpen ? "open" : ""}`}>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        <div className="nav-actions">
          <button
            className="login-btn"
            onClick={() => navigate("/contact")}
          >
            Contact Us
          </button>
          <button
            className="mobile-close-btn"
            onClick={() => setIsOpen(false)}
          >
            Close Menu
          </button>
        </div>
      </div>
    </>
  );
}