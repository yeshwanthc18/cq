'use client';

import './styles/why-us.css';

const REASONS = [
  { title: 'Turn strategy into execution' },
  { title: 'Turn traffic into leads' },
  { title: 'Turn audiences into communities' },
  { title: 'Turn brands into growth engines' },
];

export default function WhyUsSection() {
  return (
    <section className="why-us">
      <div className="why-us__header">
        <p className="eyebrow">Why Choose Us</p>

        <h2 className="why-us__title">
          We turn ideas into <span className='highlighted'>impact</span>
        </h2>

        <p className="why-us__subtitle">
          We don’t just execute tasks — we build systems that drive measurable growth.
        </p>
      </div>

      <div className="why-us__grid">
        {REASONS.map((reason, idx) => (
          <div
            key={idx}
            className={`why-us__card fade-in-up stagger-${(idx % 4) + 1}`}
          >
            <div className="why-us__icon">→</div>

            <h3 className="why-us__text">{reason.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}