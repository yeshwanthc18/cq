'use client';

import { useEffect, useRef, useState } from 'react';
import HeroSection from './HeroSection';
import OverviewSection from './OverviewSection';
import ServicesGrid from './ServicesGrid';
import WhyUsSection from './WhyUsSection';
import ProcessSection from './ProcessSection';
import CTASection from './CTASection';
import './globals.css';

export default function Services() {
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
      className={`services-page${visible ? ' visible' : ''}`}
    >
      <HeroSection />
      <OverviewSection />
      <ServicesGrid />
      <WhyUsSection />
      <ProcessSection />
      <CTASection />
    </main>
  );
}
