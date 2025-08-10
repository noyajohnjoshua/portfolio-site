"use client";

import React, { useMemo, useRef } from "react";
import Container from "@/components/Container";
import Section from "@/components/Section";

type Testimonial = {
  title: string;
  quote: string;
  author?: string;
  role?: string;
};

const testimonials: Testimonial[] = [
  {
    title: "exceptional attention to detail",
    quote:
      "JJ demonstrates exceptional attention to detail and is mindful of protocols and processes. His ability to adapt quickly, think creatively, and master the tasks assigned made him an invaluable member of the team.",
    author: "Kurt D.",
    role: "Senior Accounts Director",
  },
  {
    title: "Highly punctual and reliable",
    quote:
      "Highly punctual and reliable, JJ often arrived first at the workplace. He consistently respected everyone’s time, communicated conflicts in advance, and maintained professionalism throughout his internship.",
    author: "Kurt D.",
    role: "Senior Accounts Director",
  },
  {
    title: "exceptional quality work",
    quote:
      "JJ consistently delivered exceptional quality work, adhering to special instructions and details. His strong work ethic and commitment to excellence stood out in every project he handled.",
    author: "Kurt D.",
    role: "Senior Accounts Director",
  },
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const highlights = useMemo(
    () => [
      "exceptional attention to detail",
      "adapt quickly",
      "think creatively",
      "invaluable member",
      "Highly punctual and reliable",
      "respected everyone’s time",
      "maintained professionalism",
      "exceptional quality work",
      "commitment to excellence",
    ],
    []
  );

  const highlightSet = useMemo(
    () => new Set(highlights.map((h) => h.toLowerCase())),
    [highlights]
  );

  function highlightWith(accentTextClass: string, text: string) {
    const escaped = highlights
      .slice()
      .sort((a, b) => b.length - a.length)
      .map((h) => h.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
    const regex = new RegExp(`(${escaped.join("|")})`, "gi");
    const parts = text.split(regex);
    return parts.map((part, idx) =>
      highlightSet.has(part.toLowerCase()) ? (
        <span key={idx} className={accentTextClass}>{part}</span>
      ) : (
        <React.Fragment key={idx}>{part}</React.Fragment>
      )
    );
  }

  function scrollBy(delta: number) {
    const node = scrollRef.current;
    if (!node) return;
    node.scrollBy({ left: delta, behavior: "smooth" });
  }

  function scrollByViewport(direction: 1 | -1) {
    const node = scrollRef.current;
    if (!node) return;
    const delta = direction * node.clientWidth;
    scrollBy(delta);
  }

  // no-op

  const ACCENTS = useMemo(
    () => [
      {
        bar: "bg-gradient-to-r from-sky-400/70 via-cyan-400/70 to-sky-400/70",
        border: "border-sky-400/30",
        text: "text-sky-300",
      },
      {
        bar: "bg-gradient-to-r from-emerald-400/70 via-teal-400/70 to-emerald-400/70",
        border: "border-emerald-400/30",
        text: "text-emerald-300",
      },
      {
        bar: "bg-gradient-to-r from-rose-400/70 via-fuchsia-400/70 to-rose-400/70",
        border: "border-rose-400/30",
        text: "text-rose-300",
      },
    ],
    []
  );

  return (
    <Container>
      <Section id="testimonials" title="Testimonials">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center">
            <button
              type="button"
              aria-label="Previous"
              onClick={() => scrollByViewport(-1)}
              className="rounded-md border border-white/10 bg-white/[0.04] p-2 text-white/80 hover:bg-white/10"
            >
              {/* Left chevron */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M14 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center">
            <button
              type="button"
              aria-label="Next"
              onClick={() => scrollByViewport(1)}
              className="rounded-md border border-white/10 bg-white/[0.04] p-2 text-white/80 hover:bg-white/10"
            >
              {/* Right chevron */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M10 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory touch-pan-x px-10"
            aria-label="Testimonials carousel"
          >
            {testimonials.map((t, idx) => {
              const acc = ACCENTS[idx % ACCENTS.length];
              return (
              <figure
                key={`${t.quote}-${idx}`}
                className={`snap-center shrink-0 w-[88%] sm:w-[360px] md:w-[420px] rounded-lg border p-4 ${acc.border}`}
              >
                <div className="text-white/90 font-bold uppercase">{t.title.toUpperCase()}</div>
                <div className={`mt-2 h-0.5 w-10 rounded ${acc.bar}`} />
                <blockquote className="mt-2 text-sm text-white/80">“{highlightWith(acc.text, t.quote)}”</blockquote>
                {(t.author || t.role) && (
                  <figcaption className="mt-3 text-xs text-white/60">
                    {t.author}
                    {t.role ? ` — ${t.role}` : ""}
                  </figcaption>
                )}
              </figure>
            );})}
          </div>
        </div>
      </Section>
    </Container>
  );
}


