"use client";
import { useEffect, useRef } from "react";
import "./styles/process.css";

const steps = [
  {
    number: "01",
    title: "Discover & Decode",
    description:
      "We understand your brand, audience, and growth gaps through research and strategy.",
  },
  {
    number: "02",
    title: "Strategy & Story",
    description:
      "We craft a unified strategy combining messaging, channels, and brand narrative.",
  },
  {
    number: "03",
    title: "Execute & Launch",
    description:
      "Campaigns, content, and funnels are activated with precision and alignment.",
  },
  {
    number: "04",
    title: "Optimize & Scale",
    description:
      "We continuously refine performance and double down on what works best.",
  },
];

export default function ProcessSection() {
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    stepRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="services-section process">
      <div className="max-w">
        <h2 className="section-label">How We Work</h2>
        <h3 className="section-title">Our Process</h3>
        <p className="section-subtitle">
          Clear. Collaborative. Built for growth.
        </p>

        <div className="process-timeline mt-lg">
          {steps.map((step, index) => (
            <div
              key={index}
              className="process-step"
              ref={(el) => {
                stepRefs.current[index] = el;
              }}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className="step-number">{step.number}</div>

              <div className="step-content">
                <h4 className="step-title">{step.title}</h4>
                <p className="step-description">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="step-divider" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}