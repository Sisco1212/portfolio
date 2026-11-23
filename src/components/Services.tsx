
import { useEffect, useRef, useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type TechItem = {
  name: string;
  color: string;
};

type SkillGroup = {
  title: string;
  items: string[];
  technologies: TechItem[];
};

const skillGroups: SkillGroup[] = [
  {
    title: "Frontend Development",
    items: [
      "- Modern React & Next.js Applications",
      "- Component Architecture & Reusability",
      "- State Management",
      "- API Integration",
      "- Responsive Interface Development",
      "- Performance & Rendering Optimization",
    ],
    technologies: [
      { name: "React", color: "#61DAFB" },
      { name: "Next.js", color: "#FFFFFF" },
      { name: "TypeScript", color: "#3178C6" },
      { name: "JavaScript", color: "#F7DF1E" },
      { name: "HTML", color: "#E34F26" },
      { name: "CSS", color: "#1572B6" },
      { name: "Tailwind CSS", color: "#06B6D4" },
      { name: "Bootstrap", color: "#7952B3" },
      { name: "Redux Toolkit", color: "#764ABC" },
      { name: "TanStack Query", color: "#CC6699" },
      { name: "Zod", color: "#3068B7" },
      { name: "Vite", color: "#646CFF" },
    ],
  },

  {
    title: "Backend Development",
    items: [
      "- RESTful API Design & Development",
      "- Server-Side Architecture & Business Logic",
      "- Database Design & Management",
      "- Authentication & Authorization",
      "- Data Validation & Security",
      "- Performance Optimization & Workflow Automation",
    ],
    technologies: [
      { name: "Node.js", color: "#5FA04E" },
      { name: "Express.js", color: "#FFFFFF" },
      { name: "MongoDB", color: "#47A248" },
      { name: "Mongoose", color: "#880000" },
      { name: "PostgreSQL", color: "#4169E1" },
      { name: "Supabase", color: "#3FCF8E" },
      { name: "Firebase", color: "#FFCA28" },
      { name: "JWT", color: "#FFFFFF" },
      { name: "Postman", color: "#FF6C37" },
      { name: "Nodemailer", color: "#339933" },
      { name: "Upstash", color: "#00E9A3" },
      { name: "Drizzle ORM", color: "#C5F74F" },
      { name: "GraphQL", color: "#E10098" },
      { name: "MySQL", color: "#4479A1" },
      { name: "Prisma", color: "#2D3748" },
      { name: "Redis", color: "#FF4438" },
      { name: "REST API", color: "#009688" },
      { name: "Swagger", color: "#85EA2D" },
      { name: "SQLite", color: "#003B57" },
    ],
  },

  {
    title: "Creative Development",
    items: [
      "- Interactive Web Experiences",
      "- Advanced Motion & Animation Design",
      "- 3D Web Experiences & WebGL",
      "- Scroll-Based Interactions",
      "- Creative UI Development",
      "- Immersive Visual Experiences",
    ],
    technologies: [
      { name: "GSAP", color: "#88CE02" },
      { name: "Three.js", color: "#FFFFFF" },
      { name: "WebGL", color: "#990000" },
      { name: "Framer Motion", color: "#0055FF" },
      { name: "Figma", color: "#F24E1E" },
      { name: "Barba.js", color: "#FFFFFF" },
      { name: "Photoshop", color: "#31A8FF" },
      { name: "Illustrator", color: "#FF9A00" },
    ],
  },

  {
    title: "Game Development",
    items: [
      "- Unity Game Development",
      "- Gameplay Programming",
      "- Game Mechanics & Systems",
      "- Interactive Environment Development",
      "- 3D Scene Development",
      "- C# Scripting",
    ],
    technologies: [
      { name: "Unity", color: "#FFFFFF" },
      { name: "CSharp", color: "#68217A" },
      { name: "Blender", color: "#E87D0D" },
    ],
  },

  {
    title: "Deployment & Server Configuration",
    items: [
      "- Production Deployment & Configuration",
      "- CI/CD Pipeline Setup",
      "- Domain & DNS Configuration",
      "- SEO & Metadata Optimization",
      "- Analytics & Performance Monitoring",
      "- Site Migrations & Maintenance",
    ],
    technologies: [
      { name: "Vercel", color: "#FFFFFF" },
      { name: "Cloudflare", color: "#F38020" },
      { name: "Git", color: "#F05032" },
      { name: "GitHub", color: "#FFFFFF" },
      { name: "Linux", color: "#FCC624" },
      { name: "Google Analytics", color: "#E37400" },
      { name: "Google Search Console", color: "#458CF5" },
      { name: "Cloudinary", color: "#3448C5" },
      { name: "AWS", color: "#FF9900" },
      { name: "Google Cloud", color: "#4285F4" },
    ],
  },
];

// Generate logo filenames automatically
function slugify(name: string) {
  return name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

// Individual technology pill
function TechPill({ tech }: { tech: TechItem }) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <div
      className="
        group flex items-center gap-2.5
        rounded-full border px-3.5 py-2.5
        cursor-default
        transition-all duration-300 ease-out
        hover:-translate-y-1
        hover:brightness-125
        hover:shadow-lg
      "
      style={{
        backgroundColor: `${tech.color}12`,
        borderColor: `${tech.color}40`,
      }}
    >
      <div className="w-[18px] h-[18px] shrink-0 flex items-center justify-center">
        {!imageFailed ? (
          <img
            src={`/tech-stack-logo/${slugify(tech.name)}.png`}
            alt=""
            className="w-full h-full object-contain"
            loading="lazy"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <span
            className="w-full h-full rounded-full flex items-center justify-center text-[10px] font-bold"
            style={{
              backgroundColor: tech.color,
              color: "#111",
            }}
          >
            {tech.name.charAt(0)}
          </span>
        )}
      </div>

      <span className="text-xs font-medium text-white/80 whitespace-nowrap transition-colors group-hover:text-white">
        {tech.name}
      </span>
    </div>
  );
}

