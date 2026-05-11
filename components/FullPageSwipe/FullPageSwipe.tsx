"use client";

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import styles from "./FullPageSwipe.module.css";

const projects = [
  {
    title: "Dark Ocean",
    subtitle:
      "Advanced offshore geo-intelligence platform combining AI, hydrography, robotics, seismic mapping, and marine survey technologies for next-generation ocean exploration.",
    img: "/images/do-homepage.png",
    link: "https://darkocean.biz/",
    category: "AI • Marine Intelligence",
  },
  {
    title: "Dekriminators",
    subtitle:
      "Technology-driven pest management company delivering environmentally responsible, data-backed, and large-scale pest control solutions for businesses and homes.",
    img: "/images/dekriminators.png",
    link: "https://dekriminators.com/",
    category: "Smart Pest Management",
  },
  {
    title: "Mark Comprehensive",
    subtitle:
      "Facade engineering and architectural solutions company specializing in precision-driven exterior systems and modern infrastructure execution.",
    img: "/images/mark-com.png",
    link: "https://markcomprehensive.com/",
    category: "Architecture • Facade",
  },
  {
    title: "Jes AI",
    subtitle:
      "AI-powered workflow platform built to streamline productivity, automate business operations, and enhance intelligent digital experiences.",
    img: "/images/jes-ai.png",
    link: "https://jes-ai.com/",
    category: "Artificial Intelligence",
  },
  {
    title: "Elmmetric",
    subtitle:
      "Modern AI invoicing and financial operations platform designed for scalable automation, analytics, and intelligent business management.",
    img: "/images/elmmetric.png",
    link: "https://elmmetric.com/",
    category: "FinTech • SaaS",
  },
  {
    title: "Evologic Tech",
    subtitle:
      "Innovation-focused technology company delivering scalable digital products, software systems, and modern engineering solutions for growing businesses.",
    img: "/images/evologictech.png",
    link: "https://evologictech.com/",
    category: "Technology Solutions",
  },
  {
    title: "Liabify",
    subtitle:
      "Legal-tech platform simplifying compliance, liability workflows, and intelligent legal documentation through modern digital infrastructure.",
    img: "/images/liabify.png",
    link: "https://liabify.com/",
    category: "Legal Tech",
  },
];

const SLIDE = 0.6;
const DWELL = 2.0;

function totalUnits(n: number) {
  return n * (DWELL + SLIDE) + SLIDE;
}

/* =========================================================
   PROJECT CARD
   Receives the single smoothed MotionValue from the parent.
   No spring created here — just transforms.
========================================================= */
function ProjectCard({
  project,
  idx,
  cardCount,
  smoothProgress,
}: {
  project: (typeof projects)[number];
  idx: number;
  cardCount: number;
  smoothProgress: MotionValue<number>;
}) {
  const total = totalUnits(cardCount);

  const enterStart = (idx * (DWELL + SLIDE)) / total;
  const enterEnd   = (idx * (DWELL + SLIDE) + SLIDE) / total;
  const exitStart  = (idx * (DWELL + SLIDE) + SLIDE + DWELL) / total;
  const exitEnd    = ((idx + 1) * (DWELL + SLIDE)) / total;

  const x = useTransform(
    smoothProgress,
    [enterStart, enterEnd, exitStart, exitEnd],
    ["100vw", "0vw", "0vw", "-100vw"]
  );

  const opacity = useTransform(
    smoothProgress,
    [enterStart, enterEnd, exitStart, exitEnd],
    [0, 1, 1, 0]
  );

  const scale = useTransform(
    smoothProgress,
    [enterStart, enterEnd, exitStart, exitEnd],
    [0.96, 1, 1, 0.96]
  );

  const zIndex = useTransform(smoothProgress, (v: number): number => {
    if (v >= enterEnd && v <= exitStart) return 20;
    if (v >= enterStart && v <= exitEnd) return 10;
    return 1;
  });

  return (
    <motion.div
      className={styles.card}
      style={{ x, opacity, scale, zIndex }}
    >
      {/* Image */}
      <div className={styles.imgWrap}>
        <Image
          src={project.img}
          alt={project.title}
          fill
          className={styles.bg}
          priority={idx === 0}
          unoptimized
        />
      </div>

      {/* Overlay */}
      <div className={styles.overlay} />

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.top}>
          <span className={styles.category}>{project.category}</span>
          <span className={styles.counter}>
            {String(idx + 1).padStart(2, "0")} /{" "}
            {String(cardCount).padStart(2, "0")}
          </span>
        </div>

        <div className={styles.textContent}>
          <h2 className={styles.title}>{project.title}</h2>
          <p className={styles.subtitle}>{project.subtitle}</p>
        </div>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.btn}
        >
          <span>View Project</span>
          <ArrowUpRight size={18} />
        </a>
      </div>

      {/* Dots */}
      <div className={styles.dots}>
        {projects.map((_, i) => (
          <span
            key={i}
            className={styles.dot}
            style={{
              width: i === idx ? 24 : 6,
              opacity: i === idx ? 1 : 0.3,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}

/* =========================================================
   MAIN COMPONENT
   ONE spring created here, shared across all cards.
========================================================= */
export default function FullPageSwipe() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // ✅ Spring created ONCE here — all cards share this single smoothed value
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    mass: 0.5,
  });

  const cardCount = projects.length;

  return (
    <section className={styles.section}>
      <div
        className={styles.outer}
        ref={containerRef}
        style={{ height: `${totalUnits(cardCount) * 100}vh` }}
      >
        <div className={styles.clip}>
          <div className={styles.sticky}>
            {projects.map((project, idx) => (
              <ProjectCard
                key={idx}
                project={project}
                idx={idx}
                cardCount={cardCount}
                smoothProgress={smoothProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}