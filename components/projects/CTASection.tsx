'use client';

import './styles/cta.css';

export default function CTASection() {
  return (
    <section className="projects-section cta">
      <div className="cta__content">
        <h2 className="cta__heading">
          Your Success Story Starts Here
        </h2>
        <p className="cta__description">
          Whether you&apos;re looking to scale your brand, dominate your market, or
          transform your marketing—we&apos;re here to make it happen. Let&apos;s build
          something remarkable together.
        </p>
        <div className="cta__buttons">
          <button className="btn btn-solid" aria-label="View all projects">
            <span>Explore More Projects</span>
            <span>→</span>
          </button>
          <button className="btn btn-outline" aria-label="Start your project">
            <span>Let&apos;s Get Started</span>
            <span>↗</span>
          </button>
        </div>
      </div>
    </section>
  );
}
