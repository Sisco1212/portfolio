
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function LuminousThread() {
  const threadRef = useRef<SVGSVGElement>(null);

  // useGSAP(
  //   () => {
  //     const svg = threadRef.current;
  //     const paths = svg?.querySelectorAll<SVGPathElement>(".thread-path");

  //     if (!svg || !paths?.length || !svg.parentElement) return;

  //     const media = gsap.matchMedia();

  //     media.add("(prefers-reduced-motion: no-preference)", () => {
  //       const length = paths[0].getTotalLength();

  //       gsap.set(paths, {
  //         strokeDasharray: length,
  //         strokeDashoffset: length,
  //       });

  //       gsap.to(paths, {
  //         strokeDashoffset: 0,
  //         ease: "none",
  //         scrollTrigger: {
  //           trigger: svg.parentElement,
  //           start: "top top",
  //           end: "bottom bottom",
  //           scrub: true,
  //           invalidateOnRefresh: true,
  //         },
  //       });
  //     });

  //     return () => media.revert();
  //   },
  //   { scope: threadRef }
  // );

  return (
    <svg
      ref={threadRef}
      className="luminous-thread"
      viewBox="0 0 100 1000"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="thread-gradient"
          x1="0"
          y1="0"
          x2="0"
          y2="1000"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="35%" stopColor="#2563eb" />
          <stop offset="70%" stopColor="#438bff" />
          <stop offset="100%" stopColor="#60a5fa" />
        </linearGradient>
      </defs>

      <path
        className="thread-path thread-glow"
        d="
          M 79 0
          C 91 28, 91 45, 77 75
          C 64 105, 28 120, 19 155
          C 8 195, 34 225, 52 250
          C 75 282, 89 310, 78 350
          C 68 390, 25 405, 18 445
          C 11 485, 42 515, 62 545
          C 82 575, 88 610, 69 645
          C 50 680, 17 695, 19 735
          C 21 775, 55 805, 73 835
          C 91 865, 83 900, 58 925
          C 38 948, 25 970, 35 1000
        "
        stroke="url(#thread-gradient)"
        strokeWidth="2.5"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />

      <path
        className="thread-path thread-core"
        d="
          M 79 0
          C 91 28, 91 45, 77 75
          C 64 105, 28 120, 19 155
          C 8 195, 34 225, 52 250
          C 75 282, 89 310, 78 350
          C 68 390, 25 405, 18 445
          C 11 485, 42 515, 62 545
          C 82 575, 88 610, 69 645
          C 50 680, 17 695, 19 735
          C 21 775, 55 805, 73 835
          C 91 865, 83 900, 58 925
          C 38 948, 25 970, 35 1000
        "
        stroke="url(#thread-gradient)"
        strokeWidth="0.7"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
