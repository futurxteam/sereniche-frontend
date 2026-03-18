import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { stories } from "../data/stories";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/navbar.css";
import "../styles/stories.css";

/* ── Per-story card with its own parallax on the portrait ── */
function StoryCard({ story, reverse }) {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  const portraitY = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <div
      className={`story-card ${reverse ? "story-card--reverse" : ""}`}
      ref={cardRef}
    >
      {/* Text side */}
      <div className="story-card__text">
        <span className="story-card__tag">{story.tag}</span>
        <h2 className="story-card__headline">{story.headline}</h2>
        <p className="story-card__excerpt">{story.excerpt}</p>
        <Link to={`/stories/${story.id}`} className="story-card__cta">
          Read Full Story <span className="story-card__cta-dot">•</span>
        </Link>
      </div>

      {/* Image side — stacked portrait with parallax */}
      <div className="story-card__images">
        {/* Background blurred large image */}
        <div className="story-card__img-bg">
          <img src={story.heroImage} alt="" aria-hidden="true" />
        </div>
        {/* Foreground portrait with parallax */}
        <motion.div
          className="story-card__img-portrait"
          style={{ y: portraitY }}
        >
          <img src={story.portraitImage} alt={story.name} />
        </motion.div>
      </div>
    </div>
  );
}

/* ── Hero section with parallax background ── */
function StoriesHero() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  return (
    <div className="st-hero navbar-dark-zone" ref={heroRef}>
      <motion.img
        src="/subpagehero/bg3.png"
        className="st-hero-bg"
        style={{ y: bgY }}
        alt=""
        aria-hidden="true"
      />
      <div className="st-hero-overlay" />
      <div className="st-hero-content">
        <p className="st-hero-label">REAL PEOPLE · REAL CHANGE</p>
        <h1 className="st-hero-title">
          Stories of<br />transformation.
        </h1>
        <p className="st-hero-sub">
          Every journey through therapy is unique. These are a few of the
          stories — shared with permission — that remind us why this work
          matters.
        </p>
      </div>
    </div>
  );
}

export default function StoriesPage() {
  return (
    <div className="stories-page">
      <Navbar />

      <StoriesHero />

      {/* Story cards */}
      <div className="stories-list light-section">
        {stories.map((story, i) => (
          <StoryCard key={story.id} story={story} reverse={i % 2 !== 0} />
        ))}
      </div>

      <Footer />
    </div>
  );
}
