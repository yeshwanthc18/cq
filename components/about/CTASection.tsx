'use client';

import './styles/cta.css';

export default function CTASection() {
  return (
    <section className="cta">
      <div className="cta__content">
        <h2 className="cta__heading">Let&apos;s build something that lasts</h2>
        <p className="cta__subtext">
          If you&apos;re tired of disconnected campaigns and unclear results, it&apos;s time for a different approach.
          Let&apos;s create marketing that connects, converts, and compounds over time.
        </p>
        <button className="btn btn-solid" aria-label="Work with us">
          <span>Work With Us</span>
          <span>→</span>
        </button>
      </div>
    </section>
  );
}
