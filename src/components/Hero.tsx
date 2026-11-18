
import { useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const hero = heroRef.current;
      if (!hero) return;

      const media = gsap.matchMedia();

      media.add(
        "(prefers-reduced-motion: no-preference)",
        () => {
          const entrance = gsap.timeline({
            defaults: { ease: "power3.out" },
          });

          entrance
            .from("[data-hero-eyebrow]", {
              y: 20,
              opacity: 0,
              duration: 0.7,
            })
            .from(
              "[data-hero-title]",
              {
                y: 45,
                opacity: 0,
                duration: 0.9,
              },
              "-=0.4"
            )
            .from(
              "[data-hero-role]",
              {
                y: 20,
                opacity: 0,
                duration: 0.65,
              },
              "-=0.45"
            )
            .from(
              "[data-hero-description]",
              {
                y: 20,
                opacity: 0,
                duration: 0.7,
              },
              "-=0.4"
            )
            .from(
              "[data-hero-action]",
              {
                y: 15,
                opacity: 0,
                stagger: 0.12,
                duration: 0.55,
              },
              "-=0.35"
            )
            .from(
              "[data-hero-social]",
              {
                y: 12,
                opacity: 0,
                stagger: 0.1,
                duration: 0.5,
              },
              "-=0.3"
            )
            .from(
              "[data-hero-image]",
              {
                clipPath: "inset(10% 10% 10% 10% round 38px)",
                scale: 0.96,
                opacity: 0,
                duration: 1,
                ease: "power4.out",
              },
              "-=1"
            )
            .from(
              "[data-hero-badge]",
              {
                y: 18,
                opacity: 0,
                scale: 0.95,
                stagger: 0.12,
                duration: 0.6,
              },
              "-=0.5"
            );

          // Restrained parallax while leaving the hero.
        // Scroll animation
const scrollTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: hero,
    start: "top top",
    end: "+=700",
    scrub: 1,
    invalidateOnRefresh: true,
  },
});

scrollTimeline
  .to(
    "[data-hero-content]",
    {
      y: -100,
      opacity: 0.2,
      ease: "none",
    },
    0
  )
  .to(
    "[data-hero-image]",
    {
      y: 110,
      scale: 0.84,
      rotate: -3,
      ease: "none",
    },
    0
  )
  .to(
    "[data-hero-light]",
    {
      opacity: 0.55,
      scale: 1.2,
      ease: "none",
    },
    0
  );
        }
      );

      return () => media.revert();
    },
    { scope: heroRef }
  );


