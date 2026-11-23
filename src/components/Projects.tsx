
import { useRef } from "react";
import { Link } from "react-router";
import { FiArrowUpRight } from "react-icons/fi";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { projects } from "../data/projects";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const featuredSlugs = [
  "subverse",
  "animatrix",
  "barbershop",
  "agrovest",
  "the-fall",
  "quizyn",
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  const featuredProjects = featuredSlugs
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter((project) => project !== undefined);

  const moreProjects = projects.filter(
    (project) => !featuredSlugs.includes(project.slug)
  );

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      // Respect reduced-motion preferences
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
       // =========================================
// SECTION INTRODUCTION
// =========================================

const introTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".projects-intro",
    start: "top 72%",
    once: true,
  },
});

introTimeline
  .from(".projects-intro .topline", {
    y: 20,
    opacity: 0,
    duration: 0.7,
    ease: "power3.out",
  })
  .from(
    ".projects-intro h2",
    {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    },
    "-=0.2"
  )
  .from(
    ".projects-intro > div:last-child > p",
    {
      y: 25,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    },
    "-=0.65"
  );

        const featured = gsap.utils.toArray<HTMLElement>(
          ".featured-project",
          section
        );

        // =========================================
        // FEATURED PROJECT REVEALS
        // =========================================

        featured.forEach((project) => {
          const image = project.querySelector(".project-image");
          const content = project.querySelector(".project-content");

          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: project,
              start: "top 68%",
              once: true,
            },
          });

          if (image) {
            timeline.fromTo(
              image,
              {
                clipPath: "inset(12% 0 12% 0)",
                scale: 1.08,
              },
              {
                clipPath: "inset(0% 0 0% 0)",
                scale: 1,
                duration: 1.4,
                ease: "power3.out",
              },
              0
            );
          }

          if (content) {
            timeline.from(
              content,
              {
                y: 48,
                opacity: 0,
                duration: 1.05,
                ease: "power3.out",
              },
              0.2
            );
          }
        });

        // =========================================
        // PINNED PROJECT STACKING
        // =========================================

        featured.forEach((project, index) => {
          const nextProject = featured[index + 1];

          const card = project.querySelector<HTMLElement>(
            ".featured-project-card"
          );

          if (!nextProject || !card) return;

          gsap.to(card, {
            scale: 0.94,
            y: 8,
            opacity: 0,
            ease: "none",
            scrollTrigger: {
              trigger: nextProject,
              start: "top bottom",
              end: "top top+=110",
              scrub: 0.6,
              invalidateOnRefresh: true,
            },
          });
        });

       // =========================================
// MORE PROJECTS REVEAL
// =========================================

const moreTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".more-projects",
    start: "top 72%",
    once: true,
  },
});

moreTimeline
  .from(
    ".more-projects > div:first-child > div > div",
    {
      y: 20,
      opacity: 0,
      duration: 0.7,
      ease: "power3.out",
    }
  )
  .from(
    ".more-projects > div:first-child h3",
    {
      y: 45,
      opacity: 0,
      duration: 0.95,
      ease: "power3.out",
    },
    "-=0.35"
  )
  .from(
    ".more-projects > div:first-child > p",
    {
      y: 25,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    },
    "-=0.55"
  )
  .from(
    ".more-project",
    {
      y: 42,
      opacity: 0,
      duration: 0.85,
      stagger: 0.14,
      ease: "power3.out",
    },
    "-=0.2"
  );
      });


// =========================================
// PROJECTS CLOSING REVEAL
// =========================================

const closingTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".projects-closing",
    start: "top 78%",
    once: true,
  },
});

// Prepare the top border for its reveal.
closingTimeline.from(
  ".projects-closing",
  {
    "--closing-reveal": 0,
    duration: 0.9,
    ease: "power2.out",
  },
  0
);

// Statement enters first.
closingTimeline.from(
  ".projects-closing > p",
  {
    y: 45,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  },
  0.15
);

