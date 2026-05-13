'use client';

import { useState } from 'react';
import Link from 'next/link';

import './styles/projects-grid.css';

const projects = [
  {
    id: 1,
    slug: 'dark-ocean',
    title: 'Dark Ocean',
    category: 'AI • Marine Intelligence',
    video: '/videos/Darkocean.mp4',
  },
  {
    id: 2,
    slug: 'dekriminators',
    title: 'Dekriminators',
    category: 'Smart Pest Management',
    video: '/videos/Dekriminators.mp4',
  },
  {
    id: 3,
    slug: 'mark-comprehensive',
    title: 'Mark Comprehensive',
    category: 'Architecture • Facade',
    video: '/videos/mark.mp4',
  },
  {
    id: 4,
    slug: 'jes-ai',
    title: 'Jes AI',
    category: 'Artificial Intelligence',
    video: '/videos/JES.mp4',
  },
  {
    id: 5,
    slug: 'elmmetric',
    title: 'Elmmetric',
    category: 'FinTech • SaaS',
    video: '/videos/elm.mp4',
  },
  {
    id: 6,
    slug: 'evologic-tech',
    title: 'Evologic Tech',
    category: 'Technology Solutions',
    video: '/videos/evologic.mp4',
  },
  {
    id: 7,
    slug: 'liabify',
    title: 'Liabify',
    category: 'Legal Tech',
    video: '/videos/liabify.mp4',
  },
];

export default function ProjectsGrid() {
  const [selectedCategory, setSelectedCategory] =
    useState('All');

  const categories = [
    'All',
    'AI • Marine Intelligence',
    'Smart Pest Management',
    'Architecture • Facade',
    'Artificial Intelligence',
    'FinTech • SaaS',
    'Technology Solutions',
    'Legal Tech',
  ];

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter(
          (p) => p.category === selectedCategory
        );

  return (
    <section className="projects-section">
      <div className="projects-section__spotlight" />
      <div className="projects-section__grid-bg" />
      <div className="projects-section__noise" />

      <div className="portfolio-header">
        <div className="portfolio-header__content">
          <p className="eyebrow">Our Work</p>

          <h2 className="portfolio-header__title">
            Our Client <em>Portfolio</em>
          </h2>

          <p className="portfolio-header__subtitle">
            Explore a curated selection of
            brands we&apos;ve partnered with
            across AI, SaaS, finance,
            architecture, and emerging
            technology sectors.
          </p>
        </div>

        <Link
          href="/contact"
          className="btn btn-outline"
        >
          Start Your Project
          <span>→</span>
        </Link>
      </div>

      <div className="filter-tabs">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-tab ${
              selectedCategory === category
                ? 'active'
                : ''
            }`}
            onClick={() =>
              setSelectedCategory(category)
            }
          >
            {category}
          </button>
        ))}
      </div>

      <div className="projects-grid-container">
        {filteredProjects.map((project, idx) => (
          <Link
            key={project.id}
            href={`/projects/${project.slug}`}
            className={`project-grid-card fade-in-up stagger-${
              (idx % 3) + 1
            }`}
          >
            <div className="project-grid-card__media-wrapper">
             <video
  className="project-card__video"
  autoPlay
  muted
  loop
  playsInline
  preload="auto"
>
  <source
    src={project.video}
    type="video/mp4"
  />
</video>

              <div className="project-grid-card__overlay" />

              <div className="project-grid-card__gradient" />
            </div>

            <div className="project-grid-card__content">
              <p className="project-grid-card__category">
                {project.category}
              </p>

              <h3 className="project-grid-card__title">
                {project.title}
              </h3>

              <div className="project-grid-card__footer">
                <span className="view-case-study">
                  View Case Study

                  <span className="arrow">
                    →
                  </span>
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}