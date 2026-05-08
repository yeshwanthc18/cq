'use client';

import './styles/hero.css';

export default function HeroSection() {
  return (
    <section className="projects-section hero">
      <div className="hero__content">
        <h1 className="eyebrow">Our Work</h1>
        <h2 className="section-title">
          Campaigns That <span className="highlight">Convert</span> and <span className="highlight">Connect</span>
        </h2>
        <p className="section-subtitle hero__description">
          Real brands. Real results. See how we&apos;ve helped businesses transform
          their marketing and achieve extraordinary growth through strategy,
          creativity, and data-driven execution.
        </p>
      </div>
    </section>
  );
}
