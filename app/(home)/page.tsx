import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import styles from "./HomePage.module.css";

const HomePage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothSpring = { stiffness: 100, damping: 25, mass: 0.5 };
  const elasticSpring = { stiffness: 150, damping: 20, mass: 0.8 };

  // Hero exit (0 to 0.35)
  const heroExit = useTransform(scrollYProgress, [0, 0.35], [0, 1]);
  const textLeft = useSpring(useTransform(heroExit, [0, 1], ["0%", "-120%"]), smoothSpring);
  const textRight = useSpring(useTransform(heroExit, [0, 1], ["0%", "120%"]), smoothSpring);
  const heroOpacity = useSpring(useTransform(heroExit, [0, 0.8], [1, 0]), smoothSpring);
  const heroBlur = useSpring(useTransform(heroExit, [0, 1], [0, 8]), smoothSpring);

  // Circle (0.25 to 0.6)
  const circleProgress = useTransform(scrollYProgress, [0.25, 0.6], [0, 1]);
  const circleScale = useSpring(useTransform(circleProgress, [0, 0.5, 1], [0.3, 1.2, 5]), elasticSpring);
  const circleOpacity = useSpring(useTransform(circleProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]), smoothSpring);

  // Content entrance (0.5 to 1)
  const contentProgress = useTransform(scrollYProgress, [0.5, 1], [0, 1]);
  const contentOpacity = useSpring(useTransform(contentProgress, [0, 0.2, 1], [0, 0, 1]), smoothSpring);
  const contentY = useSpring(useTransform(contentProgress, [0, 1], [60, 0]), smoothSpring);

  return (
    <div className={styles["home-page-container"]} ref={containerRef}>
      
      {/* HERO SECTION - Fixed */}
      <motion.div 
        className={styles["hero-section"]}
        style={{
          opacity: heroOpacity,
          filter: `blur(${heroBlur}px)`,
        }}
      >
        <div className={styles["video-background"]}>
          <video autoPlay loop muted playsInline className={styles["video"]}>
            <source src="/videos/bg-video2.mp4" type="video/mp4" />
          </video>
          <div className={styles["gradient-overlay"]} />
        </div>

        <div className={styles["hero-content"]}>
          <motion.div style={{ x: textLeft }}>
            <h1 className={styles["hero-title"]}>
              Timeless Marketing<span className={styles["blue-dot"]}>.</span>
            </h1>
          </motion.div>
          <motion.div style={{ x: textRight }}>
            <h1 className={styles["hero-title"]}>
              Bold Impact<span className={styles["blue-dot"]}>.</span>
            </h1>
          </motion.div>
          
          <motion.p
            className={styles["hero-subtitle"]}
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
          >
            Crafting narratives that transcend time
          </motion.p>

          <motion.div
            className={styles["scroll-hint"]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <div className={styles["scroll-arrow"]}>↓</div>
            <span>Scroll to explore</span>
          </motion.div>
        </div>
      </motion.div>

      {/* EXPANDING CIRCLE - Temporary overlay */}
      <motion.div
        className={styles["circle-overlay"]}
        style={{
          opacity: circleOpacity,
          pointerEvents: "none",
        }}
      >
        <motion.div
          className={styles["expanding-circle"]}
          style={{
            scale: circleScale,
          }}
        />
      </motion.div>

      {/* MAIN CONTENT - Scrolls normally, no cutting */}
      <motion.div 
        className={styles["content-wrapper"]}
        style={{
          opacity: contentOpacity,
          transform: `translateY(${contentY}px)`,
        }}
      >
  
      </motion.div>
    </div>
  );
};

export default HomePage;