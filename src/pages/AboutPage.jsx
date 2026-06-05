import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/navbar.css";
import "../styles/aboutpage.css";

function TeamCard({ img, name, role, credentials, bio, offsetClass, cardSpeed = 40 }) {
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
      <p className="ap-team-credentials">{credentials}</p>
      <p>{role}</p>
      {bio && <p className="ap-team-bio">{bio}</p>}
    </motion.div>
  );
}

const teamMembers = [
  // ── Row 1 ──
  {
    img: "/dr/Dr Femi Mol.jpg",
    name: "Dr. Femi",
    role: "Consultant Psychiatrist",
    credentials: "MBBS, MD Psychiatry, Fellowship in Sexual Medicine",
    bio: "With more than a decade of clinical experience in women's mental health and addiction psychiatry. Focuses on Women's Mental Health, Addiction Psychiatry, and Sexual Medicine, providing holistic, confidential, and evidence-based psychiatric care.",
    cardSpeed: 60,
    offsetClass: "",
  },
  {
    img: "/dr/Dr Benzir Hussain.jpg",
    name: "Dr. Benzir Hussain",
    role: "Consultant Psychiatrist",
    credentials: "MBBS, MD Psychiatry, MBA Healthcare Management",
    bio: "With over 12 years of clinical experience across academic institutions and hospitals. Areas of interest include De-addiction and Geriatric Medicine, combining psychiatric expertise with healthcare management insight for holistic patient care.",
    cardSpeed: -30,
    offsetClass: "offset",
  },
  {
    img: "/dr/Dr Shemeena.jpg",
    name: "Dr. Shemeena K",
    role: "Consultant Psychiatrist",
    credentials: "MBBS, MD Psychiatry (NIMHANS)",
    bio: "With over 9 years of experience in the diagnosis and management of diverse psychiatric conditions. Focuses on Psychosis, Anxiety Disorders, Personality Disorders, Child & Adolescent Psychiatry, Perinatal Mental Health, and Substance Use Disorders.",
    cardSpeed: 80,
    offsetClass: "",
  },
  // ── Row 2 ──
  {
    img: "/dr/Dr Aswathy Anand.jpg",
    name: "Dr. Aswathy Anand",
    role: "Consultant Psychologist",
    credentials: "MSc, MPhil, PhD, PGCFM",
    bio: "Works with children, adolescents, and adults, providing evidence-based psychological care. Focuses on CBT, Autism Spectrum Interventions, Behaviour Therapy, Learning Disabilities, Psycho-oncology, Corporate Training, and Family & Marital Therapy.",
    cardSpeed: 50,
    offsetClass: "offset",
  },
  {
    img: "/dr/Mary Anusha Sebastain.jpg",
    name: "Mary Anusha Sebastian",
    role: "RCI Licensed Clinical Psychologist",
    credentials: "BSc, MSc, M.Phil Clinical Psychology – IMHANS",
    bio: "Experienced in working with diverse populations through evidence-based interventions. Focuses on Emotion-Focused Therapy, CBT, DBT, ACT, MET, Narrative Therapy, and Couple Therapy, while also conducting psychological assessments.",
    cardSpeed: -20,
    offsetClass: "",
  },
  {
    img: "/dr/Fr. Ritto Mathew.jpg",
    name: "Fr. Ritto Mathew",
    role: "Mental Health Professional",
    credentials: "MSW (Medical & Psychiatry), DCP",
    bio: "With 15+ years of experience providing psychosocial support, clinical counselling, and hypnotherapy. Works with individuals to manage emotional, psychological, and behavioral challenges using a client-centered, ethical approach. Expertise in Pastoral Counselling, Psychodynamic therapy, and Grief & Loss.",
    cardSpeed: 70,
    offsetClass: "offset",
  },
  {
    img: "/dr/Uveysudheen KH.jpg",
    name: "Uveysudheen K H",
    role: "Counselling Psychologist & Training and Development Consultant",
    credentials: "BSc, MSc Counselling Psychology, University of Madras (Gold Medal)",
    bio: "Executive Director – Academic Innovation and Excellence, Sereniche Academy. Focuses on learning, research, training and development, and organizational change, working with educational institutions and companies across Kerala.",
    cardSpeed: -10,
    offsetClass: "",
  },
];


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

        {/* Our Team Section */}
        <section className="ap-team">
          <div className="ap-team-header">
            <p className="ap-label">OUR TEAM</p>
            <h2 className="ap-team-title">The People Who Walk Beside You.</h2>
            <p className="ap-team-sub">
              Sereniche is more than a service — each member of our team is here to listen, guide, and support you at your own pace.
            </p>
          </div>

          {/* Row 1 — 3 members */}
          <div className="ap-team-grid">
            {teamMembers.slice(0, 3).map((member) => (
              <TeamCard
                key={member.name}
                img={member.img}
                name={member.name}
                role={member.role}
                credentials={member.credentials}
                bio={member.bio}
                cardSpeed={member.cardSpeed}
                offsetClass={member.offsetClass}
              />
            ))}
          </div>

          {/* Row 2 — 3 members */}
          <div className="ap-team-grid ap-team-grid--row2">
            {teamMembers.slice(3, 6).map((member) => (
              <TeamCard
                key={member.name}
                img={member.img}
                name={member.name}
                role={member.role}
                credentials={member.credentials}
                bio={member.bio}
                cardSpeed={member.cardSpeed}
                offsetClass={member.offsetClass}
              />
            ))}
          </div>

          {/* Row 3 — 1 member centred */}
          <div className="ap-team-grid ap-team-grid--row3">
            {teamMembers.slice(6).map((member) => (
              <TeamCard
                key={member.name}
                img={member.img}
                name={member.name}
                role={member.role}
                credentials={member.credentials}
                bio={member.bio}
                cardSpeed={member.cardSpeed}
                offsetClass=""
              />
            ))}
          </div>
        </section>

      </div>

      <Footer />
    </div>
  );
}
