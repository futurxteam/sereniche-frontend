import BackgroundController from "../systems/BackgroundController";
import ParallaxController from "../systems/ParallaxController";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Stats from "../components/Stats";
import Info1 from "../components/Info1";
import Info2 from "../components/Info2";
import FAQ from "../components/FAQ";
import FAQ2 from "../components/FAQ2";
import CTA from "../components/CTA";
import Navbar from "../components/Navbar";
import CurvedTopBox from "../components/CurvedTopBox";
import Journal from "../components/Journal";
import Impact from "../components/Impact";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

import "../styles/home.css";
import "../styles/navbar.css";

export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <BackgroundController />
      <ParallaxController />

      <div className="scroll-container">
        <section id="hero">
          <Hero />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="stats">
          <Stats />
        </section>



        <div className="faq-bg">
          <section id="faq">
            <FAQ />
          </section>

          <section id="faq2">
            <FAQ2 />
          </section>

          <section id="cta">
            <CTA />
          </section>
        </div>
        <CurvedTopBox className="info-bg">
          <section id="info1">
            <Info1 />
          </section>

          <section id="info2">
            <Info2 />
          </section>
        </CurvedTopBox>

        {/* The White Page Footer Section */}
        <div className="white-footer-section">
          <Journal />
          <Impact />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
}
