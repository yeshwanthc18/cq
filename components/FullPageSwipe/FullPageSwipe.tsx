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
import styles from "./FullPageSwipe.module.css";

const projects = [
  { title: "Dark Ocean", subtitle: "Immersive underwater journey", img: "/images/do-homepage.png" },
  { title: "Dekriminators", subtitle: "Pest Control Services", img: "/images/dekriminator-home.png" },
  { title: "Mark Comprehensive", subtitle: "Specialized facade solutions", img: "/images/mark-com.png" },
  { title: "Jes", subtitle: "", img: "/images/jes-ai.png" },
  { title: "Elmmetric", subtitle: "AI Invoices", img: "/images/elmmetric.png" },
  { title: "Liabify", subtitle: "", img: "/images/liabify.png" },
];

const SLIDE = 0.6;
const DWELL = 2.0;

function totalUnits(n: number) {
  return n * (DWELL + SLIDE) + SLIDE;
}

// ─────────────────────────────────────────
// CARD (all motion logic lives here ✅)
// ─────────────────────────────────────────
function ProjectCard({
  project,
  idx,
  cardCount,
  scrollYProgress,
}: {
  project: (typeof projects)[number];
  idx: number;
  cardCount: number;
  scrollYProgress: MotionValue<number>;
}) {
  const total = totalUnits(cardCount);

  const enterStart = (idx * (DWELL + SLIDE)) / total;
  const enterEnd = (idx * (DWELL + SLIDE) + SLIDE) / total;
  const exitStart =
    (idx * (DWELL + SLIDE) + SLIDE + DWELL) / total;
  const exitEnd = ((idx + 1) * (DWELL + SLIDE)) / total;

  const rawX = useTransform(
    scrollYProgress,
    [enterStart, enterEnd, exitStart, exitEnd],
    ["100vw", "0vw", "0vw", "-100vw"]
  );

  const x = useSpring(rawX, {
    stiffness: 60,
    damping: 18,
    mass: 0.6,
  });

  const opacity = useTransform(
    scrollYProgress,
    [enterStart, enterEnd, exitStart, exitEnd],
    [0, 1, 1, 0]
  );

  const scale = useTransform(
    scrollYProgress,
    [enterStart, enterEnd, exitStart, exitEnd],
    [0.97, 1, 1, 0.97]
  );

  // ✅ FIXED zIndex type
const zIndex = useTransform<number, number>(
  scrollYProgress,
  (v) => {
    if (v >= enterEnd && v <= exitStart) return 20;
    if (v >= enterStart && v <= exitEnd) return 10;
    return 1;
  }
);

  return (
    <motion.div
      className={styles.card}
      style={{ x, opacity, scale, zIndex }}
    >
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

      <div className={styles.overlay} />

      <div className={styles.content}>
        <span className={styles.counter}>
          {String(idx + 1).padStart(2, "0")} —{" "}
          {String(cardCount).padStart(2, "0")}
        </span>
        <h2 className={styles.title}>{project.title}</h2>
        <p className={styles.subtitle}>{project.subtitle}</p>
        <button className={styles.btn}>
          View project <span className={styles.arrow}>→</span>
        </button>
      </div>

      <div className={styles.dots}>
        {projects.map((_, i) => (
          <span
            key={i}
            className={styles.dot}
            style={{
              width: i === idx ? 22 : 5,
              opacity: i === idx ? 1 : 0.25,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}

// ─────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────
export default function FullPageSwipe() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const cardCount = projects.length;

  return (
    <div
      className={styles.outer}
      ref={containerRef}
      style={{
        height: `${totalUnits(cardCount) * 100}vh`,
      }}
    >
      <div className={styles.clip}>
        <div className={styles.sticky}>
          {projects.map((project, idx) => (
            <ProjectCard
              key={idx}
              project={project}
              idx={idx}
              cardCount={cardCount}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </div>
  );
}