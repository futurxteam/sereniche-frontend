import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Footer from "../components/Footer";
import "../styles/navbar.css";
import "../styles/servicepage.css";

export default function ServicePage() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <div className="service-page">
      <Navbar />

      {/* Hero banner */}
      <div className="sp-hero navbar-dark-zone" ref={ref}>
        <motion.img
          src="/subpagehero/bg3.png"
          className="sp-hero-bg"
          style={{ y: imageY }}
        />
        <div className="sp-hero-content">
          <p className="sp-label">WHAT WE OFFER</p>
          <h1 className="sp-title">
            Care that meets you<br />where you are.
          </h1>
          <p className="sp-sub">
            Every path is different. Our services are designed to support
            growth, healing, and clarity — at your own pace.
          </p>
        </div>
      </div>

      {/* Services grid */}
      <div className="sp-section light-section">
        <Services />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
