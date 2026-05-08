'use client';

import './styles/hero.css';

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero__bg" />
      <div className="hero__divider" />

      <div className="hero__content">
        <div className="hero__left">
          <p className="eyebrow">About Crayon &amp; Quill</p>
          <h1 className="hero__title">
            <span>From Clicks to</span>
            <span className="hero__accent">Connections</span>
          </h1>
        </div>

        <div className="hero__right">
          <p className="hero__text">
            We started Crayon &amp; Quill with a simple belief: marketing should
            do more than generate clicks — it should create meaningful connections.
            Because clicks don&apos;t build brands. Connections do.
          </p>
          <button className="btn btn-outline" aria-label="Work with us">
            <span>Work With Us</span>
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
