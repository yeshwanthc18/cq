'use client';

import './styles/story.css';

export default function StorySection() {
  return (
    <section className="story">
      <div className="story__grid">
        <div className="story__left">
          <p className="section-label">Our Story</p>
          <h2 className="story__heading">
            We saw a gap in the <em>industry.</em>
          </h2>
          <div className="story__body">
            <p>
              Crayon &amp; Quill was built to bridge a gap we kept seeing in the industry.
              Brands were either running performance campaigns with no real identity, or
              investing in branding that didn&apos;t translate into results. We knew there
              had to be a better way.
            </p>
            <p>
              So we built an approach where storytelling meets performance — where every
              campaign is designed not just to attract attention, but to engage, convert,
              and retain.
            </p>
            <p>
              Today, we partner with startups and growing businesses to help them move from
              fragmented marketing efforts to unified growth systems.
            </p>
          </div>
        </div>

        <div className="story__right">
          <div className="story__founded">
            <div className="story__founded-year">Strategy</div>
            <div className="story__founded-label">Meets Performance</div>
          </div>
        </div>
      </div>
    </section>
  );
}
