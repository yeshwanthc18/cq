"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import styles from "./FullPageSwipe.module.css";

const projects = [
  {
    title: "Dark Ocean",
    subtitle: "Immersive Underwater Journey",
    img: "/images/do-homepage.png",
  },
  {
    title: "Neon Pulse",
    subtitle: "Cyberpunk Aesthetic",
    img: "/images/dekriminator-home.png",
  },
  {
    title: "Crystal Vision",
    subtitle: "Futuristic Design",
    img: "/images/reviewers/user3.jpg",
  },
];

export default function FullPageSwipe() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const cardCount = projects.length;

  // Smooth spring for index (optional)
  const rawIndex = useTransform(scrollYProgress, [0, 1], [0, cardCount - 0.99]);
  const activeIndex = useSpring(rawIndex, { stiffness: 150, damping: 25 });

  return (
    <div className={styles.outer} ref={containerRef}>
      {projects.map((project, idx) => {
        // Each card gets a scroll window
        const start = idx / cardCount;
        const mid = (idx + 0.5) / cardCount;
        const end = (idx + 1) / cardCount;

        const progress = useTransform(scrollYProgress, [start, mid, end], [0, 1, 2]);

        // X: 0 → -100% (off left), 1 → 0% (center), 2 → 100% (off right)
        const x = useTransform(progress, [0, 1, 2], ["-100%", "0%", "100%"]);
        // Scale: slightly zoom when centered, but never exceed viewport
        const scale = useTransform(progress, [0, 1, 2], [0.85, 1, 0.85]);
        // Opacity: fade in/out
        const opacity = useTransform(progress, [0, 0.2, 0.8, 2], [0, 1, 1, 0]);
        // Blur sharp only at center
        const blur = useTransform(progress, [0, 1, 2], ["6px", "0px", "6px"]);
        // Z‑index: active card on top
        const zIndex = useTransform(progress, [0.5, 1, 1.5], [5, 20, 5]);

        return (
          <motion.div
            key={idx}
            className={styles.card}
            style={{
              x,
              scale,
              opacity,
              filter: `blur(${blur})`,
              zIndex,
            }}
            transition={{ duration: 0.15 }} // smooth but responsive
          >
            {/* Full‑screen background image */}
            <Image
              src={project.img}
              alt={project.title}
              fill
              className={styles.bgImage}
              priority={idx === 0}
              unoptimized
            />
            <div className={styles.overlay} />

            {/* Content card – always centered, never cut off */}
            <div className={styles.content}>
              <span className={styles.index}>
                {(idx + 1).toString().padStart(2, "0")} / {cardCount}
              </span>
              <h2>{project.title}</h2>
              <p>{project.subtitle}</p>
              <button className={styles.exploreBtn}>
                Explore <span>→</span>
              </button>
            </div>
          </motion.div>
        );
      })}

      {/* Scroll progress bar (optional) */}
      <div className={styles.progressBar}>
        <motion.div
          className={styles.progressFill}
          style={{ scaleX: scrollYProgress }}
        />
      </div>
    </div>
  );
}