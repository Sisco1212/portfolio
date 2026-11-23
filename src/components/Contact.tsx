
import { useRef } from "react";
import type { PointerEvent } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import {
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";

import { FaXTwitter } from "react-icons/fa6";

import "../Contact.css";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const EMAIL = "sitopatrick2004@gmail.com";

const SOCIALS = [
  {
    label: "GitHub",
    username: "@Sisco1212",
    href: "https://github.com/Sisco1212",
    icon: FiGithub,
  },
  {
    label: "LinkedIn",
    username: "Sito Robbin",
    href: "https://www.linkedin.com/in/sito-patrick/",
    icon: FiLinkedin,
  },
  {
    label: "X",
    username: "@onlyonesito",
    href: "https://x.com/onlyonesito",
    icon: FaXTwitter,
  },
  {
    label: "Email",
    username: EMAIL,
    href: `mailto:${EMAIL}`,
    icon: FiMail,
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const portalRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const portal = portalRef.current;

      if (!section || !portal) return;

      const mm = gsap.matchMedia();

      mm.add(
        {
          desktop: "(min-width: 768px)",
          mobile: "(max-width: 767px)",
          reduceMotion: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          const conditions = context.conditions as {
            desktop: boolean;
            mobile: boolean;
            reduceMotion: boolean;
          };

          const headingLines = section.querySelectorAll(
            ".contact-heading-line"
          );

          if (conditions.reduceMotion) {
            gsap.set(
              [
                headingLines,
                ".contact-eyebrow",
                ".contact-description",
                ".contact-cta",
                ".contact-socials",
              ],
              {
                clearProps: "all",
              }
            );

            gsap.set(portal, {
              scale: 1,
              opacity: 1,
            });

            return;
          }

          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: "top 30%",
              once: true,
            },
          });

          timeline
            // Contact heading — same reveal as Credentials
            .fromTo(
              headingLines,
              {
                yPercent: 110,
                rotate: 3,
              },
              {
                yPercent: 0,
                rotate: 0,
                duration: 1.1,
                stagger: 0.12,
                ease: "power4.out",
              }
            )
            // Existing portal animation
            .fromTo(
              portal,
              {
                scale: 0.55,
                opacity: 0.15,
              },
              {
                scale: conditions.desktop ? 1 : 0.9,
                opacity: 1,
                duration: 2,
                ease: "power3.out",
              },
              "<"
            )
            .from(
              ".contact-eyebrow",
              {
                opacity: 0,
                y: 20,
                duration: 0.7,
                ease: "power3.out",
              },
              "-=1.3"
            )
            .from(
              ".contact-description",
              {
                opacity: 0,
                y: 25,
                duration: 0.8,
                ease: "power3.out",
              },
              "-=0.5"
            )
            .from(
              ".contact-cta",
              {
                opacity: 0,
                y: 25,
                duration: 0.8,
                ease: "power3.out",
              },
              "-=0.4"
            )
            .from(
              ".contact-socials > *",
              {
                opacity: 0,
                y: 15,
                duration: 0.6,
                stagger: 0.12,
                ease: "power3.out",
              },
              "-=0.3"
            );

          return () => {
            timeline.scrollTrigger?.kill();
            timeline.kill();
          };
        }
      );

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  const handlePointerMove = (
    event: PointerEvent<HTMLAnchorElement>
  ) => {
    if (event.pointerType !== "mouse" || !buttonRef.current) return;

    const bounds = event.currentTarget.getBoundingClientRect();

    const x =
      event.clientX - bounds.left - bounds.width / 2;

    const y =
      event.clientY - bounds.top - bounds.height / 2;

    gsap.to(buttonRef.current, {
      x: x * 0.18,
      y: y * 0.18,
      duration: 0.35,
      ease: "power3.out",
      overwrite: "auto",
    });
  };

  const handlePointerLeave = () => {
    if (!buttonRef.current) return;

    gsap.to(buttonRef.current, {
      x: 0,
      y: 0,
      duration: 0.7,
      ease: "elastic.out(1, 0.4)",
      overwrite: "auto",
    });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="contact-section"
    >
      <div className="contact-portal" aria-hidden="true">
        <div className="contact-portal-glow" ref={portalRef}>
          <div className="contact-portal-core" />
        </div>
      </div>

      <div className="contact-inner">
        <div className="topline mb-10">
          <p className="section-eyebrow">Get in touch</p>
          <span className="about-index">05 / 05</span>
        </div>

        <div className="contact-content">
          <h2 className="contact-heading">
            <span className="contact-heading-line">
              HAVE SOMETHING
            </span>

            <span className="contact-heading-line">
              INTERESTING IN
            </span>

            <span className="contact-heading-line contact-heading-accent">
              MIND?
            </span>
          </h2>

          <p className="contact-description">
            Have an idea worth bringing to life? Let's make
            something meaningful out of it.
          </p>

          <a
            ref={buttonRef}
            href={`mailto:${EMAIL}`}
            className="contact-cta"
            onPointerMove={handlePointerMove}
            onPointerLeave={handlePointerLeave}
          >
            <span>LET'S BUILD IT</span>

            <span className="contact-cta-icon">
              <FiArrowUpRight />
            </span>
          </a>
        </div>

        <div className="contact-socials">
          <span className="contact-socials-label mb-8">
            FIND ME ELSEWHERE
          </span>

          <div className="contact-socials-links">
            {SOCIALS.map(
              ({ label, username, href, icon: Icon }) => (
                <a
                  href={href}
                  key={label}
                  aria-label={`${label}: ${username}`}
                  target={label === "Email" ? undefined : "_blank"}
                  rel={
                    label === "Email"
                      ? undefined
                      : "noopener noreferrer"
                  }
                >
                  <Icon className="contact-social-icon" />

                  <span className="contact-social-info">
                    <span className="contact-social-name">
                      {label}
                    </span>

                    <span className="contact-social-username">
                      {username}
                    </span>
                  </span>

                  <FiArrowUpRight className="contact-social-arrow" />
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
