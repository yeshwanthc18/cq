'use client';

import './styles/why-us.css';

const reasons = [
  {
    title: 'Story + Performance Integration',
    description:
      'We don\'t separate branding and performance—we merge them into cohesive campaigns.',
  },
  {
    title: 'From Clicks to Connections Approach',
    description:
      'Every campaign is designed to build relationships, not just drive traffic.',
  },
  {
    title: 'AI + Human Creativity',
    description:
      'We use AI to scale, but strategy and storytelling stay uniquely human.',
  },
  {
    title: 'Full-Funnel Thinking',
    description:
      'Awareness → Engagement → Conversion → Retention, all perfectly connected.',
  },
  {
    title: 'Lean, Strategic Execution',
    description:
      'No bloated teams. Just focused expertise that delivers measurable results.',
  },
];

export default function WhyUsSection() {
  return (
    <section className="services-section why-us max-w">
      <h2 className="section-label">Differentiator</h2>
      <h3 className="section-title">Why Crayon & Quill?</h3>
      <p className="section-subtitle mb-lg">
        Because marketing should feel intentional, not scattered. Here&apos;s what
        makes us different.
      </p>

      <div className="reasons-grid grid-2 mt-lg">
        {reasons.map((reason, index) => (
          <div key={index} className="reason-card fade-in">
            <div className="reason-card__icon">
              <span className="icon-dot" />
            </div>
            <h4 className="reason-card__title">{reason.title}</h4>
            <p className="reason-card__description">{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
