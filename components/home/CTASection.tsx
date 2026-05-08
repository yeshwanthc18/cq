'use client';

import './styles/cta.css';

export default function CTASection() {
  return (
    <section className="cta">
      <div className="cta__content">
        <h2 className="cta__heading">Let&apos;s Build Something That Grows</h2>
        <p className="cta__subtext">
          If your marketing feels fragmented or underperforming, it&apos;s time to move
          from activity → strategy → results.
        </p>
        <p className="cta__highlight">
          Let&apos;s build a system that connects, converts, and compounds.
        </p>
        <button className="btn btn-solid">
          <span>Book Your Free Strategy Call</span>
          <span>→</span>
        </button>
      </div>
    </section>
  );
}
