"use client";

import { useState } from "react";
import type { FaqItem } from "@/lib/content/faqs";
import { cn } from "@/lib/utils";

type FaqAccordionProps = {
  items: FaqItem[];
  className?: string;
};

export function FaqAccordion({ items, className }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={cn("flex flex-col gap-3", className)}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={item.question}
            className="overflow-hidden rounded-[18px] border border-border bg-card-bg"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="font-heading text-lg font-semibold text-ink md:text-[19px]">
                {item.question}
              </span>
              <span className="font-heading text-2xl font-semibold text-coral">
                {isOpen ? "–" : "+"}
              </span>
            </button>
            {isOpen ? (
              <p className="px-6 pb-6 text-[17px] leading-relaxed text-body">
                {item.answer}
              </p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
