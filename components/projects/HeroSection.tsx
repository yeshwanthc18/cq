'use client';

import './styles/hero.css';

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero__bg" />
      <div className="hero__divider" />

      <div className="hero__content">
        <div className="hero__left">
          <p className="eyebrow">Our Projects</p>
          <h1 className="hero__title">
            <span>Results That</span>
            <span className="hero__accent">Speak for Themselves</span>
          </h1>
        </div>

        <div className="hero__right">
          <p className="hero__text">
            Real brands. Real results. See how we&apos;ve helped businesses transform
            their marketing and achieve extraordinary growth through strategy,
            creativity, and data-driven execution.
          </p>
          <button className="btn btn-outline" aria-label="View our portfolio">
            <span>View Portfolio</span>
            <span>→</span>
          </button>
        </div>
      </div>

      <div className="hero__scroll-hint">
        <span>Scroll to explore</span>
      </div>
    </section>
  );
}
