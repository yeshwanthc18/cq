'use client';

import {
  Brain,
  Zap,
  BookOpen,
} from 'lucide-react';

import './styles/three-pillar.css';

const pillars = [
  {
    icon: <Brain size={26} strokeWidth={1.8} />,
    title: 'Strategy',
    subtitle: 'Built on strategy',
    description:
      'Every move is mapped before execution begins.',
    detail:
      'Data-driven ecosystems',
  },
  {
    icon: <Zap size={26} strokeWidth={1.8} />,
    title: 'Performance',
    subtitle: 'Powered by performance',
    description:
      'Designed to convert, optimize, and scale consistently.',
    detail:
      'Conversion-first campaigns',
  },
  {
    icon: <BookOpen size={26} strokeWidth={1.8} />,
    title: 'Story',
    subtitle: 'Proven by story',
    description:
      'People remember narratives more than products.',
    detail:
      'Creative storytelling systems',
  },
];

export default function ThreePillarSection() {
  return (
    <section className="three-pillar">
      <div className="three-pillar__spotlight" />
      <div className="three-pillar__grid-bg" />
      <div className="three-pillar__noise" />

      <div className="three-pillar__header">
        <p className="section-label">
          Core Foundation
        </p>

        <h2 className="three-pillar__title">
          Built on Strategy.
          <em> Powered by Story.</em>
          Proven by Performance.
        </h2>

        <p className="three-pillar__subtitle">
          We don't just execute —
          we architect systems that align
          strategy, creativity, and growth.
        </p>
      </div>

      <div className="three-pillar__grid">
        {pillars.map((pillar, idx) => (
          <article
            key={pillar.title}
            className={`pillar-card fade-in-up stagger-${(idx % 3) + 1}`}
          >
            <div className="pillar-card__top">
              <div className="pillar-card__icon">
                {pillar.icon}
              </div>

              <div className="pillar-card__line" />
            </div>

            <div className="pillar-card__label">
              {pillar.subtitle}
            </div>

            <h3 className="pillar-card__title">
              {pillar.title}
            </h3>

            <p className="pillar-card__description">
              {pillar.description}
            </p>

            <div className="pillar-card__footer">
              <span className="pillar-card__detail">
                {pillar.detail}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}