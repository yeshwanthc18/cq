'use client';

import './styles/hero.css';

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero__bg" />
      <div className="hero__divider" />

      <div className="hero__content">
        <div className="hero__left">
          <p className="eyebrow">Get in Touch</p>
          <h1 className="hero__title">
            <span>Let&apos;s Create</span>
            <span className="hero__accent">Something Great</span>
          </h1>
        </div>

        <div className="hero__right">
          <p className="hero__text">
            Ready to transform your marketing strategy? We&apos;d love to hear about your
            project and discuss how Crayon &amp; Quill can help you achieve your goals.
          </p>
          <p className="hero__subtext">
            Or reach out directly at <a href="mailto:hello@crayonandquill.com">hello@crayonandquill.com</a>
          </p>
        </div>
      </div>

      <div className="hero__scroll-hint">
        <span>Scroll to contact us</span>
      </div>
    </section>
  );
}
