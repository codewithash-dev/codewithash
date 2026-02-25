"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ANIMATION_MAP = {
  "fade-up": { from: { opacity: 0, y: 24 }, to: { opacity: 1, y: 0 } },
  "fade-in": { from: { opacity: 0 }, to: { opacity: 1 } },
  "fade-left": { from: { opacity: 0, x: -24 }, to: { opacity: 1, x: 0 } },
  "fade-right": { from: { opacity: 0, x: 24 }, to: { opacity: 1, x: 0 } },
} as const;

type AnimationType = keyof typeof ANIMATION_MAP;

function killPageRevealTriggers() {
  const triggers = document.querySelectorAll("[data-gsap]");
  ScrollTrigger.getAll().forEach((t) => {
    const triggerEl = t.trigger as Node;
    if (triggers.length && Array.from(triggers).some((el) => el.contains(triggerEl) || el === triggerEl))
      t.kill();
  });
}

function setupPageAnimations() {
  killPageRevealTriggers();
  const elements = document.querySelectorAll<HTMLElement>("[data-gsap]");

  elements.forEach((el) => {
    const type = (el.getAttribute("data-gsap") || "fade-up") as AnimationType;
    const config = ANIMATION_MAP[type] ?? ANIMATION_MAP["fade-up"];
    const delay = parseFloat(el.getAttribute("data-gsap-delay") || "0");
    const stagger = el.getAttribute("data-gsap-stagger");
    const children = stagger
      ? el.querySelectorAll<HTMLElement>("[data-gsap-item]")
      : null;

    if (children?.length) {
      gsap.fromTo(
        children,
        config.from,
        {
          ...config.to,
          duration: 0.6,
          stagger: 0.08,
          delay,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      );
    } else {
      gsap.fromTo(
        el,
        config.from,
        {
          ...config.to,
          duration: 0.6,
          delay,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  });

  ScrollTrigger.refresh();
}

export default function GSAPPageReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const timeout = setTimeout(setupPageAnimations, 100);
    return () => {
      clearTimeout(timeout);
      killPageRevealTriggers();
    };
  }, [pathname]);

  return null;
}
