import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
export default function Navbar() {
  const [isLight, setIsLight] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const NAVBAR_H = 90;

    const overlapsNavbar = (selector) => {
      const el = document.querySelector(selector);
      if (!el) return false;
      const { top, bottom } = el.getBoundingClientRect();
      return top < NAVBAR_H && bottom > 0;
    };

    const check = () => {
      const isOverLight =
        overlapsNavbar(".navbar-dark-zone") ||
        overlapsNavbar(".light-section") ||
        overlapsNavbar(".faq-bg") ||
        overlapsNavbar(".white-footer-section");

      setIsLight(isOverLight);
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
      {/* NAVBAR */}
      <nav
        ref={navRef}
        className={`glass-navbar ${isLight ? "dark" : ""}${isOpen ? " menu-open" : ""}`}
      >
        <div className="nav-container">
          <Link className="nav-logo" to="/">
            <img
              src={isLight ? "/Sereniche academy-dark.png" : "/Sereniche academy-light.png"}
              alt="Sereniche"
              className="nav-logo-img"
            />
          </Link>

          {/* ✅ DESKTOP MENU (ALWAYS INSIDE NAVBAR) */}
          <div className="nav-menu desktop">
            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/stories">Stories</Link></li>
              <li><Link to="/insights">Insights</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
            <div className="nav-actions">
              <button className="login-btn">Login</button>
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

      {/* ✅ MOBILE FULLSCREEN MENU (OUTSIDE NAVBAR) */}
      <div className={`nav-menu mobile ${isOpen ? "open" : ""}`}>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/stories">Stories</Link></li>
          <li><Link to="/insights">Insights</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        <div className="nav-actions">
          <button className="login-btn">Login</button>
          {/* Explicit close for mobile */}
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