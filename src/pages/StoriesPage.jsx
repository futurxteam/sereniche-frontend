import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/navbar.css";

export default function StoriesPage() {
  return (
    <div className="stories-page">
      <Navbar />

      <div className="sp-hero" style={{ 
        height: '60vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        background: '#f9f7ff' 
      }}>
        <h1 style={{ 
          fontFamily: '"Playfair Display", serif', 
          fontSize: '3.5rem',
          color: '#1a1a1a'
        }}>Stories</h1>
      </div>

      <div className="light-section" style={{ padding: '100px 8%', textAlign: 'center', minHeight: '40vh' }}>
        <p style={{ fontSize: '1.2rem', color: '#666' }}>Coming soon...</p>
      </div>

      <Footer />
    </div>
  );
}
