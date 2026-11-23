
import { useRef } from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const details = [
  {
    label: "Based in",
    value: "Nigeria",
  },
  {
    label: "Specialization",
    value: "Full Stack & Creative Development",
  },
  {
    label: "Availability",
    value: "Open to opportunities",
  },
];

export default function About() {
  const aboutRef = useRef<HTMLElement>(null);

 
useGSAP(
  () => {
    const section = aboutRef.current;
    if (!section) return;

    const media = gsap.matchMedia();

    media.add("(prefers-reduced-motion: no-preference)", () => {
      
const eyebrow = section.querySelector("[data-about-eyebrow]");
const heading = section.querySelector("[data-about-heading]");
const headingLines = heading?.querySelectorAll<HTMLElement>(
  "[data-heading-line]"
);

const copyElements = gsap.utils.toArray<HTMLElement>(
  "[data-about-copy]",
  section
);

const detailsLine = section.querySelector("[data-about-line]");
const detailsHeading = section.querySelector(
  "[data-about-details-heading]"
);

const detailElements = gsap.utils.toArray<HTMLElement>(
  "[data-about-detail]",
  section
);

// Initial states
gsap.set(copyElements, { autoAlpha: 0, y: 30 });

gsap.set(
  [detailsLine, detailsHeading, ...detailElements].filter(Boolean),
  { autoAlpha: 0 }
);

const introTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: heading,
    start: "top 82%",
    once: true,
  },
});

// Eyebrow
if (eyebrow) {
  introTimeline.from(eyebrow, {
    y: 15,
    opacity: 0,
    duration: 0.5,
    ease: "power3.out",
  });
}

// Heading typing animation
headingLines?.forEach((line) => {
  introTimeline.fromTo(
    line,
    { clipPath: "inset(0 100% 0 0)" },
    {
      clipPath: "inset(0 0% 0 0)",
      duration: 0.6,
      ease: "steps(24)",
    }
  );
});

// Paragraphs start just before heading finishes.
const headingEnd = introTimeline.duration();

introTimeline.to(
  copyElements,
  {
    autoAlpha: 1,
    y: 0,
    duration: 0.55,
    stagger: 0.08,
    ease: "power3.out",
  },
  headingEnd - 0.5
);

// Details begin just before the paragraph sequence finishes.
const detailsStart = headingEnd + 0.2 + 0.05 * (copyElements.length - 1) - 0.1;

if (detailsLine) {
  introTimeline.fromTo(
    detailsLine,
    { scaleY: 0, autoAlpha: 0, transformOrigin: "top" },
    {
      scaleY: 1,
      autoAlpha: 1,
      duration: 0.65,
      ease: "power3.out",
    },
    detailsStart
  );
}

if (detailsHeading) {
  introTimeline.fromTo(
    detailsHeading,
    { y: 15, autoAlpha: 0 },
    {
      y: 0,
      autoAlpha: 1,
      duration: 0.4,
      ease: "power3.out",
    },
    detailsStart + 0.1
  );
}

if (detailElements.length) {
  introTimeline.fromTo(
    detailElements,
    { x: 25, autoAlpha: 0 },
    {
      x: 0,
      autoAlpha: 1,
      duration: 0.45,
      stagger: 0.07,
      ease: "power3.out",
    },
    detailsStart + 0.25
  );
}


    });

    return () => media.revert();
  },
  { scope: aboutRef }
);


  return (
    <section
      ref={aboutRef}
      id="about"
      className="about-section section-padding relative"
    >
      <div className="max-w-7xl mx-auto">
        <div className="topline">
          <p
            data-about-eyebrow
            className="section-eyebrow"
          >
            A little about me
          </p>

          <span className="about-index">01 / 05</span>
        </div>

        <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-16 lg:gap-24 mt-14">
          <div>
            <div className="overflow-hidden">
            <h2
  data-about-heading
  aria-label="Beyond the Code."
  className="about-heading tracking-tighter"
>
  <span className="block">
    <span data-heading-line="first">Beyond the</span>
  </span>

  <span className="block">
    <span className="gradient-text" data-heading-line="second">
      Code.
    </span>
  </span>
</h2>
            </div>

            <div className="mt-10 max-w-2xl space-y-6">
              <p
                data-about-copy
                className="about-lead"
              >
                I'm a developer passionate about creating
                digital experiences that combine thoughtful
                engineering with creative design.
              </p>

              <p
                data-about-copy
                className="about-description"
              >
                My work spans full-stack web applications,
                interactive interfaces and game development.
                I enjoy taking ideas from concept to
                implementation, building products that are
                not only functional and scalable but also
                engaging to experience.
              </p>
            </div>

            <a
              href="#projects"
              data-about-copy
              data-cursor="EXPLORE"
              className="about-link mt-10"
            >
              Explore my work
              <FaArrowUpRightFromSquare />
            </a>
          </div>

          <div className="about-details">
            <div
              data-about-line
              className="about-details-line"
            />

            <div className="about-details-content">
              <p
                data-about-details-heading
                className="section-eyebrow mb-10"
              >
                The essentials
              </p>

              {details.map((detail) => (
                <div
                  key={detail.label}
                  data-about-detail
                  className="about-detail-row"
                >
                  <span>{detail.label}</span>
                  <p>{detail.value}</p>
                </div>
              ))}

              <div
                data-about-detail
                className="about-detail-row about-email-row"
              >
                <span>Get in touch</span>

                <a
                  href="mailto:sitopatrick2004@gmail.com"
                  data-cursor="EMAIL"
                >
                  Let's talk
                  <FaArrowUpRightFromSquare />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
