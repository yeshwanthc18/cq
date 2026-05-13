'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { projectsData } from './projectsData';
import './styles/detail.css';

export default function ProjectDetail({ slug }: { slug: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  const project = projectsData.find((p) => p.slug === slug);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.08 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  if (!project) {
    return (
      <div className="project-detail-error">
        <h1>Project Not Found</h1>
        <Link href="/projects">Back to Projects</Link>
      </div>
    );
  }

  return (
    <main
      ref={containerRef}
      className={`project-detail ${visible ? 'visible' : ''}`}
    >
      {/* Hero Section */}
      <section className="project-detail__hero">
        <div className="project-detail__hero-content">
          <Link href="/projects" className="project-detail__back">
            ← Back to Projects
          </Link>

          <h1 className="project-detail__title">{project.title}</h1>
          <p className="project-detail__category">{project.category}</p>
          <p className="project-detail__intro">{project.description}</p>
        </div>
      </section>

      {/* Project Image */}
      <section className="project-detail__image-section">
        <div className="project-detail__image-wrapper fade-in-up">
          <Image
            src={project.image}
            alt={project.title}
            width={1200}
            height={600}
            priority
            className="project-detail__image"
          />
        </div>
      </section>

      {/* Metrics */}
      <section className="project-detail__metrics">
        <div className="metrics-grid">
          {project.metrics.map((metric, idx) => (
            <div
              key={idx}
              className={`metric-card fade-in-up stagger-${idx + 1}`}
            >
              <div className="metric-card__label">{metric.label}</div>
              <div className="metric-card__value">{metric.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="project-detail__content">
        <div className="content-grid">
          <div className="content-section fade-in-up stagger-1">
            <h2 className="content-section__title">The Challenge</h2>
            <p className="content-section__text">{project.challenge}</p>
          </div>

          <div className="content-section fade-in-up stagger-2">
            <h2 className="content-section__title">Our Solution</h2>
            <p className="content-section__text">{project.solution}</p>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="project-detail__results">
        <div className="results-container">
          <h2 className="results__title fade-in-up stagger-1">Results</h2>
          <ul className="results-list">
            {project.results.map((result, idx) => (
              <li
                key={idx}
                className={`results-list__item fade-in-up stagger-${idx + 2}`}
              >
                <span className="results-list__icon">✓</span>
                {result}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Highlights */}
      <section className="project-detail__highlights">
        <h2 className="highlights__title fade-in-up stagger-1">
          What We Did
        </h2>
        <div className="highlights-grid">
          {project.highlights.map((highlight, idx) => (
            <div
              key={idx}
              className={`highlight-card fade-in-up stagger-${(idx % 2) + 2}`}
            >
              <span className="highlight-card__icon">→</span>
              <span>{highlight}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Full Content */}
      <section className="project-detail__full-content fade-in-up stagger-1">
        <p>{project.fullContent}</p>
      </section>

      {/* CTA */}
      <section className="project-detail__cta">
        <div className="cta-box">
          <h2>Ready for Your Growth Story?</h2>
          <p>Let&apos;s create something remarkable together.</p>
          <Link href="/contact" className="btn btn-solid">
            Start a Project
          </Link>
        </div>
      </section>

      {/* Navigation */}
      <section className="project-detail__navigation">
        <Link href="/projects" className="nav-btn">
          ← View All Projects
        </Link>
      </section>
    </main>
  );
}
