"use client";

import { useEffect, useRef } from "react";
import "./lawncare.css";

export default function LawnCareProjectPage() {
  const mounted = useRef(false);

  useEffect(() => {
    if (mounted.current) return;
    mounted.current = true;
    import("./LawnCareClient.jsx").then((mod) => {
      if (typeof mod.mount === "function") mod.mount();
    });
  }, []);

  return (
    <div className="lawncare-root min-h-screen">
      <div id="root" className="min-h-screen" />
    </div>
  );
}
