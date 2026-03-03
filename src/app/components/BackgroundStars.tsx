"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const STAR_COUNT = 400;

export default function BackgroundStars() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const stars = Array.from(container.querySelectorAll<HTMLSpanElement>("[data-star]"));

    stars.forEach((star) => {
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const size = Math.random() * 3 + 2;
      const delay = Math.random() * 1.5;

      star.style.left = `${x}%`;
      star.style.top = `${y}%`;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;

      gsap.to(star, {
        opacity: 0.15 + Math.random() * 0.5,
        duration: 0.8 + Math.random() * 1.2,
        repeat: -1,
        yoyo: true,
        delay,
        ease: "sine.inOut",
      });
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 -z-10"
      aria-hidden
    >
      {Array.from({ length: STAR_COUNT }).map((_, i) => (
        <span
          key={i}
          data-star
          className={`absolute rounded-full ${i % 4 === 0 ? "bg-white/70" : "bg-fuchsia-400/60"}`}
          style={{ opacity: i % 4 === 0 ? 0.35 : 0.3 }}
        />
      ))}
    </div>
  );
}
