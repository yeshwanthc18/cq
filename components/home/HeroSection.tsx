'use client';

import {
  ArrowRight,
  Play,
  ChevronDown,
} from 'lucide-react';

import './styles/hero.css';

export default function HeroSection() {
  return (
    <section className="hero-home">
      {/* Background Video */}
      <video
        className="hero-home__video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/mp.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      {/* <div className="hero-home__overlay" /> */}

      {/* Glow */}
      <div className="hero-home__glow hero-home__glow--1" />
      <div className="hero-home__glow hero-home__glow--2" />

      {/* Grid */}
      <div className="hero-home__grid" />

      {/* Content */}
      <div className="hero-home__content">
        <div className="hero-home__badge fade-up">
          <span className="hero-home__badge-dot" />
          Creative Marketing Agency
        </div>

        <h1 className="hero-home__title fade-up delay-1">
          From Clicks to{' '}
          <span className="gradient-text">
             Connections
          </span>
        </h1>

        <p className="hero-home__subtitle fade-up delay-2">
          We combine strategy, storytelling, and technology to create
          high-impact digital experiences that drive measurable growth and
          lasting brand value.
        </p>

        <div className="hero-home__cta fade-up delay-3">
          <button className="btn btn-solid">
            <span>Let&apos;s Talk</span>
            <ArrowRight size={18} />
          </button>

          <button className="btn btn-glass">
            <Play size={16} />
            <span>View Our Work</span>
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hero-home__scroll">
        <span>Scroll</span>

        <div className="hero-home__scroll-line">
          <ChevronDown size={18} />
        </div>
      </div>
    </section>
  );
}