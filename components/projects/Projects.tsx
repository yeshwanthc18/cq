'use client';

import { useEffect, useRef, useState } from 'react';
import HeroSection from './HeroSection';
import ProjectsGrid from './ProjectsGrid';
import CTASection from './CTASection';
import './globals.css';

export default function Projects() {
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
      className={`projects-page${visible ? ' visible' : ''}`}
    >
      <HeroSection />
      <ProjectsGrid />
      <CTASection />
    </main>
  );
}
