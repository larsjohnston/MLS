"use client";

import { useState } from "react";

export function FaqAccordion({
  items,
  defaultOpen = 0,
}: {
  items: { q: string; a: string }[];
  defaultOpen?: number | null;
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen);

  return (
    <div className="divide-y divide-silver-300 overflow-hidden rounded-xl border border-silver-300 bg-white">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left sm:px-6"
              >
                <span className="font-display text-base font-bold text-navy-900 sm:text-lg">
                  {item.q}
                </span>
                <svg
                  viewBox="0 0 24 24"
                  className={`mt-1 h-5 w-5 shrink-0 text-blue-600 transition ${
                    isOpen ? "rotate-45" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </button>
            </h3>
            {isOpen && (
              <div className="px-5 pb-5 sm:px-6">
                <p className="max-w-3xl text-base leading-relaxed text-navy-800/85">
                  {item.a}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
