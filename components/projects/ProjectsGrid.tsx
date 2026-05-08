'use client';

import { useState } from 'react';
import './styles/projects-grid.css';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Brand Growth',
    category: 'Performance Marketing + SEO',
    description:
      'Increased revenue by 240% through integrated SEO and performance marketing strategies.',
    metrics: [
      { label: 'Revenue Growth', value: '+240%' },
      { label: 'Traffic Increase', value: '+185%' },
      { label: 'ROI Improvement', value: '+320%' },
    ],
    highlights: [
      'Optimized product pages for high-intent keywords',
      'Created targeted Google Ads campaigns',
      'Built automated email nurturing funnels',
      'Implemented conversion rate optimization',
    ],
  },
  {
    id: 2,
    title: 'SaaS Lead Generation',
    category: 'Content Marketing + Automation',
    description:
      'Generated 1,200+ qualified leads in 6 months through strategic content and automation.',
    metrics: [
      { label: 'Qualified Leads', value: '1,200+' },
      { label: 'Lead Quality Score', value: '+95%' },
      { label: 'Sales Velocity', value: '+45%' },
    ],
    highlights: [
      'Developed comprehensive content strategy',
      'Created industry-leading whitepapers and case studies',
      'Built lead nurturing workflows',
      'Optimized landing pages for conversion',
    ],
  },
  {
    id: 3,
    title: 'Personal Brand Scaling',
    category: 'Social Media + Personal Branding',
    description:
      'Grew Instagram following from 5K to 150K with authentic storytelling and strategy.',
    metrics: [
      { label: 'Follower Growth', value: '30x' },
      { label: 'Engagement Rate', value: '+450%' },
      { label: 'Conversion Rate', value: '+280%' },
    ],
    highlights: [
      'Strategic content pillars development',
      'High-performing Reels strategy',
      'Community engagement framework',
      'Monetization through partnerships',
    ],
  },
  {
    id: 4,
    title: 'Local Services Dominance',
    category: 'Local SEO + Reputation',
    description:
      'Dominated local search results and became the #1 choice in their market.',
    metrics: [
      { label: 'Local Search Visibility', value: '1st' },
      { label: 'Service Inquiries', value: '+520%' },
      { label: 'Customer Reviews', value: '4.9/5' },
    ],
    highlights: [
      'Local SEO optimization strategy',
      'Google Business Profile optimization',
      'Review generation and management',
      'Local citation building',
    ],
  },
  {
    id: 5,
    title: 'Product Launch Campaign',
    category: 'Integrated Campaign',
    description:
      'Successfully launched product with $500K revenue in first month.',
    metrics: [
      { label: 'Month 1 Revenue', value: '$500K' },
      { label: 'Email Subscribers', value: '25K+' },
      { label: 'Pre-Launch Buzz', value: '+180%' },
    ],
    highlights: [
      'Pre-launch awareness campaign',
      'Email list building strategy',
      'Influencer partnerships',
      'PR and media coverage',
    ],
  },
  {
    id: 6,
    title: 'Community Building',
    category: 'Social Media + Community Strategy',
    description:
      'Built an engaged community of 50K+ members around a brand mission.',
    metrics: [
      { label: 'Community Size', value: '50K+' },
      { label: 'Daily Active Members', value: '8K' },
      { label: 'Retention Rate', value: '87%' },
    ],
    highlights: [
      'Community strategy and governance',
      'Content calendar and editorial',
      'Member engagement programs',
      'Monetization models',
    ],
  },
];

export default function ProjectsGrid() {
  const [activeSlide, setActiveSlide] = useState(0);

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="projects-section projects-grid">
      <div className="grid-header">
        <div className="grid-header__content">
          <p className="eyebrow">Portfolio</p>
          <h2 className="grid-header__title">
            Results that <em>speak for themselves</em>
          </h2>
          <p className="grid-header__subtitle">
            From startups to scaling brands, see how we&apos;ve driven measurable growth and real results.
          </p>
        </div>
      </div>

      <div className="slider-container">
        <div
          className="projects-slider"
          style={{
            transform: `translateX(-${activeSlide * 100}%)`,
          }}
        >
          {projects.map((project) => (
            <div key={project.id} className="project-slide">
              <div className="project-card fade-in-up">
                <div className="project-card__number">
                  {String(project.id).padStart(2, '0')}
                </div>

                <div className="project-card__category">
                  {project.category}
                </div>

                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__description">{project.description}</p>

                <div className="project-metrics">
                  {project.metrics.map((metric, idx) => (
                    <div key={idx} className="metric">
                      <div className="metric__value">{metric.value}</div>
                      <div className="metric__label">{metric.label}</div>
                    </div>
                  ))}
                </div>

                <div className="project-highlights">
                  <h4 className="highlights-title">What we did:</h4>
                  <ul className="highlights-list">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="highlight-item">
                        <span className="highlight-icon">✓</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  className="btn btn-outline project-cta"
                  aria-label={`Learn more about ${project.title}`}
                >
                  View Case Study
                  <span>↗</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="slider-controls">
        <button
          className="slider-btn slider-btn--prev"
          onClick={handlePrev}
          aria-label="Previous project"
        >
          ←
        </button>

        <div className="slider-dots">
          {projects.map((_, idx) => (
            <button
              key={idx}
              className={`dot ${activeSlide === idx ? 'active' : ''}`}
              onClick={() => setActiveSlide(idx)}
              aria-label={`Go to project ${idx + 1}`}
              aria-current={activeSlide === idx}
            />
          ))}
        </div>

        <button
          className="slider-btn slider-btn--next"
          onClick={handleNext}
          aria-label="Next project"
        >
          →
        </button>
      </div>

      <div className="slider-counter">
        <span className="counter-current">{String(activeSlide + 1).padStart(2, '0')}</span>
        <span className="counter-divider">/</span>
        <span className="counter-total">{String(projects.length).padStart(2, '0')}</span>
      </div>
    </section>
  );
}
