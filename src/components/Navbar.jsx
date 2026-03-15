export default function Navbar() {
  return (
    <nav className="glass-navbar">
      <div className="nav-container">
        <div className="nav-logo">Sereniche</div>
        <ul className="nav-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
        </ul>
        <div className="nav-actions">
          <button className="login-btn">Login</button>
        </div>
      </div>
    </nav>
  );
}
