'use client';

import './styles/hero.css';

export default function HeroSection() {
  return (
    <section className="services-section hero">
      <div className="hero__content max-w">
        <h1 className="eyebrow">From Clicks to Connections</h1>
        <h2 className="section-title">
          Marketing That Actually <span className="highlight">Converts</span>
        </h2>
        <p className="section-subtitle hero__description">
          We don&apos;t just drive traffic. We build meaningful brand connections
          that turn into revenue. Crayon & Quill blends strategy, storytelling,
          and performance marketing to help brands grow with intent—not noise.
        </p>
        <div className="hero__cta">
          <button className="btn btn-solid" aria-label="Start your growth journey">
            <span>Start Your Growth Journey</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
