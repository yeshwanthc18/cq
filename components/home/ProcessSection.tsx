'use client';

import './styles/process.css';

const steps = [
  {
    number: '01',
    title: 'Discover',
    description: 'We listen before we lead. Every brief starts with the right questions.',
  },
  {
    number: '02',
    title: 'Strategize',
    description: 'A plan that connects your goals to the channels that actually move them.',
  },
  {
    number: '03',
    title: 'Execute',
    description: 'Campaigns, content, funnels — all pulling in the same direction.',
  },
  {
    number: '04',
    title: 'Optimize',
    description: 'We don\'t set and forget. We test, learn, and compound what works.',
  },
];

export default function ProcessSection() {
  return (
    <section className="process">
      <div className="process__header">
        <p className="section-label">Our Process</p>
        <h2 className="process__title">
          Simple. Strategic. <em>Scalable.</em>
        </h2>
      </div>

      <div className="process__timeline">
        {steps.map((step, idx) => (
          <div
            key={step.number}
            className={`process-step fade-in-up stagger-${(idx % 4) + 1}`}
          >
            <div className="process-step__number">{step.number}</div>
            <div className="process-step__content">
              <h3 className="process-step__title">{step.title}</h3>
              <p className="process-step__description">{step.description}</p>
            </div>
            {idx < steps.length - 1 && <div className="process-step__connector" />}
          </div>
        ))}
      </div>
    </section>
  );
}
