"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { cn } from "@/lib/utils";

type Stat = {
  target: number;
  suffix: string;
  label: string;
  decimals: number;
};

type StatStripProps = {
  stats: Stat[];
  className?: string;
};

function formatStat(target: number, progress: number, decimals: number, suffix: string) {
  const value = target * progress;
  const formatted =
    decimals > 0
      ? value.toFixed(decimals)
      : Math.round(value).toLocaleString("en-US");
  return `${formatted}${suffix}`;
}

function subscribeReducedMotion(onStoreChange: () => void) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", onStoreChange);
  return () => media.removeEventListener("change", onStoreChange);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

export function StatStrip({ stats, className }: StatStripProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );
  const [progress, setProgress] = useState(reducedMotion ? 1 : 0);

  useEffect(() => {
    if (reducedMotion) return;

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          observer.disconnect();

          const duration = 1500;
          const start = performance.now();

          const tick = (now: number) => {
            const raw = Math.min(1, (now - start) / duration);
            const eased = 1 - (1 - raw) ** 3;
            setProgress(eased);
            if (raw < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
        });
      },
      { threshold: 0.35 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [reducedMotion]);

  return (
    <section className={cn("bg-ink", className)}>
      <div
        ref={ref}
        className="mx-auto grid max-w-[1180px] grid-cols-2 gap-6 px-8 py-9 md:grid-cols-4"
      >
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="font-heading text-[38px] font-bold tracking-tight text-butter">
              {formatStat(stat.target, progress, stat.decimals, stat.suffix)}
            </div>
            <div className="mt-0.5 text-sm text-cream/70">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
