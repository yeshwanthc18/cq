'use client';

import Link from 'next/link';

import {
  ArrowRight,
  Play,
  ChevronDown,
  Sparkles,
} from 'lucide-react';

import './styles/hero.css';

export default function HeroSection() {
  return (
    <section className="hero-home">
      {/* BACKGROUND VIDEO */}

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

      {/* OVERLAYS */}

      <div className="hero-home__overlay" />
      <div className="hero-home__noise" />
      <div className="hero-home__grid" />

      {/* GLOWS */}

      <div className="hero-home__glow hero-home__glow--1" />
      <div className="hero-home__glow hero-home__glow--2" />

      {/* MAIN */}

      <div className="hero-home__container">
        {/* LEFT */}

        <div className="hero-home__left">
          <div className="hero-home__badge fade-up">
            <Sparkles size={14} />

            Building Intelligent Digital
            Enterprises
          </div>

          <h1 className="hero-home__title fade-up delay-1">
            From Clicks
            <br />
            to
            <span className="gradient-text">
              {' '}
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

          {/* BOTTOM TAGS */}

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
  <div className="hero-dashboard fade-up delay-2">

    {/* MAIN VIDEO PANEL */}

    <div className="hero-dashboard__main">
      <video
        className="hero-dashboard__video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source
          src="/videos/cq-logo.mp4"
          type="video/mp4"
        />
      </video>

      <div className="hero-dashboard__overlay" />

      <div className="hero-dashboard__content">
        <span className="hero-dashboard__eyebrow">
          Strategy • AI • Growth
        </span>

        <h3 className="hero-dashboard__title">
          Timeless
          <br />
          Marketing
        </h3>

        <p className="hero-dashboard__text">
          Intelligent systems built for
          modern brands that want
          clarity, momentum, and scale.
        </p>
      </div>
    </div>

    {/* FLOATING SMALL CARD */}

    <div className="hero-mini-card hero-mini-card--1">
      <span className="hero-mini-card__label">
        Growth Rate
      </span>

      <strong>+248%</strong>
    </div>

    {/* FLOATING PERFORMANCE */}

    <div className="hero-mini-card hero-mini-card--2">
      <span className="hero-mini-card__label">
        Performance
      </span>

      <div className="hero-mini-progress">
        <span />
      </div>
    </div>

    {/* FLOATING TAG */}

    <div className="hero-dashboard__tag">
      AI-Led Systems
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