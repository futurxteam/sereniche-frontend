import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/navbar.css";
import "../styles/aboutpage.css";

/* ── Founder Card mimicking the Stories Card layout ── */
function FounderCard() {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  const portraitY = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const bgY = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  return (
    <div className="founder-card" ref={cardRef}>
      {/* Text side */}
      <div className="founder-card__text">
        <span className="founder-card__tag">Meet Our Founder</span>
        <h2 className="founder-card__headline">Anna Keller</h2>
        <p className="founder-card__excerpt">
          Sereniche was founded by Anna Keller, a therapist with over 15 years of experience helping people navigate life's turning points. Her work is grounded in the belief that clarity and change come from small, intentional steps — and that no one should walk their path alone.
          <br /><br />
          Anna started Sereniche to create a welcoming, non-judgmental space where people could slow down, reflect, and find their next direction with confidence and care.
        </p>
        <blockquote className="founder-quote">
          "Therapy isn't about fixing people — it's about walking beside them as they discover their own way forward."
        </blockquote>
      </div>

      {/* Image side — stacked portrait with parallax */}
      <div className="founder-card__images">
        <motion.div className="founder-card__img-bg" style={{ y: bgY }}>
          <img src="/stories/1.png" alt="" aria-hidden="true" />
        </motion.div>
        <motion.div
          className="founder-card__img-portrait"
          style={{ y: portraitY }}
        >
          <img src="/stories/2.png" alt="Anna Keller" />
        </motion.div>
      </div>
    </div>
  );
}

function TeamCard({ img, name, role, offsetClass, cardSpeed = 40 }) {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const containerY = useTransform(scrollYProgress, [0, 1], [cardSpeed, -cardSpeed]);

  return (
    <motion.div className={`ap-team-card ${offsetClass || ""}`} ref={cardRef} style={{ y: containerY }}>
      <div className="ap-blob">
        <motion.img src={img} alt={name} style={{ y: imgY, scale: 1.15 }} />
      </div>
      <h3>{name}</h3>
      <p>{role}</p>
    </motion.div>
  );
}

export default function AboutPage() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <div className="about-page">
      <Navbar />

      {/* Hero banner */}
      <div className="ap-hero navbar-dark-zone" ref={ref}>
        <motion.img
          src="/subpagehero/bg3.png"
          className="ap-hero-bg"
          style={{ y: imageY, scale: 1.15 }}
        />
        <div className="ap-hero-content">
          <div className="ap-hero-top">
            <h1 className="ap-title">Your Path,<br />Our Purpose.</h1>
            <p className="ap-micro">
              Find out who we are, what we stand for, and how we can support your journey.
            </p>
          </div>
          
          <div className="ap-statement">
            <p>
              At Sereniche, we believe every journey is unique — and so is the support it deserves. Our role is to walk beside you, offering clarity, compassion, and practical guidance as you navigate life's challenges.
            </p>
          </div>

        </div>
      </div>

      <div className="ap-body-wrapper light-section">

        {/* The Way We Help */}
        <section className="ap-method">
          <p className="ap-label">THE WAY WE HELP</p>
          <h2 className="ap-method-text">
            We start by listening — really listening — to understand your needs and pace. From there, we shape a path that's realistic, sustainable, and tailored to you. Every session is a safe space to explore, reflect, and grow without judgment.
          </h2>
        </section>

        {/* Founder Section */}
        <section className="ap-founder">
          <FounderCard />
        </section>

        {/* Our Team Section (Journal Cards Template) */}
        <section className="ap-team">
          <div className="ap-team-header">
            <p className="ap-label">OUR TEAM</p>
            <h2 className="ap-team-title">The People Who Walk Beside You.</h2>
            <p className="ap-team-sub">
              Sereniche is more than a service — each member of our team is here to listen, guide, and support you at your own pace.
            </p>
          </div>

          <div className="ap-team-grid">
            <TeamCard 
              img="/stories/1.png" 
              name="Dr. Sarah Bennett" 
              role="Psychiatrist specializing in holistic adolescent care and preventive wellness." 
              cardSpeed={60}
            />
            <TeamCard 
              img="/stories/2.png" 
              name="David Chen" 
              role="Clinical psychologist focused on navigating life transitions and anxiety." 
              offsetClass="offset" 
              cardSpeed={-30}
            />
            <TeamCard 
              img="/stories/8.png" 
              name="Dr. Elena Rostova" 
              role="Geriatric care specialist dedicated to compassionate aging support." 
              cardSpeed={90}
            />
          </div>
        </section>

      </div>

      <Footer />
    </div>
  );
}
