"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const CODE = `const coder = {
  name: 'Master Coder',
  skills: ['React', 'Node'],
  hardWorker: true,
  problemSolver: true,
  hireable: function() {
    return (
      this.hardWorker &&
      this.problemSolver &&
      this.skills.length >= 5
    );
  }
};`;

// Syntax colors matching the reference (One Dark–style)
const COLORS: Record<string, string> = {
  keyword: "#C678DD",   // const, return — magenta
  function: "#98C379",  // function — green
  string: "#E5C07B",    // string literals — yellowish-orange
  number: "#56B6C2",    // numbers — cyan
  boolean: "#56B6C2",  // true, false — cyan
  this: "#56B6C2",     // this — cyan
  default: "#ABB2BF",  // identifiers, operators, punctuation — light grey
};

function tokenize(code: string): { type: string; value: string }[] {
  const tokens: { type: string; value: string }[] = [];
  const re = /\b(const|function|return|this|true|false)\b|'[^']*'|"[^"]*"|\b\d+\b|[\s\S]/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(code)) !== null) {
    const value = m[0];
    if (value === "function") {
      tokens.push({ type: "function", value });
    } else if (/\b(const|return)\b/.test(value)) {
      tokens.push({ type: "keyword", value });
    } else if (/\bthis\b/.test(value)) {
      tokens.push({ type: "this", value });
    } else if (/\b(true|false)\b/.test(value)) {
      tokens.push({ type: "boolean", value });
    } else if (/^'[^']*'|^"[^"]*"$/.test(value)) {
      tokens.push({ type: "string", value });
    } else if (/^\d+$/.test(value)) {
      tokens.push({ type: "number", value });
    } else {
      tokens.push({ type: "default", value });
    }
  }
  return tokens;
}

const allTokens = tokenize(CODE);
const totalChars = CODE.length;

/** Get tokens to show for a given visible character count (for typewriter). */
function getVisibleTokens(visibleChars: number): { type: string; value: string }[] {
  if (visibleChars <= 0) return [];
  let count = 0;
  const out: { type: string; value: string }[] = [];
  for (const t of allTokens) {
    if (count + t.value.length <= visibleChars) {
      out.push({ ...t });
      count += t.value.length;
    } else {
      const take = visibleChars - count;
      if (take > 0) out.push({ type: t.type, value: t.value.slice(0, take) });
      break;
    }
  }
  return out;
}

export default function HeroCodeBlock() {
  const [visibleChars, setVisibleChars] = useState(0);
  const ref = useRef<{ progress: number }>({ progress: 0 });

  useEffect(() => {
    const obj = ref.current;
    const tw = gsap.to(obj, {
      progress: totalChars,
      duration: 5,
      ease: "none",
      onUpdate: () => setVisibleChars(Math.round(obj.progress)),
    });
    return () => {
      tw.kill();
    };
  }, []);

  const visibleTokens = getVisibleTokens(visibleChars);
  const isComplete = visibleChars >= totalChars;

  const preClass =
    "px-4 sm:px-6 py-4 sm:py-5 text-xs sm:text-sm md:text-base leading-relaxed overflow-x-auto font-mono whitespace-pre";

  return (
    <div className="w-full max-w-xl mx-auto rounded-2xl border border-[#2d2d44] bg-[#1e1e2e] shadow-[0_22px_70px_rgba(0,0,0,0.5)] overflow-hidden min-w-0">
      <div className="flex items-center px-4 sm:px-5 py-2.5 sm:py-3 border-b border-[#2d2d44] bg-[#252536]">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500/80" />
          <span className="w-3 h-3 rounded-full bg-amber-400/80" />
          <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
        </div>
      </div>
      <div className="relative">
        {/* Invisible full code reserves space — layout never moves */}
        <pre className={`${preClass} invisible`} aria-hidden>
          {allTokens.map(({ type, value }, i) => (
            <span key={i} style={{ color: COLORS[type] ?? COLORS.default }}>
              {value}
            </span>
          ))}
          <span style={{ color: COLORS.default }}>▌</span>
        </pre>
        {/* Visible typing only — overlays in same space */}
        <pre className={`${preClass} absolute inset-0 overflow-hidden pointer-events-none`}>
          {visibleTokens.map(({ type, value }, i) => (
            <span key={i} style={{ color: COLORS[type] ?? COLORS.default }}>
              {value}
            </span>
          ))}
          <span
            className={isComplete ? "animate-pulse" : ""}
            style={{ color: "#FFFFFF" }}
          >
            ▌
          </span>
        </pre>
      </div>
    </div>
  );
}