const serviceDescriptions = [
  "I design and develop responsive, high-performance web experiences with thoughtful interfaces and carefully crafted interactions.",
  "I build the systems behind digital products, from REST APIs and database architecture to authentication and server-side functionality.",
  "I create immersive digital experiences through motion design, interactive 3D, and expressive web interfaces.",
  "I develop interactive games with engaging mechanics, polished gameplay systems, and immersive environments.",
  "I configure, deploy, and maintain applications, taking projects from development to reliable production environments.",
];

const visualThemes = [
  "service-visual--frontend",
  "service-visual--backend",
  "service-visual--creative",
  "service-visual--game",
  "service-visual--deployment",
];

function ServiceVisual({ index }: { index: number }) {
  const visualLabels = [
    ["INTERFACE DESIGN", "RESPONSIVE SYSTEMS", "INTERACTIONS"],
    ["API ARCHITECTURE", "DATABASE SYSTEMS", "AUTHENTICATION"],
    ["MOTION DESIGN", "3D EXPERIENCES", "INTERACTIVE MEDIA"],
    ["GAME MECHANICS", "WORLD BUILDING", "PLAYER SYSTEMS"],
    ["DEPLOYMENT", "INFRASTRUCTURE", "PRODUCTION"],
  ];

  return (
    <div
      key={index}
      className={`service-visual ${visualThemes[index]}`}
    >
      <div className="service-visual__top">
        <span>CAPABILITY / {String(index + 1).padStart(2, "0")}</span>
        <span>SELECTED AREA</span>
      </div>

      <div className="service-visual__composition">
        <div className="service-visual__orb" />

        <div className="service-visual__window">
          <div className="service-visual__window-header">
            <div className="service-visual__dots">
              <span />
              <span />
              <span />
            </div>
            <span>EXPERIENCE_{String(index + 1).padStart(2, "0")}</span>
          </div>

          <div className="service-visual__window-content">
            <span className="service-visual__eyebrow">
              DIGITAL CRAFT / 2026
            </span>

            <h3>
              {[
                "Interfaces\nwith intent.",
                "Systems\nthat scale.",
                "Beyond the\nordinary.",
                "Built to\nbe played.",
                "Ready for\nthe world.",
              ][index]}
            </h3>

            <div className="service-visual__visual-line" />

            <div className="service-visual__visual-footer">
              <span>DESIGN. BUILD. REFINE.</span>
              <span>0{index + 1}</span>
            </div>
          </div>
        </div>

        <div className="service-visual__orbit-label">
          <span>●</span> CREATIVE ENGINEERING
        </div>
      </div>

      <div className="service-visual__bottom">
        <div>
          {visualLabels[index].map((label) => (
            <span key={label}>{label}</span>
          ))}
        </div>
        <span className="service-visual__index">
          0{index + 1} / 05
        </span>
      </div>
    </div>
  );
}


export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const [openIndex, setOpenIndex] = useState(0);

  const previousOpenIndex = useRef(openIndex);

