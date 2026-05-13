"use client";

import "./styles/why-choose.css";

const reasons = [
  {
    id: 1,
    title: "Clicks to Connections",
    description:
      "We're not chasing traffic. We're building relationships that compound.",
  },
  {
    id: 2,
    title: "Story + Performance",
    description: "Creative that earns attention — then earns revenue.",
  },
  {
    id: 3,
    title: "Full-Funnel Thinking",
    description:
      "From the first impression to the fifth purchase — we think in systems.",
  },
  {
    id: 4,
    title: "Data-Led Decisions",
    description: "No gut calls. Every move is measured, every result is owned.",
  },
  {
    id: 5,
    title: "Lean Execution",
    description:
      "Less overhead, more output. We move fast because we&apos;re built that way.",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="why-choose">
      <div className="why-choose__grid-bg" />
      <div className="why-choose__noise" />

      <div className="why-choose__header">
        <p className="section-label">Why Choose Us</p>

        <h2 className="why-choose__title">
          Why Brands Choose <em>Crayon & Quill</em>
        </h2>

        <p className="why-choose__subtitle">
          Most agencies specialize in one thing. We specialize in making
          everything work together.
        </p>
      </div>

      <div className="why-choose__grid">
        {reasons.map((reason, idx) => (
          <article
            key={reason.id}
            className={`why-card fade-in-up stagger-${(idx % 5) + 1}`}
          >
            <div className="why-card__number">0{reason.id}</div>

            <div className="why-card__content">
              <h3 className="why-card__title">{reason.title}</h3>

              <p className="why-card__description">{reason.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
