"use client";

import Link from "next/link";

import { AnimatePresence, motion } from "framer-motion";

import Hamburger from "hamburger-react";

import { useEffect, useState } from "react";

import { ArrowUpRight } from "lucide-react";

import styles from "./TopNav.module.css";

import useIsPhoneScreen from "@/utils/hooks/useIsPhoneScreen";

const navLinks = [
  { path: "/about", label: "About" },
  { path: "/services", label: "Services" },
  { path: "/projects", label: "Projects" },
  { path: "/contact", label: "Contact" },
];

const TopNav = ({
  onHamburgerOpen,
}: {
  onHamburgerOpen: (isOpen: boolean) => void;
}) => {
  const isPhoneScreen = useIsPhoneScreen();

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen
      ? "hidden"
      : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleToggle = (toggled: boolean) => {
    setIsOpen(toggled);
    onHamburgerOpen(toggled);
  };

  return (
    <>
      {/* =========================
          DESKTOP
      ========================== */}

      {!isPhoneScreen && (
        <nav className={styles.Nav}>
          <ul>
            {navLinks.map((item) => (
              <li key={item.path}>
                <Link href={item.path}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            className={styles.cta}
          >
            Start Project
            <ArrowUpRight size={16} />
          </Link>
        </nav>
      )}

      {/* =========================
          MOBILE HAMBURGER
      ========================== */}

      {isPhoneScreen && (
        <div className={styles.MobileHamburger}>
          <Hamburger
            toggled={isOpen}
            toggle={handleToggle}
            size={24}
            rounded
            duration={0.4}
            color="#ffffff"
          />
        </div>
      )}

      {/* =========================
          MOBILE MENU
      ========================== */}

      <AnimatePresence>
        {isPhoneScreen && isOpen && (
          <motion.div
            className={styles.MobileMenu}
            initial={{
              opacity: 0,
              y: "-100%",
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: "-100%",
            }}
            transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* Background Glow */}
            <div className={styles.glow1} />
            <div className={styles.glow2} />

            {/* Menu Links */}
            <div className={styles.MobileMenuInner}>
              <ul className={styles.MobileLinks}>
                {navLinks.map((item, index) => (
                  <motion.li
                    key={item.path}
                    initial={{
                      opacity: 0,
                      y: 40,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: index * 0.08,
                    }}
                  >
                    <Link
                      href={item.path}
                      onClick={() => setIsOpen(false)}
                    >
                      <span>
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                className={styles.MobileBottom}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.4,
                }}
              >
                <Link
                  href="/contact"
                  className={styles.MobileCTA}
                  onClick={() => setIsOpen(false)}
                >
                  <span>Let&apos;s Build Something</span>

                  <ArrowUpRight size={18} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default TopNav;