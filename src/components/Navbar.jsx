import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isLight, setIsLight] = useState(false);
  const navRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const NAVBAR_H = 90; // matches updated navbar height

    const overlapsNavbar = (selector) => {
      const el = document.querySelector(selector);
      if (!el) return false;
      const { top, bottom } = el.getBoundingClientRect();
      return top < NAVBAR_H && bottom > 0;
    };

    const check = () => {
      // Return true if overlapping any element with .light-section class
      // Also keeping .faq-bg as it's the main transparent-wrapper case
      const isOverLight = 
        overlapsNavbar(".light-section") || 
        overlapsNavbar(".faq-bg") ||
        overlapsNavbar(".white-footer-section");

      setIsLight(isOverLight);
    };

    window.addEventListener("scroll", check, { passive: true });
    check();
    return () => window.removeEventListener("scroll", check);
  }, [location.pathname]); // re-run when route changes

  return (
    <nav ref={navRef} className={`glass-navbar${isLight ? " dark" : ""}`}>
      <div className="nav-container">
<Link className="nav-logo" to="/">
  <img src="/Sereniche.png" alt="Sereniche" className="nav-logo-img" />
</Link>        <ul className="nav-links">
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
    </nav>
  );
}

