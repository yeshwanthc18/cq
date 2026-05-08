"use client";

import { useEffect, useRef, useState } from "react";
import HeroSection from "./HeroSection";
import ProblemSection from "./ProblemSection";
import ServicesPreview from "./ServicesPreview";
import ThreePillarSection from "./ThreePillarSection";
import GoalsSection from "./GoalsSection";
import WhyChooseSection from "./WhyChooseSection";
import ProcessSection from "./ProcessSection";
import CTASection from "./CTASection";
import "./globals.css";
import FullPageSwipe from "../FullPageSwipe/FullPageSwipe";

export default function HomeMain() {
  const containerRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.08 },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <main
      ref={containerRef}
      className={`home-page${visible ? " visible" : ""}`}
    >
      <HeroSection />
  
    </main>
  );
}
