'use client';

import './styles/stats.css';

const STATS = [
  { value: '10+', label: 'Brands Elevated' },
  { value: '02', label: 'Years of Craft' },
  { value: '3×', label: 'Average ROI' },
  { value: '40+', label: 'Markets Reached' },
];

export default function StatsSection() {
  return (
    <section className="stats">
      <div className="stats__grid">
        {STATS.map((stat, idx) => (
          <div key={stat.label} className={`stats__item fade-in-up stagger-${(idx % 4) + 1}`}>
            <div className="stats__value">{stat.value}</div>
            <div className="stats__label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
