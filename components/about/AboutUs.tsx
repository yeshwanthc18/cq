'use client';

import { useEffect, useRef, useState } from 'react';
import HeroSection from './HeroSection';
import StatsSection from './StatsSection';
import StorySection from './StorySection';
import ValuesSection from './ValuesSection';
import WhyUsSection from './WhyUsSection';
import CTASection from './CTASection';
import './globals.css';
import TeamSection from './TeamSection';

export default function AboutUs() {
  const containerRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

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

  return (
    <main
      ref={containerRef}
      className={`about-page${visible ? ' visible' : ''}`}
    >
      <HeroSection />
      <StatsSection />
      <StorySection />
      <ValuesSection />
      <TeamSection />
      <WhyUsSection />
      <CTASection />
    </main>
  );
}