useGSAP(
  () => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const buttons = gsap.utils.toArray<HTMLElement>(
      "[data-magnetic]"
    );

    const cleanups: (() => void)[] = [];

    buttons.forEach((button) => {
      const moveX = gsap.quickTo(button, "x", {
        duration: 0.35,
        ease: "power3.out",
      });

      const moveY = gsap.quickTo(button, "y", {
        duration: 0.35,
        ease: "power3.out",
      });

      const handleMove = (event: PointerEvent) => {
        const rect = button.getBoundingClientRect();

        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;

        moveX(x * 0.12);
        moveY(y * 0.18);
      };

      const reset = () => {
        moveX(0);
        moveY(0);
      };

      button.addEventListener("pointermove", handleMove);
      button.addEventListener("pointerleave", reset);

      cleanups.push(() => {
        button.removeEventListener("pointermove", handleMove);
        button.removeEventListener("pointerleave", reset);

        gsap.killTweensOf(button);
        gsap.set(button, { clearProps: "transform" });
      });
    });

    return () => {
      cleanups.forEach((cleanup) => cleanup());
    };
  },
  { scope: heroRef }
);


  return (
    <section
      ref={heroRef}
      id="home"
      className="hero-section section-padding flex flex-col lg:flex-row items-center justify-between gap-20"
    >
      <div
        data-hero-light
        className="hero-light"
        aria-hidden="true"
      />

      <div
        data-hero-content
        className="hero-content relative z-10 flex-1 max-w-2xl"
      >
        <p
          data-hero-eyebrow
          className="section-eyebrow mb-7"
        >
          Full Stack Developer / Creative Developer
        </p>

        <div className="overflow-hidden">
          <h1
            data-hero-title
            className="text-6xl md:text-7xl xl:text-[88px] tracking-tight font-semibold leading-[1.05]"
          >
            Hi, I'm{" "}
            <span className="gradient-text font-black">
              Sito
            </span>
          </h1>
        </div>

        <h2
          data-hero-role
          className="mt-7 text-xl md:text-3xl font-light min-h-[45px]"
        >
          And I'm a{" "}
          <span className="gradient-text font-semibold">
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                1800,
                "Game Developer",
                1800,
                "Creative Developer",
                1800,
                "UI/UX Designer",
                1800,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </span>
        </h2>

        <p
          data-hero-description
          className="mt-7 max-w-xl text-white/65 text-sm md:text-base leading-[1.9]"
        >
          I create, build, design, develop and deploy
          modern, scalable and immersive digital
          experiences, from full-stack web applications
          to interactive game environments, blending
          thoughtful engineering, immersive visuals and
          engaging interactions.
        </p>

        <div className="mt-8 flex flex-wrap gap-5">
       <a
  data-hero-action
  data-magnetic
  data-cursor="EXPLORE"
  href="#projects"
  className="hero-primary-button group"
>
            <span>View My Work</span>
            <FiArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>

       <a
  data-hero-action
  data-magnetic
  data-cursor="CONTACT"
  href="#contact"
  className="hero-secondary-button"
>
            Contact Me
            <FiArrowUpRight />
          </a>
        </div>

        <div className="flex items-center gap-4 mt-8">
          <a
            data-hero-social
            data-cursor="GITHUB"
            href="https://github.com/Sisco1212"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hero-social-link"
          >
            <FaGithub />
          </a>

          <a
            data-hero-social
            data-cursor="LINKEDIN"
            href="https://www.linkedin.com/in/sito-patrick/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hero-social-link"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      <div className="hero-visual relative z-10 flex-1 flex justify-center items-center min-h-[460px] md:min-h-[560px]">
        <div
          data-hero-light
          className="hero-portrait-light"
          aria-hidden="true"
        />

        <div
          data-hero-object
          className="hero-object hero-object-ring top-[8%] right-[3%] md:right-[7%]"
          aria-hidden="true"
        />

        <div
          data-hero-object
          className="hero-object hero-object-sphere bottom-[17%] left-[0%] md:left-[5%]"
          aria-hidden="true"
        />

        <div
          data-hero-object
          className="hero-object hero-object-cube top-[35%] -right-[1%] md:right-[0%]"
          aria-hidden="true"
        />

        <div
          data-hero-image
          data-cursor="EXPLORE"
          className="hero-image-frame relative w-[300px] h-[390px] sm:w-[340px] sm:h-[440px] md:w-[400px] md:h-[500px] rounded-[38px] overflow-hidden"
        >
          <img
            src="/edit2.jpg"
            alt="Portrait of Sito Patrick"
            className="hero-image w-full h-full object-cover object-center"
          />

          <div className="hero-image-border" />
        </div>

        <div
          data-hero-badge
          data-cursor="EXPERIENCE"
          className="hero-info-badge absolute left-0 md:-left-12 top-[58%] z-20"
        >
          <h3 className="text-2xl font-bold gradient-text">
            5+
          </h3>
          <p className="text-xs md:text-sm text-white/65 mt-1">
            Years Experience
          </p>
        </div>

        <div
          data-hero-badge
          data-cursor="CODE"
          className="hero-code-badge absolute -right-2 md:-right-7 top-[15%] z-20"
        >
          {"</>"}
        </div>
      </div>
    </section>
  );
}
