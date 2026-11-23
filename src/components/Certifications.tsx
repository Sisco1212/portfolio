
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import {
  FiArrowUpRight,
  FiDownload,
  FiExternalLink,
  FiX,
} from "react-icons/fi";

import {
  certifications,
  type Certification,
} from "../data/certifications";

import "../Certifications.css";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Certifications() {
  const sectionRef = useRef<HTMLElement>(null);

  const [activeCertificate, setActiveCertificate] =
    useState<Certification | null>(null);

  // =========================================
  // SCROLL ANIMATIONS
  // =========================================

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;
      if (
  window.matchMedia("(prefers-reduced-motion: reduce)").matches
) {
  return;
}

      const heading = section.querySelector(".archive-heading");
      const headingLines = section.querySelectorAll(".archive-heading-line");
      const intro = section.querySelector(".archive-intro");
      const entries = gsap.utils.toArray<HTMLElement>(
        ".credential-entry"
      );

      // Section heading
      const headingTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: heading,
          start: "top 82%",
          // toggleActions: "play none none none",
          once: true,
        },
      });

      headingTimeline
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
        .fromTo(
          intro,
          {
            y: 25,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.65"
        );

      // Individual credential exhibitions
      entries.forEach((entry) => {
        const artwork = entry.querySelector(
          ".credential-artwork"
        );

        const image = entry.querySelector(
          ".credential-artwork img"
        );

        const details = entry.querySelectorAll(
          ".credential-detail-reveal"
        );

        const direction = entry.dataset.direction;

        const imageStart =
          direction === "right"
            ? "inset(0 0 0 100%)"
            : "inset(0 100% 0 0)";

        const imageTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: entry,
            start: "top 78%",
            // toggleActions: "play none none none",
            once: true,
          },
        });

        imageTimeline
          .fromTo(
            entry,
            {
              y: 70,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 0.9,
              ease: "power3.out",
            }
          )
          .fromTo(
            artwork,
            {
              clipPath: imageStart,
            },
            {
              clipPath: "inset(0 0% 0 0%)",
              duration: 1.2,
              ease: "power4.inOut",
            },
            "-=0.55"
          )
          .fromTo(
            image,
            {
              scale: 1.12,
            },
            {
              scale: 1,
              duration: 1.4,
              ease: "power3.out",
            },
            "<"
          )
          .fromTo(
            details,
            {
              y: 28,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 0.75,
              stagger: 0.09,
              ease: "power3.out",
            },
            "-=0.85"
          );

        // Subtle image parallax while the exhibition is visible
        gsap.fromTo(
          image,
          {
            yPercent: -3,
          },
          {
            yPercent: 3,
            ease: "none",
            scrollTrigger: {
              trigger: entry,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
              once: true,
            },
          }
        );
      });
    },
    { scope: sectionRef }
  );

  // =========================================
  // MODAL BEHAVIOUR
  // =========================================

  useEffect(() => {
    if (!activeCertificate) return;

    const previousOverflow = document.body.style.overflow;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveCertificate(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeCertificate]);

  return (
    <>
      <section
        id="certifications"
        ref={sectionRef}
        className="credential-archive section-padding"
      >
        <div className="archive-container">

          {/* =================================
              SECTION INTRODUCTION
          ================================= */}

          <div className="topline archive-topline">
            <p className="section-eyebrow">
              Selected credentials
            </p>

            <span className="about-index">04 / 05</span>
          </div>

          <div className="archive-heading">
            <div className="archive-heading-main">
              <div className="archive-heading-mask">
                <h2 className="archive-heading-line">
                  THE RECORD
                </h2>
              </div>

              <div className="archive-heading-mask">
                <h2 className="archive-heading-line archive-heading-second">
                  OF <span>PROGRESS.</span>
                </h2>
              </div>
            </div>

            <div className="archive-intro">
              {/* <span className="archive-intro-mark">
                <FiAward />
              </span> */}

              <p>
                A collection of milestones, skills, and
                knowledge acquired along the way.
              </p>

              {/* <div className="archive-total">
                <strong>
                  {String(certifications.length).padStart(2, "0")}
                </strong>
                <span>DOCUMENTED CREDENTIALS</span>
              </div> */}
            </div>
          </div>

          {/* =================================
              CREDENTIAL EXHIBITION
          ================================= */}

          {certifications.length > 0 ? (
            <div className="archive-exhibitions">

              <div className="archive-spine" aria-hidden="true">
                <div className="archive-spine-fill" />
              </div>

              {certifications.map((certificate, index) => {
                const isReversed = index % 2 !== 0;

                return (
                  <article
                    key={certificate.id}
                    className={`credential-entry ${
                      isReversed ? "credential-entry-reversed" : ""
                    }`}
                    data-direction={isReversed ? "right" : "left"}
                  >
                    {/* ARTWORK */}

                    <div className="credential-artwork-column">
                      <div className="credential-artwork-frame">

                        {/* <div className="credential-artwork-top">
                          <span>
                            DOCUMENT / {String(index + 1).padStart(2, "0")}
                          </span>

                          <span>VERIFIED LEARNING</span>
                        </div> */}

                        <div className="credential-artwork">
                          <img
                            src={certificate.image}
                            alt={`${certificate.title} certificate`}
                            loading="lazy"
                          />

                          <div className="credential-artwork-overlay">
                            <button
                              type="button"
                              onClick={() =>
                                setActiveCertificate(certificate)
                              }
                              aria-label={`View ${certificate.title}`}
                              className="credential-artwork-button"
                            >
                              <span>INSPECT DOCUMENT</span>
                              <FiArrowUpRight />
                            </button>
                          </div>
                        </div>

                        {/* <div className="credential-artwork-bottom">
                          <span>ARCHIVE SERIES</span>
                          <span>
                            CR — {String(index + 1).padStart(3, "0")}
                          </span>
                        </div> */}

                      </div>

                      {/* <div className="credential-artwork-caption">
                        <span>FIG. {String(index + 1).padStart(2, "0")}</span>
                        <span>{certificate.issuer}</span>
                      </div> */}
                    </div>

                    {/* INFORMATION */}

                    <div className="credential-content">

                      {/* <div className="credential-content-top credential-detail-reveal">
                        <span className="credential-serial">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="credential-category">
                          PROFESSIONAL DEVELOPMENT
                        </span>
                      </div> */}

                      <div className="credential-content-main">

                        <p className="credential-issuer credential-detail-reveal">
                          {certificate.issuer}
                        </p>

                        <h3 className="credential-title credential-detail-reveal">
                          {certificate.title}
                        </h3>

                        {certificate.issueDate && (
                          <p className="credential-date credential-detail-reveal">
                            <span>ISSUED</span>
                            {certificate.issueDate}
                          </p>
                        )}

                        {certificate.skills.length > 0 && (
                          <div className="credential-skill-area credential-detail-reveal">
                            {/* <span className="credential-skill-label">
                              KNOWLEDGE AREAS
                            </span> */}

                            <div className="credential-skills">
                              {certificate.skills.map((skill) => (
                                <span key={skill}>{skill}</span>
                              ))}
                            </div>
                          </div>
                        )}

                      </div>

                      {/* ACTIONS */}

                      <div className="credential-actions credential-detail-reveal">

                        {certificate.pdf && (
                          <>
                            <button
                              type="button"
                              onClick={() =>
                                setActiveCertificate(certificate)
                              }
                              className="credential-primary-action"
                            >
                              View document
                              <FiArrowUpRight />
                            </button>

                            <a
                              href={certificate.pdf}
                              download
                              className="credential-secondary-action"
                            >
                              <FiDownload />
                              Download
                            </a>
                          </>
                        )}

                        {certificate.verificationUrl && (
                          <a
                            href={certificate.verificationUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="credential-secondary-action"
                          >
                            Verify
                            <FiExternalLink />
                          </a>
                        )}

                      </div>

                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="archive-empty">
              No credentials have been added yet.
            </div>
          )}

        </div>
      </section>

      {/* =====================================
          CERTIFICATE VIEWER
      ===================================== */}

      {activeCertificate && (
        <div
          className="credential-modal-backdrop"
          onClick={() => setActiveCertificate(null)}
          role="presentation"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`${activeCertificate.title} certificate`}
            className="credential-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="credential-modal-header">

              <div className="credential-modal-title">
                <p>{activeCertificate.issuer}</p>
                <h3>{activeCertificate.title}</h3>
              </div>

              <div className="credential-modal-controls">

                {activeCertificate.pdf && (
                  <a
                    href={activeCertificate.pdf}
                    download
                    aria-label="Download certificate"
                    title="Download certificate"
                  >
                    <FiDownload />
                  </a>
                )}

                <button
                  type="button"
                  onClick={() => setActiveCertificate(null)}
                  aria-label="Close certificate preview"
                >
                  <FiX />
                </button>

              </div>
            </div>

            <div className="credential-pdf-viewer">
              {activeCertificate.pdf ? (
                <iframe
                  key={activeCertificate.pdf}
                  src={`${activeCertificate.pdf}#toolbar=1&navpanes=0`}
                  title={`${activeCertificate.title} PDF`}
                />
              ) : (
                <div className="credential-no-pdf">
                  No PDF is available for this certificate.
                </div>
              )}
            </div>

          </div>
        </div>
      )}
    </>
  );
}
