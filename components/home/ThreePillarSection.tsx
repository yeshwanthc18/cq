'use client';

import './styles/three-pillar.css';

const pillars = [
  {
    icon: '🎯',
    title: 'Strategy',
    subtitle: 'Built on strategy',
    description: 'Every move is mapped before it&apos;s made.',
    detail: 'Data-driven ecosystems',
  },
  {
    icon: '⚡',
    title: 'Performance',
    subtitle: 'Powered by performance',
    description: 'Built to convert, not just to impress.',
    detail: 'Conversion-first campaigns',
  },
  {
    icon: '📖',
    title: 'Story',
    subtitle: 'Proven by story',
    description: 'People don&apos;t buy products. They buy meaning.',
    detail: 'Creative storytelling',
  },
];

export default function ThreePillarSection() {
  return (
    <section className="three-pillar">
      <div className="three-pillar__header">
        <h2 className="three-pillar__title">
          Built on Strategy. <em>Powered by Story.</em> Proven by Performance.
        </h2>
        <p className="three-pillar__subtitle">
          We don&apos;t just execute — we think, build, and scale. Three disciplines, one unified system.
        </p>
      </div>

      <div className="three-pillar__grid">
        {pillars.map((pillar, idx) => (
          <div
            key={pillar.title}
            className={`pillar-card fade-in-up stagger-${(idx % 3) + 1}`}
          >
            <div className="pillar-card__icon">{pillar.icon}</div>
            <div className="pillar-card__label">{pillar.subtitle}</div>
            <h3 className="pillar-card__title">{pillar.title}</h3>
            <p className="pillar-card__description">{pillar.description}</p>
            <p className="pillar-card__detail">{pillar.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
