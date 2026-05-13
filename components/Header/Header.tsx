"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import TopNav from "../UI/TopNav/TopNav";

const Header = () => {
  const headerRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    const scrollListener = () => handleScroll();
    window.addEventListener("scroll", scrollListener, { passive: true });

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className={`${styles.Header} ${scrolled ? styles.HeaderScrolled : ""}`}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
      }}
    >
      <div className={styles.HeaderInner}>
        <Link href="/" className={styles.Logo} aria-label="Home">
          <img
            src="/icons/cq-logo-full.png"
            alt="Crayon & Quill"
            width={40}
            height={40}
          />
        </Link>

        <TopNav />
      </div>
    </header>
  );
};

export default Header;
