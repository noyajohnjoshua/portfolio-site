"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Container from "@/components/Container";
import Section from "@/components/Section";

type WeekEntry = {
  week: number;
  title: string;
  challenge: string;
  actionResult: string;
};

const weeks: WeekEntry[] = [
  {
    week: 1,
    title: "Building the Foundation",
    challenge:
      "Adapting quickly to internal systems and live client decks for tracking social media movements.",
    actionResult:
      "Learned the tracker process, edited ASC-compliant storyboards, and earned trust through timely, accurate submissions.",
  },
  {
    week: 2,
    title: "Handling High Volume",
    challenge: "Managing a surge of 8 storyboard tasks while maintaining quality.",
    actionResult:
      "Implemented efficiency techniques (split-screen multitasking, direct comms with Social Media lead) and delivered all work on time.",
  },
  {
    week: 3,
    title: "Expanding My Role",
    challenge:
      "Balancing core duties with new involvement in activation strategy and creative brainstorming.",
    actionResult:
      "Contributed ideas in pre-production meetings, strengthened presentation skills, and adapted workflows for dual responsibilities.",
  },
  // Placeholders for Weeks 4–10 (adjust later)
  { week: 4, title: "", challenge: "TBD", actionResult: "TBD" },
  { week: 5, title: "", challenge: "TBD", actionResult: "TBD" },
  { week: 6, title: "", challenge: "TBD", actionResult: "TBD" },
  { week: 7, title: "", challenge: "TBD", actionResult: "TBD" },
  { week: 8, title: "", challenge: "TBD", actionResult: "TBD" },
  { week: 9, title: "", challenge: "TBD", actionResult: "TBD" },
  { week: 10, title: "", challenge: "TBD", actionResult: "TBD" },
];

type BadgeVariant = "challenge" | "actionResult";

function Badge({ children, variant }: { children: React.ReactNode; variant: BadgeVariant }) {
  const base =
    "inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide";
  const styles: Record<BadgeVariant, string> = {
    challenge: "border border-red-400/20 bg-red-400/10 text-red-200",
    actionResult: "border border-emerald-400/20 bg-emerald-400/10 text-emerald-200",
  };
  return <span className={`${base} ${styles[variant]}`}>{children}</span>;
}

export default function Timeline() {
  const GROUPS = useMemo(
    () => [
      { id: "1-2", title: "Laying the Groundwork", weeks: [1, 2] },
      { id: "3-4", title: "Expanding My Role", weeks: [3, 4] },
      { id: "5-6", title: "Mastering the Workflow", weeks: [5, 6] },
      { id: "7-8", title: "Driving Process Improvements", weeks: [7, 8] },
      { id: "9-10", title: "Finishing Strong", weeks: [9, 10] },
    ],
    []
  );
  const BUTTON_STYLES = useMemo(
    () => [
      { active: "border-sky-400/30 bg-sky-400/15", hover: "hover:bg-sky-400/10" },
      { active: "border-emerald-400/30 bg-emerald-400/15", hover: "hover:bg-emerald-400/10" },
      { active: "border-amber-400/30 bg-amber-400/15", hover: "hover:bg-amber-400/10" },
      { active: "border-orange-400/30 bg-orange-400/15", hover: "hover:bg-orange-400/10" },
      { active: "border-rose-400/30 bg-rose-400/15", hover: "hover:bg-rose-400/10" },
    ],
    []
  );
  const [activeGroupId, setActiveGroupId] = useState<string>(GROUPS[0].id);
  const activeGroup = useMemo(
    () => GROUPS.find((g) => g.id === activeGroupId) ?? GROUPS[0],
    [GROUPS, activeGroupId]
  );

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const dragState = useRef<{ isDown: boolean; startX: number; scrollLeft: number }>({
    isDown: false,
    startX: 0,
    scrollLeft: 0,
  });

  function onMouseDown(e: React.MouseEvent<HTMLDivElement>) {
    if (!scrollRef.current) return;
    dragState.current.isDown = true;
    dragState.current.startX = e.pageX;
    dragState.current.scrollLeft = scrollRef.current.scrollLeft;
  }

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!dragState.current.isDown || !scrollRef.current) return;
    e.preventDefault();
    const dx = e.pageX - dragState.current.startX;
    scrollRef.current.scrollLeft = dragState.current.scrollLeft - dx;
  }

  function endDrag() {
    dragState.current.isDown = false;
  }

  useEffect(() => {
    const el = itemRefs.current[activeGroupId];
    if (el) {
      try {
        el.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      } catch {
        // no-op
      }
    }
  }, [activeGroupId]);

  return (
    <Container>
      <Section
        id="timeline"
        title="Week-by-Week Timeline"
        subtitle="Use the buttons to view specific week ranges."
      >
        <div className="w-full">
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-2 overflow-x-auto scrollbar-hide touch-pan-x cursor-grab active:cursor-grabbing select-none"
            role="tablist"
            aria-label="Week ranges"
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={endDrag}
            onMouseLeave={endDrag}
          >
            {GROUPS.map((g, idx) => {
              const isActive = g.id === activeGroupId;
              const styles = BUTTON_STYLES[idx] ?? BUTTON_STYLES[0];
              return (
                <button
                  key={g.id}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveGroupId(g.id)}
                  ref={(el) => { itemRefs.current[g.id] = el; }}
                  draggable={false}
                  className={`shrink-0 min-w-[180px] sm:min-w-[220px] md:min-w-[260px] rounded-md border px-3 py-2 text-sm font-semibold transition-colors whitespace-nowrap ${
                    isActive
                      ? `${styles.active} text-white`
                      : `border-white/10 text-white/80 ${styles.hover}`
                  }`}
                >
                  {g.title}
                </button>
              );
            })}
          </div>
        </div>

        <ol key={activeGroup.id} className="fade-in mt-8 w-full grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch">
          {weeks
            .filter((w) => activeGroup.weeks.includes(w.week))
            .map((w) => (
              <li key={w.week} className="rounded-lg border border-white/10 bg-white/[0.03] p-4 h-full">
                <div className="text-white/90 font-medium">
                  {`Week ${w.week}${w.title ? `: ${w.title}` : ""}`}
                </div>
                <div className="mt-3 space-y-3 text-sm text-white/70 text-left flex flex-col">
                  <div>
                    <Badge variant="challenge">Challenge</Badge>
                    <p className="mt-1">{w.challenge}</p>
                  </div>
                  <div>
                    <Badge variant="actionResult">Action & Result</Badge>
                    <p className="mt-1">{w.actionResult}</p>
                  </div>
                </div>
              </li>
            ))}
        </ol>
        </div>
      </Section>
    </Container>
  );
}