useEffect(() => {
  if (previousOpenIndex.current === openIndex) return;

  previousOpenIndex.current = openIndex;

  const number = sectionRef.current?.querySelector(
    ".services-current-number"
  );

  if (!number) return;

  gsap.fromTo(
    number,
    {
      y: 12,
      opacity: 0.7,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.45,
      ease: "power2.out",
      overwrite: true,
    }
  );
}, [openIndex]);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // =========================================
        // HEADING REVEAL
        // =========================================

        // Prepare the two heading lines for their reveal.
        gsap.set(".services-title > span", {
          display: "inline-block",
          overflow: "hidden",
          verticalAlign: "bottom",
        });

        gsap.set(".services-title > span > span", {
          display: "inline-block",
        });

        const headingTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: ".services-heading",
            start: "top 72%",
            once: true,
          },
        });

        headingTimeline
          .from(".services-heading .topline", {
            y: 22,
            opacity: 0,
            duration: 0.75,
            ease: "power3.out",
          })
          .from(
            ".services-title > span > span",
            {
              yPercent: 110,
              opacity: 0,
              duration: 1.05,
              stagger: 0.16,
              ease: "power4.out",
            },
            "-=0.2"
          );

        // =========================================
        // SERVICES LAYOUT REVEAL
        // =========================================

        const layoutTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: ".services-layout",
            start: "top 72%",
            once: true,
          },
        });

        // Large changing number rises into view.
layoutTimeline.to(
  ".services-current-number",
  {
    opacity: 1,
    duration: 0.9,
    ease: "power2.out",
  },
  0.15
);
        // Horizontal index rule draws across.
        layoutTimeline.from(
          ".services-index-rule",
          {
            scaleX: 0,
            transformOrigin: "left center",
            duration: 0.9,
            ease: "power3.inOut",
          },
          0.3
        );

        // Service titles enter from the right.
        layoutTimeline.from(
          ".service-item",
          {
            x: 55,
            opacity: 0,
            duration: 0.9,
            stagger: 0.13,
            ease: "power3.out",
          },
          0.15
        );

        // The initially expanded service content follows.
        // Its height remains controlled by the existing CSS accordion.
        layoutTimeline.from(
          ".service-item.is-active .service-details-inner > *",
          {
            y: 24,
            opacity: 0,
            duration: 0.75,
            stagger: 0.12,
            ease: "power3.out",
          },
          "-=0.35"
        );
      });



      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (

<section
  ref={sectionRef}
  id="services"
  className="services-section section-padding"
>
      <div className="services-container">
        {/* Heading — same visual language as About */}
        <div className="services-heading">
          <div className="topline">
            <p className="section-eyebrow">
              What I bring to the table
            </p>

            <span className="about-index">02 / 05</span>
          </div>

          <div className="overflow-hidden">
            <h2 className="about-heading services-title tracking-tighter">
              <span className="">
                <span>What I </span> 
              </span> 

              <span className="pl-4">
                 <span className="gradient-text">
                    Build.
                </span>
              </span>
            </h2>
          </div>
        </div>

        {/* Main interactive section */}
        <div className="services-layout">
          {/* Large changing number */}
          <div className="services-index-column">
            <div className="services-index-sticky">
              <div
                className="services-current-number"
                // key={openIndex}
              >
                {String(openIndex + 1).padStart(2, "0")}
              </div>

              <div className="services-index-rule" />

              {/* <p className="services-current-name">
                {skillGroups[openIndex].title}
              </p>

              <span className="services-index-count">
                {String(openIndex + 1).padStart(2, "0")}{" "}
                <span>/</span> 05
              </span> */}
            </div>
          </div>

          {/* Service list */}
          <div className="services-list">
            {skillGroups.map((group, index) => {
              const isOpen = openIndex === index;

              return (
                <article
                  key={group.title}
                  className={`service-item ${
                    isOpen ? "is-active" : ""
                  }`}
                >
                  <button
                    type="button"
                    className="service-trigger"
                    onClick={() => setOpenIndex(index)}
                    aria-expanded={isOpen}
                    aria-controls={`service-details-${index}`}
                  >
                    <span className="service-title">
                      {group.title}
                    </span>

                    <span className="service-indicator">
                      {isOpen ? <FiMinus /> : <FiPlus />}
                    </span>
                  </button>

                  <div
                    id={`service-details-${index}`}
                    className={`service-details ${
                      isOpen ? "is-expanded" : ""
                    }`}
                    aria-hidden={!isOpen}
                    inert={!isOpen}
                  >
                    <div className="service-details-inner">
                      <p className="service-description">
                        {serviceDescriptions[index]}
                      </p>

                      <div className="service-capabilities">
                        {group.items.map((item) => (
                          <div
                            className="service-capability"
                            key={item}
                          >
                            <span>-</span>
                            <p>{item.replace(/^-\s*/, "")}</p>
                          </div>
                        ))}
                      </div>

                      <div className="service-technologies">
                        <p className="service-tech-heading">
                          TECHNOLOGIES & TOOLS
                        </p>

                        <div className="service-tech-list">
                          {group.technologies.map((tech) => (
                            <div
                              className="service-tech-item"
                              key={tech.name}
                            >
                              <TechPill tech={tech} />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
