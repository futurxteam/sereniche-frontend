import { useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { stories } from "../data/stories";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/navbar.css";
import "../styles/storydetail.css";

import ParallaxImage from "../components/animations/ParallaxImage";

export default function StoryDetailPage() {
  const { id } = useParams();
  const story = stories.find((s) => s.id === id);

  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const heroBgY = useTransform(heroScroll, [0, 1], [-60, 60]);

  const portraitRef = useRef(null);
  const { scrollYProgress: portraitScroll } = useScroll({
    target: portraitRef,
    offset: ["start end", "end start"],
  });
  const portraitY = useTransform(portraitScroll, [0, 1], [-40, 40]);

  if (!story) {
    return (
      <div className="sdt-page">
        <Navbar />
        <div className="sdt-404">
          <h2>Story not found.</h2>
          <Link to="/stories">← Back to Stories</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="sdt-page">
      <Navbar />

      {/* Hero with parallax background */}
      <div className="sdt-hero" ref={heroRef}>
        <motion.img
          src={story.heroImage}
          alt={story.headline}
          className="sdt-hero-img"
          style={{ y: heroBgY }}
        />
        <div className="sdt-hero-overlay" />
        <div className="sdt-hero-content">
          <Link to="/stories" className="sdt-back">← All Stories</Link>
          <span className="sdt-tag">{story.tag}</span>
          <h1 className="sdt-title">{story.headline}</h1>
          <p className="sdt-name">{story.name}</p>
        </div>
      </div>

      {/* Body */}
      <div className="sdt-body light-section">
        <div className="sdt-grid">

          {/* Article text */}
          <div className="sdt-article">
            {story.fullContent.map((block, i) => {
              if (block.type === "heading") {
                return (
                  <h2 key={i} className="sdt-heading">{block.text}</h2>
                );
              }
              return (
                <p key={i} className="sdt-paragraph">{block.text}</p>
              );
            })}

            <Link to="/contact" className="sdt-book-btn">
              Begin your own journey →
            </Link>
          </div>

          {/* Sticky portrait aside */}
          <aside className="sdt-aside" ref={portraitRef}>
            <div className="sdt-portrait-wrap">
              <motion.img
                src={story.portraitImage}
                alt={story.name}
                className="sdt-portrait"
                style={{ y: portraitY }}
              />
            </div>
            <div className="sdt-aside-card">
              <p className="sdt-aside-name">{story.name}</p>
              <p className="sdt-aside-quote">
                "Asking for support is not weakness — it is the bravest thing I ever did."
              </p>
            </div>
          </aside>
        </div>

        {/* Other stories */}
        <div className="sdt-others">
          <h2 className="sdt-others-title">More stories</h2>
          <div className="sdt-others-grid">
            {stories
              .filter((s) => s.id !== id)
              .map((s) => (
                <Link
                  to={`/stories/${s.id}`}
                  key={s.id}
                  className="sdt-other-card"
                >
                  <ParallaxImage 
                    src={s.portraitImage} 
                    alt={s.name} 
                    containerClass="sdt-other-img-wrap"
                    className="sdt-other-card-img"
                    amount={20}
                  />
                  <div className="sdt-other-body">
                    <span className="sdt-other-tag">{s.tag}</span>
                    <h4>{s.headline}</h4>
                    <p>{s.excerpt}</p>
                    <span className="sdt-other-link">Read story →</span>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
