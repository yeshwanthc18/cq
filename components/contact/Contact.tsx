'use client';

import { useEffect, useRef, useState } from 'react';
import HeroSection from './HeroSection';
import FormSection from './FormSection';
import './globals.css';

export default function Contact() {
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
      className={`contact-page${visible ? ' visible' : ''}`}
    >
      <HeroSection />
      <FormSection />
    </main>
  );
}
