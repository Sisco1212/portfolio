
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState("");
  const [active, setActive] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia(
      "(pointer: fine)"
    ).matches;

    if (!finePointer || !cursorRef.current) return;

    const cursor = cursorRef.current;

    const moveX = gsap.quickTo(cursor, "x", {
      duration: 0.18,
      ease: "power3.out",
    });

    const moveY = gsap.quickTo(cursor, "y", {
      duration: 0.18,
      ease: "power3.out",
    });

    let currentLabel = "";
    let currentActive = false;

    const handlePointerMove = (event: PointerEvent) => {
      moveX(event.clientX);
      moveY(event.clientY);

      cursor.classList.add("cursor-visible");

      const target = event.target as HTMLElement | null;
      const interactive = target?.closest("[data-cursor]") as HTMLElement | null;

      const nextLabel = interactive?.dataset.cursor || "";
      const nextActive = Boolean(interactive);

      if (nextLabel !== currentLabel) {
        currentLabel = nextLabel;
        setLabel(nextLabel);
      }

      if (nextActive !== currentActive) {
        currentActive = nextActive;
        setActive(nextActive);
      }
    };

    const handlePointerLeave = () => {
      cursor.classList.remove("cursor-visible");
      setActive(false);
      setLabel("");
      currentActive = false;
      currentLabel = "";
    };

    window.addEventListener("pointermove", handlePointerMove);
    document.documentElement.addEventListener(
      "pointerleave",
      handlePointerLeave
    );

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.documentElement.removeEventListener(
        "pointerleave",
        handlePointerLeave
      );

      gsap.killTweensOf(cursor);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor ${active ? "is-active" : ""}`}
      aria-hidden="true"
    >
      <div className="cursor-ring" />
      <div className="cursor-dot" />
      <span className="cursor-label">{label}</span>
    </div>
  );
}
