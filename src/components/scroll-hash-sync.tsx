"use client";

import { useEffect, useRef } from "react";

type Props = {
  sectionIds: string[];
  topId?: string;
};

export function ScrollHashSync({ sectionIds, topId = "top" }: Props) {
  const currentIdRef = useRef<string | null>(null);

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const updateHash = (id: string) => {
      if (currentIdRef.current === id) return;
      currentIdRef.current = id;

      const { pathname, search } = window.location;
      const nextUrl =
        id === topId ? `${pathname}${search}` : `${pathname}${search}#${id}`;

      window.history.replaceState(null, "", nextUrl);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));

        const best = visible[0];
        const id = best?.target instanceof HTMLElement ? best.target.id : null;
        if (!id) return;
        updateHash(id);
      },
      {
        root: null,
        threshold: [0, 0.25, 0.5, 0.75, 1],
        rootMargin: "-35% 0px -55% 0px",
      },
    );

    for (const el of elements) observer.observe(el);

    const initial = elements.find((el) => {
      const rect = el.getBoundingClientRect();
      return rect.top <= window.innerHeight * 0.35 && rect.bottom >= 0;
    });
    if (initial?.id) updateHash(initial.id);

    return () => observer.disconnect();
  }, [sectionIds, topId]);

  return null;
}

