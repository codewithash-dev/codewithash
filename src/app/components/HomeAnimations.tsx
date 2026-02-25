"use client";

import { useEffect } from "react";
import { gsap } from "gsap";

export default function HomeAnimations() {

  useEffect(() => {
    if (typeof window === "undefined") return;
    const section = document.querySelector("section.bg-gradient-to-b");
    if (!section) return;
    gsap.fromTo(
      section,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    );
  }, []);

  return null;
}
