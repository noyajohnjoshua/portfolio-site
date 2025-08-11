"use client";

import React, { useRef } from "react";
import Container from "@/components/Container";
import Section from "@/components/Section";

type Story = {
  title: string;
  challenge: string;
  action: string;
  impact: string;
};

const stories: Story[] = [
  {
    title: "Streamlining Campaign Documents",
    challenge:
      "Incomplete or non-compliant materials for ASC approval caused delays and additional revisions.",
    action:
      "Diligently followed the checklist for ASC-compliant storyboards and supporting claim documents.",
    impact:
      "Minimized compliance issues, reduced revision cycles, and secured faster approvals even during peak workload periods.",
  },
  {
    title: "Live Tracker Optimization",
    challenge:
      "Inconsistent movement updates in the live tracker reduced visibility and trust between client and internal teams.",
    action:
      "Redesigned and standardized the tracker format without disrupting existing workflows, introducing a clear status view accessible to both parties.",
    impact:
      "Significantly improved accuracy and timeliness of updates, establishing the tracker as a reliable single source of truth—strengthening collaboration and decision-making.",
  },
  {
    title: "Competitive Scan for Campaign Taglines",
    challenge:
      "Client needed a competitive scan to assess the uniqueness and market fit of a proposed campaign tagline.",
    action:
      "Researched industry trends, competitor usage, and market positioning; compiled findings into a clear reference document.",
    impact:
      "Provided the creative team with data-driven insights, enabling stronger positioning and confident client approvals.",
  },
  {
    title: "Research for Award-Driven Campaign",
    challenge:
      "Identifying credible professionals to provide authoritative opinions and data for a high-visibility award campaign.",
    action:
      "Sourced and gathered potential experts, ensuring their relevance, credibility, and alignment with campaign goals.",
    impact:
      "Equipped the team with high-quality contacts, increasing the campaign’s legitimacy and chances for recognition.",
  },
];

type BadgeVariant = "challenge" | "action" | "impact";

function Badge({ children, variant }: { children: React.ReactNode; variant: BadgeVariant }) {
  const base =
    "inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium uppercase tracking-wide";
  const styleMap: Record<BadgeVariant, string> = {
    challenge: "border border-red-400/20 bg-red-400/10 text-red-200",
    action: "border border-sky-400/20 bg-sky-400/10 text-sky-200",
    impact: "border border-emerald-400/20 bg-emerald-400/10 text-emerald-200",
  };
  return <span className={`${base} ${styleMap[variant]}`}>{children}</span>;
}

export default function SkillsInAction() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  function highlightCustom(phrases: string[], accentTextClass: string, text: string) {
    if (!phrases || phrases.length === 0) return text;
    const escaped = phrases
      .slice()
      .sort((a, b) => b.length - a.length)
      .map((h) => h.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
    if (escaped.length === 0) return text;
    const regex = new RegExp(`(${escaped.join("|")})`, "gi");
    const parts = text.split(regex);
    const lower = phrases.map((p) => p.toLowerCase());
    return parts.map((part, idx) =>
      lower.includes(part.toLowerCase()) ? (
        <span key={idx} className={accentTextClass}>{part}</span>
      ) : (
        <React.Fragment key={idx}>{part}</React.Fragment>
      )
    );
  }

  const storyHighlights = [
    {
      challenge: ["incomplete or non-compliant materials"],
      action: ["supporting claim", "documents"],
      impact: ["minimized compliance issues", "faster approvals"],
    },
    {
      challenge: ["inconsistent movement updates", "reduced visibility and trust"],
      action: [
        "redesigned and standardized the tracker format without disrupting existing workflows",
      ],
      impact: ["significantly improved accuracy", "reliable single source of truth"],
    },
    {
      challenge: ["competitive scan to assess the uniqueness"],
      action: [
        "researched industry trends",
        "competitor usage",
        "market positioning",
      ],
      impact: ["data-driven insights"],
    },
    {
      challenge: [
        "identifying credible professionals",
        "provide authoritative opinions",
      ],
      action: ["Sourced and gathered potential experts"],
      impact: ["high-quality contacts"],
    },
  ];

  // Neutral borders; color only for keyword highlights and badges

  function scrollByViewport(direction: 1 | -1) {
    const node = scrollRef.current;
    if (!node) return;
    node.scrollBy({ left: direction * node.clientWidth, behavior: "smooth" });
  }

  return (
    <Container>
      <Section
        id="work"
        title="Skills in Action"
        subtitle="Short case stories showing the challenge, actions taken, and impact."
      >
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center">
            <button
              type="button"
              aria-label="Previous"
              onClick={() => scrollByViewport(-1)}
              className="rounded-md border border-white/10 bg-white/[0.04] p-2 text-white/80 hover:bg-white/10"
            >
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
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M10 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory touch-pan-x px-10"
            aria-label="Skills in action carousel"
          >
            {stories.map((s, idx) => {
              return (
                <div
                  key={s.title}
                  className={`snap-center shrink-0 w-[88%] sm:w-[360px] md:w-[420px] rounded-lg border border-white/10 bg-white/[0.03] p-4`}
                >
                  <div className="text-white/90 font-medium">{s.title}</div>
                  <div className="mt-2 h-0.5 w-10 rounded bg-white/20" />
                  <div className="mt-3 space-y-3 text-sm text-white/70 text-left">
                    <div>
                      <Badge variant="challenge">CHALLENGE</Badge>
                      <p className="mt-1">{highlightCustom(storyHighlights[idx]?.challenge ?? [], "text-red-300", s.challenge)}</p>
                    </div>
                    <div>
                      <Badge variant="action">ACTION</Badge>
                      <p className="mt-1">{highlightCustom(storyHighlights[idx]?.action ?? [], "text-sky-300", s.action)}</p>
                    </div>
                    <div>
                      <Badge variant="impact">IMPACT</Badge>
                      <p className="mt-1">{highlightCustom(storyHighlights[idx]?.impact ?? [], "text-emerald-300", s.impact)}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>
    </Container>
  );
}


