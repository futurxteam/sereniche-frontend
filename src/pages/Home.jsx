import BackgroundController from "../systems/BackgroundController";
import ParallaxController from "../systems/ParallaxController";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Stats from "../components/Stats";
import Philosophy from "../components/Philosophy";
import FAQ from "../components/FAQ";
import FAQ2 from "../components/FAQ2";
import CTA from "../components/CTA";
import Navbar from "../components/Navbar";
import ScrollLine from "../components/ScrollLine";


import Contact from "../components/Contact";
import Footer from "../components/Footer";
import UserStats from "../components/UserStats";
import FAQ3 from "../components/FAQ3";
import "../styles/home.css";
import "../styles/navbar.css";

export default function Home() {
  return (
    <div className="home">

      <Navbar />
      <BackgroundController />
      <ParallaxController />

      {/* 🌟 New line that sits strictly on top of the DOM stacking context */}
      <ScrollLine />

      <div className="home-content">
        <div className="scroll-container">

          <section id="hero">
            <Hero />
          </section>

          <section id="services">
            <Services />
          </section>

          {/* How It Works intro header */}
          <section id="how-it-works">
            <div className="how-it-works-intro">
              <p className="how-label">HOW IT WORKS</p>
              <h2 className="how-heading">Getting started doesn't have to be complicated.</h2>

            </div>
          </section>

          <section id="stats">
            <Stats />
          </section>



          <div className="faq-bg light-section">
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

          {/* The White Page Footer Section */}
          <div className="white-footer-section">
            {/* Philosophy   inside white layer so fixed overlays don't bleed through */}
            <Philosophy />


            <UserStats />
            <FAQ3 />
            <Contact />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
