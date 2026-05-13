"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Hamburger from "hamburger-react";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import styles from "./TopNav.module.css";

const navLinks = [
  { path: "/about", label: "About" },
  { path: "/services", label: "Services" },
  { path: "/projects", label: "Projects" },
  { path: "/contact", label: "Contact" },
];

const TopNav = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isPhoneScreen, setIsPhoneScreen] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const checkPhoneScreen = () => {
      setIsPhoneScreen(window.innerWidth < 769);
    };

    checkPhoneScreen();
    window.addEventListener("resize", checkPhoneScreen);
    return () => window.removeEventListener("resize", checkPhoneScreen);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleToggle = (toggled: boolean) => {
    setIsOpen(toggled);
  };

  if (!isMounted) {
    return null;
  }

  return (
    <>
      {/* =========================
          DESKTOP NAV
      ========================== */}
      <nav className={styles.Nav}>
        <ul>
          {navLinks.map((item) => (
            <li key={item.path}>
              <a href={item.path}>{item.label}</a>
            </li>
          ))}
        </ul>
        <a href="/contact" className={styles.cta}>
          Start Project
          <ArrowUpRight size={16} />
        </a>
      </nav>

      {/* =========================
          MOBILE HAMBURGER BUTTON
      ========================== */}
      <button
        className={styles.MobileHamburger}
        onClick={() => handleToggle(!isOpen)}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <Hamburger
          toggled={isOpen}
          size={24}
          rounded
          duration={0.4}
          color="#ffffff"
        />
      </button>

      {/* =========================
          MOBILE MENU
      ========================== */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.MobileMenu}
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Background Glow Effects */}
            <div className={styles.glow1} />
            <div className={styles.glow2} />

            {/* Menu Content */}
            <div className={styles.MobileMenuInner}>
              <ul className={styles.MobileLinks}>
                {navLinks.map((item, index) => (
                  <motion.li
                    key={item.path}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 }}
                  >
                    <a
                      href={item.path}
                      onClick={() => setIsOpen(false)}
                    >
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                className={styles.MobileBottom}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <a
                  href="/contact"
                  className={styles.MobileCTA}
                  onClick={() => setIsOpen(false)}
                >
                  <span>Let&apos;s Build Something</span>
                  <ArrowUpRight size={18} />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default TopNav;
