"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { homeUseCases } from "@/lib/content/home";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

type UseCaseTabsProps = {
  className?: string;
};

export function UseCaseTabs({ className }: UseCaseTabsProps) {
  const [active, setActive] = useState(0);
  const useCase = homeUseCases[active];

  return (
    <div className={className}>
      <div className="flex flex-wrap justify-center gap-2.5">
        {homeUseCases.map((item, index) => (
          <button
            key={item.label}
            type="button"
            onClick={() => setActive(index)}
            className={cn(
              "rounded-full border px-5 py-2.5 text-[15px] font-semibold transition-colors",
              index === active
                ? "border-coral bg-coral text-cream"
                : "border-border bg-card-bg text-body hover:border-peach",
            )}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="mt-11 grid overflow-hidden rounded-[28px] border border-border bg-card-bg p-3 md:grid-cols-[1fr_0.85fr]">
        <div className="flex flex-col justify-center gap-4 p-6 md:p-9">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-sand">
            {useCase.eyebrow}
          </div>
          <h3 className="font-heading text-[34px] leading-tight font-semibold tracking-tight text-ink">
            {useCase.title}
          </h3>
          <p className="text-lg leading-relaxed text-body">{useCase.body}</p>
          <div className="mt-1 flex flex-col gap-2.5">
            {useCase.bullets.map((bullet) => (
              <div key={bullet} className="flex items-center gap-2.5">
                <span className="flex size-[22px] shrink-0 items-center justify-center rounded-full bg-chip-bg font-heading text-[13px] font-semibold text-coral">
                  ♪
                </span>
                <span className="text-base font-medium text-ink">{bullet}</span>
              </div>
            ))}
          </div>
          <Link
            href={siteConfig.appUrl}
            className="mt-2 self-start text-base font-semibold text-coral"
          >
            {useCase.cta} →
          </Link>
        </div>
        <div
          className="relative flex min-h-[360px] items-center justify-center overflow-hidden rounded-[20px]"
          style={{ background: useCase.gradient }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.35),transparent_45%)] opacity-50" />
          <Image
            src={useCase.melo}
            alt="Melo mascot"
            width={220}
            height={211}
            className="relative drop-shadow-[0_16px_26px_rgba(58,46,69,0.22)]"
          />
        </div>
      </div>
    </div>
  );
}
