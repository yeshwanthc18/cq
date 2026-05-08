'use client';

import { useState } from 'react';
import './styles/projects-grid.css';

const projects = [
  {
    id: 1,
    title: 'Dark Ocean',
    category: 'AI • Marine Intelligence',
    description:
      'Advanced offshore geo-intelligence platform combining AI, hydrography, robotics, seismic mapping, and marine survey technologies for next-generation ocean exploration.',
    metrics: [
      { label: 'Technology', value: 'AI-Powered' },
      { label: 'Industry', value: 'Marine Tech' },
      { label: 'Impact', value: 'Global Scale' },
    ],
    highlights: [
      'Brand positioning for emerging AI-marine sector',
      'Messaging around complex technology innovation',
      'Market differentiation strategy',
      'Stakeholder communication systems',
    ],
  },
  {
    id: 2,
    title: 'Dekriminators',
    category: 'Smart Pest Management',
    description:
      'Technology-driven pest management company delivering environmentally responsible, data-backed, and large-scale pest control solutions for businesses and homes.',
    metrics: [
      { label: 'Solution Type', value: 'Data-Driven' },
      { label: 'Approach', value: 'Eco-Friendly' },
      { label: 'Scale', value: 'Enterprise' },
    ],
    highlights: [
      'Sustainability-focused brand narrative',
      'B2B and consumer audience alignment',
      'Technology transparency messaging',
      'Environmental impact storytelling',
    ],
  },
  {
    id: 3,
    title: 'Mark Comprehensive',
    category: 'Architecture • Facade',
    description:
      'Facade engineering and architectural solutions company specializing in precision-driven exterior systems and modern infrastructure execution.',
    metrics: [
      { label: 'Expertise', value: 'Engineering' },
      { label: 'Focus', value: 'Facade Systems' },
      { label: 'Market', value: 'Premium' },
    ],
    highlights: [
      'Technical expertise positioning',
      'Portfolio showcase strategy',
      'B2B architectural community engagement',
      'Project case study development',
    ],
  },
  {
    id: 4,
    title: 'Jes AI',
    category: 'Artificial Intelligence',
    description:
      'AI-powered workflow platform built to streamline productivity, automate business operations, and enhance intelligent digital experiences.',
    metrics: [
      { label: 'Focus', value: 'Automation' },
      { label: 'Audience', value: 'Enterprises' },
      { label: 'Value', value: 'Productivity' },
    ],
    highlights: [
      'SaaS product positioning and messaging',
      'AI capability explanation for non-technical audiences',
      'ROI-focused value proposition',
      'Integration ecosystem storytelling',
    ],
  },
  {
    id: 5,
    title: 'Elmmetric',
    category: 'FinTech • SaaS',
    description:
      'Modern AI invoicing and financial operations platform designed for scalable automation, analytics, and intelligent business management.',
    metrics: [
      { label: 'Category', value: 'FinTech' },
      { label: 'Features', value: 'Automation' },
      { label: 'Target', value: 'Growing Businesses' },
    ],
    highlights: [
      'Financial operations simplification messaging',
      'Compliance and accuracy positioning',
      'Enterprise readiness communication',
      'Customer success story development',
    ],
  },
  {
    id: 6,
    title: 'Evologic Tech',
    category: 'Technology Solutions',
    description:
      'Innovation-focused technology company delivering scalable digital products, software systems, and modern engineering solutions for growing businesses.',
    metrics: [
      { label: 'Offering', value: 'Custom Solutions' },
      { label: 'Strength', value: 'Innovation' },
      { label: 'Reach', value: 'Scalable' },
    ],
    highlights: [
      'Technology thought leadership positioning',
      'Custom development expertise narrative',
      'Technical team credibility building',
      'Industry-specific solution messaging',
    ],
  },
  {
    id: 7,
    title: 'Liabify',
    category: 'Legal Tech',
    description:
      'Legal-tech platform simplifying compliance, liability workflows, and intelligent legal documentation through modern digital infrastructure.',
    metrics: [
      { label: 'Solution', value: 'Legal Tech' },
      { label: 'Focus', value: 'Compliance' },
      { label: 'Benefit', value: 'Simplification' },
    ],
    highlights: [
      'Complex legal processes simplification messaging',
      'Risk mitigation value proposition',
      'Compliance-focused storytelling',
      'Professional services market positioning',
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
