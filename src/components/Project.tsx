
import { useRef } from "react";
import { Link, useParams } from "react-router";
import { FiArrowLeft, FiArrowUpRight, FiGithub } from "react-icons/fi";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { projects } from "../data/projects";
import "../ProjectDetails.css";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function revealChars(text: string) {
  return Array.from(text).map((char, index) => (
    <span className="reveal-char" aria-hidden="true" key={index}>
      {char === " " ? "\u00A0" : char}
    </span>
  ));
}

export default function Project() {
  const { slug } = useParams<{ slug: string }>();
  const rootRef = useRef<HTMLElement>(null);

  const project = projects.find((item) => item.slug === slug);

  const currentIndex = project
    ? projects.findIndex((item) => item.slug === project.slug)
    : -1;

  const otherProjects = projects.filter(
    (item) => item.slug !== project?.slug
  );

  useGSAP(
    () => {
      if (!project || !rootRef.current) return;

      const root = rootRef.current;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) {
        gsap.set(root.querySelectorAll(".reveal-char"), {
          opacity: 1,
          clearProps: "all",
        });
        return;
      }

      // Initial page opening animation.
      const openingTimeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      openingTimeline
        .from(".detail-header", {
          autoAlpha: 0,
          y: -20,
          duration: 0.7,
        })
        .from(
          ".detail-hero-top > *",
          {
            autoAlpha: 0,
            y: 18,
            duration: 0.65,
            stagger: 0.12,
          },
          "-=0.35"
        )
        .fromTo(
          ".detail-title .reveal-char",
          {
            autoAlpha: 0,
            y: 65,
            rotateX: -45,
          },
          {
            autoAlpha: 1,
            y: 0,
            rotateX: 0,
            duration: 0.85,
            stagger: 0.035,
            ease: "power4.out",
          },
          "-=0.2"
        )
        .from(
          ".detail-hero-bottom > *",
          {
            autoAlpha: 0,
            y: 25,
            duration: 0.8,
            stagger: 0.15,
          },
          "-=0.35"
        )
        .fromTo(
          ".detail-hero-image",
          {
            autoAlpha: 0,
            clipPath: "inset(0 0 100% 0)",
            y: 35,
          },
          {
            autoAlpha: 1,
            clipPath: "inset(0 0 0% 0)",
            y: 0,
            duration: 1.2,
            ease: "power4.inOut",
          },
          "-=0.25"
        )
        .fromTo(
          ".detail-hero-image img",
          {
            scale: 1.12,
          },
          {
            scale: 1,
            duration: 1.5,
            ease: "power3.out",
          },
          "<"
        );

      // Scroll-triggered reveals for the remaining content.
      const revealElements =
        root.querySelectorAll<HTMLElement>(".detail-reveal");

      revealElements.forEach((element) => {
        gsap.fromTo(
          element,
          {
            autoAlpha: 0,
            y: 30,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Secondary images reveal as they enter the viewport.
      const imageElements =
        root.querySelectorAll<HTMLElement>(".detail-image-reveal");

      imageElements.forEach((element) => {
        gsap.fromTo(
          element,
          {
            autoAlpha: 0,
            y: 35,
            scale: 0.96,
          },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Oversized headings: left-to-right opacity reveal.
      const textHeadings =
        root.querySelectorAll<HTMLElement>(".text-scroll-reveal");

      textHeadings.forEach((heading) => {
        const characters =
          heading.querySelectorAll<HTMLElement>(".reveal-char");

        if (!characters.length) return;

        gsap.set(characters, { opacity: 0.14 });

        gsap.to(characters, {
          opacity: 1,
          ease: "none",
          stagger: {
            each: 0.025,
          },
          scrollTrigger: {
            trigger: heading,
            start: "top 82%",
            end: "bottom 42%",
            scrub: 0.7,
          },
        });
      });

      // More-projects cards reveal in sequence.
      const projectCards =
        root.querySelectorAll<HTMLElement>(".other-project-card");

      projectCards.forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            autoAlpha: 0,
            y: 45,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            delay: (index % 2) * 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    },
    {
      scope: rootRef,
      dependencies: [project?.slug],
      revertOnUpdate: true,
    }
  );

  if (!project) {
    return (
      <main className="project-not-found">
        <span>404 — NOT FOUND</span>
        <h1>Lost in space.</h1>
        <Link to="/#projects">
          <FiArrowLeft /> Back to projects
        </Link>
      </main>
    );
  }

  return (
    <main className="project-detail" ref={rootRef}>
      <div className="detail-ambient" aria-hidden="true">
        <span className="ambient-orb ambient-orb-one" />
        <span className="ambient-orb ambient-orb-two" />
        <span className="ambient-orb ambient-orb-three" />
        <span className="ambient-grid" />
      </div>

      {/* Header */}
      <header className="detail-header">
        <Link to="/#projects" className="detail-back">
          <FiArrowLeft />
          <span>BACK TO WORK</span>
        </Link>

        <span className="detail-counter">
          PROJECT / {String(currentIndex + 1).padStart(2, "0")}
        </span>
      </header>

      {/* Hero */}
      <section className="detail-hero">
        <div className="detail-hero-top">
          <span className="detail-category">
            {project.category}
          </span>

          <span className="detail-year">
            SELECTED WORK
          </span>
        </div>

        <h1
          className="detail-title"
          aria-label={project.title}
        >
          {revealChars(project.title)}
        </h1>

        <div className="detail-hero-bottom">
          <p className="detail-description">
            {project.description}
          </p>

          <a
            href="#project-showcase"
            className="detail-explore"
          >
            EXPLORE PROJECT
            <FiArrowUpRight />
          </a>
        </div>

        <div
          className="detail-hero-image"
          id="project-showcase"
        >
          <img
            src={project.image}
            alt={`${project.title} project preview`}
          />

          <span className="image-corner-label">
            {String(currentIndex + 1).padStart(2, "0")} / PROJECT PREVIEW
          </span>
        </div>
      </section>

      {/* Project information */}
      <section className="detail-meta">
        <div className="detail-meta-item detail-reveal">
          <span>ROLE</span>
          <p>{project.role}</p>
        </div>

        <div className="detail-meta-item detail-reveal">
          <span>CLIENT</span>
          <p>{project.client?.trim() || "Independent project"}</p>
        </div>

        <div className="detail-meta-item detail-meta-tech detail-reveal">
          <span>BUILT WITH</span>
          <p>{project.tech.join(" · ")}</p>
        </div>
      </section>

      {/* Features */}
      <section className="detail-features">
        <div className="detail-section-heading">
          <span className="detail-reveal">THE EXPERIENCE</span>

          <h2
            className="text-scroll-reveal"
            aria-label="Made to work."
          >
            {revealChars("Made to ")}
            <em>{revealChars("work.")}</em>
          </h2>
        </div>

        {project.screenshots.length > 0 ? (
          <div className="detail-showcase">
            {project.screenshots.map((screenshot, index) => (
              <div className="showcase-item" key={screenshot}>
                <div className="showcase-image detail-image-reveal">
                  <img
                    src={screenshot}
                    alt={`${project.title} interface ${index + 1}`}
                    loading="lazy"
                  />

                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {project.features[index] && (
                  <p className="showcase-caption detail-reveal">
                    {project.features[index]}
                  </p>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="detail-feature-list">
            {project.features.map((feature, index) => (
              <div className="detail-feature detail-reveal" key={feature}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{feature}</h3>
                <FiArrowUpRight />
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Technology */}
      <section className="detail-stack">
        <div>
          <span className="detail-stack-label detail-reveal">
            THE TOOLKIT
          </span>

          <h2
            className="text-scroll-reveal"
            aria-label="The right tools."
          >
            {revealChars("The right")}
            <br />
            <em>{revealChars("tools.")}</em>
          </h2>
        </div>

        <div className="detail-stack-list">
          {project.tech.map((technology, index) => (
            <span className="detail-reveal" key={technology}>
              <small>{String(index + 1).padStart(2, "0")}</small>
              {technology}
            </span>
          ))}
        </div>
      </section>

      {/* Project links */}
      <section className="detail-visit">
        <span className="detail-reveal">WANT TO SEE MORE?</span>

        <h2
          className="text-scroll-reveal"
          aria-label="Take a closer look."
        >
          {revealChars("Take a")}
          <br />
         <em> {revealChars("closer look.")}</em>
        </h2>

        <div className="detail-visit-links">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="detail-visit-link detail-reveal"
            >
              LIVE PROJECT <FiArrowUpRight />
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="detail-visit-link detail-reveal"
            >
              <FiGithub /> SOURCE CODE <FiArrowUpRight />
            </a>
          )}

          {!project.demo && !project.github && (
            <p className="detail-reveal">
              Project links are currently unavailable.
            </p>
          )}
        </div>
      </section>

      {/* More projects */}
      {otherProjects.length > 0 && (
        <section className="detail-more-projects">
          <div className="more-projects-heading">
            <div>
              <span className="detail-reveal">KEEP EXPLORING</span>
              <h2 className="text-scroll-reveal">
                {revealChars("More")}
                <br />
                <em>{revealChars("projects.")}</em>
              </h2>
            </div>

            <span className="more-projects-count detail-reveal">
              {String(otherProjects.length).padStart(2, "0")} PROJECTS
            </span>
          </div>

          <div className="other-projects-grid">
            {otherProjects.map((item, index) => (
              <Link
                to={`/projects/${item.slug}`}
                className="other-project-card"
                key={item.slug}
              >
                <div className="other-project-image">
                  <img
                    src={item.image}
                    alt={`${item.title} project preview`}
                    loading="lazy"
                  />

                  <span className="other-project-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="other-project-open">
                    <FiArrowUpRight />
                  </span>
                </div>

                <div className="other-project-info">
                  <div>
                    <span>{item.category}</span>
                    <h3>{item.title}</h3>
                  </div>

                  <FiArrowUpRight />
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
