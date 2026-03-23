import FadeIn from "./animations/fadein";
import "./style/hero.css";

export default function Hero() {
  return (
    <div className="hero-container">

      <FadeIn>
        <div className="hero-left">
          <h1 className="hero-title">
            A Path <br />
            That Shapes <br />
            Your Future.
          </h1>
        </div>
      </FadeIn>
      <div className="hero-right">
        <p className="hero-description">
          We offer therapy and coaching to help you navigate life's
          challenges with confidence and care. Together, we'll build
          personal insight, emotional well-being, and the steps
          needed for lasting change — at your own pace.
        </p>

        <button className="hero-button">
          START YOUR JOURNEY
        </button>
      </div>


    </div>
  );
}