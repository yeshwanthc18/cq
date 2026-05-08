'use client';

import './styles/cta.css';

export default function CTASection() {
  return (
    <section className="services-section cta">
      <div className="cta__content">
        <h2 className="cta__heading">
          Let&apos;s Turn Your Clicks Into Customers
        </h2>
        <p className="cta__description">
          If your marketing feels scattered or underperforming, it&apos;s time to fix
          the system—not just the channel. Let&apos;s build something that scales, converts, and lasts.
        </p>
        <button className="btn btn-solid" aria-label="Book a free strategy call">
          <span>Book a Free Strategy Call</span>
          <span>→</span>
        </button>
      </div>
    </section>
  );
}
