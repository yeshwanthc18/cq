"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

import TopNav from "../UI/TopNav/TopNav";

import styles from "./Header.module.css";

import { usePageLoaderStore } from "@/utils/hooks/usePageLoader";

const Header = () => {
  const { isPageLoaded } = usePageLoaderStore();

  const headerRef = useRef<HTMLElement>(null);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className={`${styles.Header} ${
        scrolled ? styles.HeaderScrolled : ""
      }`}
      style={
        isPageLoaded
          ? {
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
            }
          : {}
      }
    >
      <div className={styles.HeaderInner}>
        <Link href="/" className={styles.Logo}>
          <img
            src="/icons/cq-logo-full.png"
            alt="Crayon & Quill"
          />
        </Link>

        <TopNav onHamburgerOpen={(_) => {}} />
      </div>
    </header>
  );
};

export default Header;