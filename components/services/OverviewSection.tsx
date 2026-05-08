'use client';

import './styles/overview.css';

export default function OverviewSection() {
  return (
    <section className="services-section overview">
      <div className="overview__content max-w">
        <h2 className="section-label">Our Approach</h2>
        <h3 className="section-title">
          Marketing Built on Story, Backed by Data
        </h3>
        <p className="section-subtitle">
          Most brands either focus on performance or branding. We do both—because
          growth needs both.
        </p>

        <div className="overview__grid grid-3 mt-lg">
          <div className="card fade-in">
            <h4 className="card__title">Strategic Storytelling</h4>
            <p className="card__description">
              We craft narratives that build brand recall and create emotional
              connections with your audience.
            </p>
          </div>

          <div className="card fade-in">
            <h4 className="card__title">Performance Marketing</h4>
            <p className="card__description">
              Every campaign is data-driven, optimized for measurable ROI and
              designed to scale your growth.
            </p>
          </div>

          <div className="card fade-in">
            <h4 className="card__title">AI-Led Execution</h4>
            <p className="card__description">
              Technology powers our strategy, allowing us to deliver smarter,
              faster campaigns at scale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