// CTA follows with a horizontal entrance.
closingTimeline.from(
  ".projects-closing > a",
  {
    x: 35,
    opacity: 0,
    duration: 0.9,
    ease: "power3.out",
  },
  0.4
);


    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="projects-section"
    >
      <div className="w-full mx-auto">
        {/* INTRO */}
        <div className="section-padding projects-intro relative pb-14 md:pb-10">
          <div className="topline">
            <p className="section-eyebrow">Selected works</p>
            <span className="about-index">03 / 05</span>
          </div>

          <div className="mt-10">
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold uppercase leading-[0.95] tracking-tighter">
              Ideas into
              <br />
              <span className="gradient-text">experiences.</span>
            </h2>

            <p className="mt-8 max-w-lg text-gray-400 text-base md:text-lg leading-relaxed">
              A selection of projects, experiments and digital
              experiences shaped by curiosity, design and code.
            </p>
          </div>
        </div>

        {/* FEATURED PROJECTS */}
        <div className="featured-projects mt-16 md:mt-5 px-8">
          {featuredProjects.map((project, index) => (
            <article
              key={project.id}
              className="featured-project"
              style={{ zIndex: index + 1 }}
            >
              <div className="featured-project-card">
                {/* PROJECT IMAGE */}
                <Link
                  to={`/projects/${project.slug}`}
                  data-cursor="VIEW"
                  aria-label={`View ${project.title} project`}
                  className="project-visual group relative block"
                >
                  <img
                    src={project.image}
                    alt={`${project.title} project preview`}
                    loading="lazy"
                    className="project-image"
                  />

                  <div className="project-image-shade absolute inset-0 transition-opacity duration-500 group-hover:opacity-40" />

                  <div className="absolute bottom-5 right-5 md:bottom-7 md:right-7 w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/50 bg-black/20 backdrop-blur-sm text-white flex items-center justify-center text-xl transition-all duration-500 group-hover:bg-white group-hover:text-black group-hover:rotate-45">
                    <FiArrowUpRight />
                  </div>
                </Link>

                {/* PROJECT DESCRIPTION */}
                <div className="project-content project-info-panel">
                  <p className="text-blue-400 uppercase tracking-[3px] text-xs">
                    {project.category}
                  </p>

                  <Link
                    to={`/projects/${project.slug}`}
                    className="project-title-link inline-block mt-4"
                  >
                    <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight leading-[0.95]">
                      {project.title}
                    </h3>
                  </Link>

                  <p className="text-gray-400 mt-6 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-x-4 gap-y-2 mt-7">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="text-xs text-blue-400 uppercase tracking-wider text-gray-500"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* MORE PROJECTS */}
        <div className="more-projects mt-14 md:mt-10 section-padding">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="w-8 h-px bg-blue-400" />
                <p className="text-blue-400 uppercase tracking-[4px] text-xs">
                  Beyond the featured
                </p>
              </div>

              <h3 className="text-4xl md:text-6xl font-bold uppercase tracking-tight">
                More <span className="gradient-text">experiments.</span>
              </h3>
            </div>

            <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
              A few more ideas, explorations and things built along
              the way.
            </p>
          </div>

          <div className="more-projects-grid grid md:grid-cols-2 gap-x-16">
            {moreProjects.map((project) => (
              <Link
                key={project.id}
                to={`/projects/${project.slug}`}
                className="more-project group flex items-center justify-between gap-5 py-8 border-b border-white/10"
              >
                <div>
                  <h4 className="text-2xl md:text-3xl font-bold uppercase tracking-tight transition-colors duration-300 group-hover:text-blue-400">
                    {project.title}
                  </h4>

                  <p className="text-xs text-gray-500 uppercase tracking-[2px] mt-2">
                    {project.category}
                  </p>
                </div>

                <span className="w-10 h-10 shrink-0 rounded-full border border-white/20 flex items-center justify-center text-gray-400 transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:border-white group-hover:rotate-45">
                  <FiArrowUpRight />
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* CLOSING */}
        <div className="section-padding projects-closing mt-14 md:mt-10 pt-5 border-t border-white/10 flex flex-col md:flex-row justify-between gap-8">
          <p className="text-gray-400 text-lg md:text-xl max-w-xl leading-relaxed">
            There's always more to explore. Have something in mind?
            <span className="text-white"> Let's build it.</span>
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-3 text-sm uppercase tracking-[2px] text-white group self-start"
          >
            Start a conversation

            <span className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:rotate-45">
              <FiArrowUpRight />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
