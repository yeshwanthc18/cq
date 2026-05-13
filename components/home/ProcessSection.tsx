'use client';

import { useRef } from 'react';

import {
  motion,
  useScroll,
  useTransform,
} from 'framer-motion';

import {
  Search,
  Lightbulb,
  Rocket,
  RefreshCw,
} from 'lucide-react';

import './styles/process.css';

const steps = [
  {
    number: '01',
    title: 'Discover',
    icon: <Search size={22} strokeWidth={1.8} />,
    description:
      'We listen before we lead. Every engagement starts with understanding the real problem.',
  },
  {
    number: '02',
    title: 'Strategize',
    icon: <Lightbulb size={22} strokeWidth={1.8} />,
    description:
      'A clear roadmap aligning goals, messaging, channels, and measurable outcomes.',
  },
  {
    number: '03',
    title: 'Execute',
    icon: <Rocket size={22} strokeWidth={1.8} />,
    description:
      'Campaigns, content, funnels, and experiences working together as one system.',
  },
  {
    number: '04',
    title: 'Optimize',
    icon: <RefreshCw size={22} strokeWidth={1.8} />,
    description:
      'We continuously test, refine, and compound performance over time.',
  },
];

function ProcessCard({
  step,
  index,
}: {
  step: (typeof steps)[0];
  index: number;
}) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  });

  const rotate = useTransform(
    scrollYProgress,
    [0, 1],
    [-8, 0]
  );

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [80, 0]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 1],
    [0.3, 1]
  );

  return (
    <motion.article
      ref={ref}
      className={`process-card process-card--${index + 1}`}
      style={{
        rotate,
        y,
        opacity,
      }}
    >
      <div className="process-card__glow" />

      <div className="process-card__top">
        <div className="process-card__number">
          {step.number}
        </div>

        <div className="process-card__icon">
          {step.icon}
        </div>
      </div>

      <div className="process-card__content">
        <h3 className="process-card__title">
          {step.title}
        </h3>

        <p className="process-card__description">
          {step.description}
        </p>
      </div>

      <div className="process-card__line" />
    </motion.article>
  );
}

export default function ProcessSection() {
  return (
    <section className="process">
      <div className="process__spotlight" />
      <div className="process__grid-bg" />
      <div className="process__noise" />

      <div className="process__header">
        <p className="section-label">
          Our Process
        </p>

        <h2 className="process__title">
          Simple. Strategic.
          <em> Scalable.</em>
        </h2>

        <p className="process__subtitle">
          A structured process designed to
          create clarity, momentum, and measurable growth.
        </p>
      </div>

      <div className="process__timeline">
        {steps.map((step, index) => (
          <ProcessCard
            key={step.number}
            step={step}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}