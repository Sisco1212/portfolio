
import { useEffect, useState } from "react";
import {
  HiOutlineMenuAlt3,
  HiX,
} from "react-icons/hi";
import { FiArrowUpRight } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import "../Navbar.css";

const links = [
  { label: "Home", id: "home", number: "01" },
  { label: "About", id: "about", number: "02" },
  { label: "Services", id: "services", number: "03" },
  { label: "Projects", id: "projects", number: "04" },
  { label: "Credentials", id: "certifications", number: "05" },
  { label: "Contact", id: "contact", number: "06" },
];

const navbarVariants = {
  hidden: {
    y: -35,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1] as const,
      staggerChildren: 0.09,
      delayChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    y: -12,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  // =========================================
  // REDUCED MOTION PREFERENCE
  // =========================================

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    setReduceMotion(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setReduceMotion(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  // =========================================
  // ACTIVE SECTION DETECTION
  // =========================================

  useEffect(() => {
    const sections = links
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    const visibleSections = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSections.add(entry.target.id);
          } else {
            visibleSections.delete(entry.target.id);
          }
        });

        if (visibleSections.size === 0) return;

        const activationPoint = window.innerHeight * 0.4;

        const currentSection = [...visibleSections]
          .map((id) => {
            const element = document.getElementById(id);

            if (!element) return null;

            const rect = element.getBoundingClientRect();

            return {
              id,
              distance: Math.abs(rect.top - activationPoint),
            };
          })
          .filter(
            (
              item
            ): item is { id: string; distance: number } =>
              item !== null
          )
          .sort((a, b) => a.distance - b.distance)[0];

        if (currentSection) {
          setActive(currentSection.id);
        }
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
      visibleSections.clear();
    };
  }, []);

  // =========================================
  // MOBILE MENU
  // =========================================

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const handleNavigation = (id: string) => {
    setActive(id);
    setOpen(false);
  };

  return (
    <motion.nav
      className="site-navbar"
      variants={navbarVariants}
      initial={reduceMotion ? false : "hidden"}
      animate="visible"
    >
      <div className="navbar-inner">

        {/* WORDMARK */}

        <motion.a
          href="#home"
          className="navbar-brand"
          onClick={() => handleNavigation("home")}
          aria-label="Sito — Home"
          variants={itemVariants}
        >
          Sito<span>.</span>
        </motion.a>

        {/* DESKTOP NAVIGATION */}

        <motion.div
          className="navbar-links"
          variants={itemVariants}
        >
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => handleNavigation(link.id)}
              className={`navbar-link ${
                active === link.id ? "active" : ""
              }`}
              aria-current={
                active === link.id ? "location" : undefined
              }
            >
              {link.label}

              {active === link.id && (
                <motion.span
                  layoutId="navbar-active-indicator"
                  className="navbar-link-indicator"
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                  }}
                />
              )}
            </a>
          ))}
        </motion.div>

        {/* DESKTOP CTA */}

        <motion.a
          data-hero-action
          data-magnetic
          data-cursor="CONTACT"
          href="#contact"
          className="navbar-cta"
          onClick={() => handleNavigation("contact")}
          variants={itemVariants}
        >
          <span>Let's talk</span>
          <FiArrowUpRight />
        </motion.a>

        {/* MOBILE MENU BUTTON */}

        <motion.button
          type="button"
          className={`navbar-menu-button ${
            open ? "is-open" : ""
          }`}
          onClick={() => setOpen((previous) => !previous)}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          variants={itemVariants}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? "close" : "menu"}
              initial={{ opacity: 0, rotate: -45, scale: 0.7 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 45, scale: 0.7 }}
              transition={{ duration: 0.18 }}
            >
              {open ? <HiX /> : <HiOutlineMenuAlt3 />}
            </motion.span>
          </AnimatePresence>
        </motion.button>
      </div>

      {/* MOBILE NAVIGATION */}

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-navigation"
            className="mobile-navigation"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "100vh", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: {
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              },
              opacity: { duration: 0.25 },
            }}
          >
            <div className="mobile-navigation-inner">
              <div className="mobile-navigation-links">
                {links.map((link, index) => (
                  <motion.a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={() => handleNavigation(link.id)}
                    className={`mobile-navigation-link ${
                      active === link.id ? "active" : ""
                    }`}
                    initial={{
                      opacity: 0,
                      y: 18,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: 12,
                    }}
                    transition={{
                      duration: 0.35,
                      delay: index * 0.045,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <span className="mobile-link-number">
                      {link.number}
                    </span>

                    <span className="mobile-link-label">
                      {link.label}
                    </span>

                    <FiArrowUpRight className="mobile-link-arrow" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
