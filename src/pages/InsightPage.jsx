import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { insights } from "../data/insights";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/navbar.css";
import "../styles/insightpage.css";

import ParallaxImage from "../components/animations/ParallaxImage";

export default function InsightPage() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <div className="insight-page">
      <Navbar />

      {/* Hero banner */}
      <div className="ip-hero navbar-dark-zone" ref={ref}>
        <motion.img 
          src="/subpagehero/bg3.png" 
          className="ip-hero-bg" 
          style={{ y: imageY }}
        />
        <div className="ip-hero-content">
          <p className="ip-label">OUR JOURNAL</p>
          <h1 className="ip-title">
            Insights for growth,<br />healing and clarity.
          </h1>
          <p className="ip-sub">
            Reflections, gentle prompts, and practical tools — to help you
            move forward one step at a time.
          </p>
        </div>
      </div>

      {/* All insights listing */ }
      <div className="ip-section light-section">
        <div className="ip-grid">
          {insights.map((item) => (
            <div key={item.id} className="ip-card">
              <ParallaxImage 
                src={item.image} 
                alt={item.title} 
                containerClass="ip-card-img-wrap"
                className="ip-card-img"
                amount={25}
              />
              <div className="ip-card-body">
                <div className="ip-card-meta">
                  <span className="ip-card-tag">{item.tag}</span>
                  <span className="ip-card-time">{item.readTime}</span>
                </div>
                <h3 className="ip-card-title">{item.title}</h3>
                <p className="ip-card-excerpt">{item.excerpt}</p>
                <div className="ip-card-footer">
                  <span className="ip-card-date">{item.date}</span>
                  <Link to={`/insights/${item.id}`} className="ip-card-link">
                    Read more →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

