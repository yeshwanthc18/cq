'use client';

import Link from 'next/link';

import {
  ArrowRight,
  Play,
  ChevronDown,
} from 'lucide-react';

import './styles/hero.css';

export default function HeroSection() {
  return (
    <section className="hero-home">
      {/* VIDEO */}

      <video
        className="hero-home__video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source
          src="/videos/mp.mp4"
          type="video/mp4"
        />
      </video>

      {/* OVERLAY */}

      <div className="hero-home__overlay" />

      {/* GRID */}

      <div className="hero-home__grid" />

      {/* GLOW */}

      <div className="hero-home__glow hero-home__glow--1" />

      <div className="hero-home__glow hero-home__glow--2" />

      {/* CONTENT */}

      <div className="hero-home__container">
        {/* LEFT */}

        <div className="hero-home__left">
          <div className="hero-home__badge fade-up">
            <span className="hero-home__badge-dot" />

            Building Business Intelligent
            Sustainable Enterprises
          </div>

          <h1 className="hero-home__title fade-up delay-1">
            From Clicks to{' '}
            <span className="gradient-text">
              Connections
            </span>
          </h1>

          <p className="hero-home__subtitle fade-up delay-2">
            We combine strategy,
            storytelling, and technology
            to create high-impact digital
            experiences that drive
            measurable growth and lasting
            brand value.
          </p>

          <div className="hero-home__cta fade-up delay-3">
            <Link
              href="/contact"
              className="btn btn-solid"
            >
              Let&apos;s Talk

              <ArrowRight size={18} />
            </Link>

            <Link
              href="/projects"
              className="btn btn-glass"
            >
              <Play size={16} />

              View Our Work
            </Link>
          </div>

          {/* TAGS */}

          <div className="hero-home__tags fade-up delay-3">
            <div className="hero-home__tag">
              AI Strategy
            </div>

            <div className="hero-home__tag">
              Digital Growth
            </div>

            <div className="hero-home__tag">
              Performance Marketing
            </div>
          </div>
        </div>

        {/* RIGHT */}

        <div className="hero-home__right">
          <div className="hero-home__stats">
            <div className="hero-stat fade-up delay-2">
              <div className="hero-stat__number">
                85%
              </div>

              <div className="hero-stat__label">
                Campaign success rate
              </div>
            </div>

            <div className="hero-stat fade-up delay-3">
              <div className="hero-stat__number">
                20+
              </div>

              <div className="hero-stat__label">
                Brands transformed
              </div>
            </div>

            <div className="hero-stat hero-stat--wide fade-up delay-3">
              <div className="hero-stat__number">
                4x
              </div>

              <div className="hero-stat__label">
                Average engagement
                growth
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SCROLL */}

      <div className="hero-home__scroll">
        <span>Scroll</span>

        <div className="hero-home__scroll-indicator">
          <ChevronDown size={18} />
        </div>
      </div>
    </section>
  );
}