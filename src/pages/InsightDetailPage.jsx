import { useParams, Link } from "react-router-dom";
import { insights } from "../data/insights";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/navbar.css";
import "../styles/insightdetail.css";

export default function InsightDetailPage() {
  const { id } = useParams();
  const insight = insights.find((i) => i.id === id);

  if (!insight) {
    return (
      <div className="id-not-found">
        <Navbar />
        <div className="id-404">
          <h2>Insight not found.</h2>
          <Link to="/insights">← Back to Insights</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="id-page">
      <Navbar />

      {/* Hero */}
      <div className="id-hero">
        <img src={insight.image} alt={insight.title} className="id-hero-img" />
        <div className="id-hero-overlay" />
        <div className="id-hero-content">
          <Link to="/insights" className="id-back">← All Insights</Link>
          <span className="id-tag">{insight.tag}</span>
          <h1 className="id-title">{insight.title}</h1>
          <div className="id-meta-row">
            <span>{insight.date}</span>
            <span className="id-dot-sep">·</span>
            <span>{insight.readTime}</span>
          </div>
        </div>
      </div>

      {/* Article body */}
      <div className="id-body light-section">
        <div className="id-article">
          {insight.content.map((block, i) => {
            if (block.type === "heading") {
              return <h2 key={i} className="id-heading">{block.text}</h2>;
            }
            return <p key={i} className="id-paragraph">{block.text}</p>;
          })}
        </div>

        {/* Other insights */}
        <div className="id-others">
          <h2 className="id-others-title">More to read</h2>
          <div className="id-others-grid">
            {insights
              .filter((item) => item.id !== id)
              .map((item) => (
                <Link to={`/insights/${item.id}`} key={item.id} className="id-other-card">
                  <div className="id-other-img-wrap">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="id-other-body">
                    <span className="id-other-tag">{item.tag}</span>
                    <h4>{item.title}</h4>
                    <p>{item.excerpt}</p>
                    <span className="id-other-link">Read more →</span>
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
