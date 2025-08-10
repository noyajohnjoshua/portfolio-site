"use client";

import React, { useMemo, useState } from "react";
import Container from "@/components/Container";
import Section from "@/components/Section";

type Group = { id: string; label: string; weeks: number[] };

const GROUPS: Group[] = [
  { id: "1-3", label: "Weeks 1–3", weeks: [1, 2, 3] },
  { id: "4-6", label: "Weeks 4–6", weeks: [4, 5, 6] },
  { id: "7-10", label: "Weeks 7–10", weeks: [7, 8, 9, 10] },
];

export default function Timeline() {
  const [activeGroupId, setActiveGroupId] = useState<string>(GROUPS[0].id);
  const activeGroup = useMemo(
    () => GROUPS.find((g) => g.id === activeGroupId) ?? GROUPS[0],
    [activeGroupId]
  );

  const activeSummary = useMemo(() => {
    if (activeGroup.id === "1-3") {
      return "Learned internal systems, shadowed handovers to model clear communication, and began live tracking social posts with reliable updates.";
    }
    if (activeGroup.id === "4-6") {
      return "Coordinated across creatives, accounts, and clients on campaigns — facilitating briefs and handovers while maintaining timelines and unblocking work.";
    }
    // 7–10
    return "Checked campaign compliance and QA, handled end‑to‑end movement tracking, improved tracker efficiency, and documented learnings for smooth handover.";
  }, [activeGroup.id]);

  return (
    <Container>
      <Section
        id="timeline"
        title="Week-by-Week Timeline"
        subtitle="Grouped by weeks with quick buttons and a subtle fade animation."
      >
        <div className="flex items-center justify-center gap-2">
          {GROUPS.map((g) => {
            const isActive = g.id === activeGroupId;
            return (
              <button
                key={g.id}
                type="button"
                onClick={() => setActiveGroupId(g.id)}
                aria-pressed={isActive}
                className={`rounded-md border px-3 py-2 text-sm transition-colors ${
                  isActive
                    ? "border-white/20 bg-white/[0.08] text-white"
                    : "border-white/10 text-white/80 hover:bg-white/[0.06]"
                }`}
              >
                {g.label}
              </button>
            );
          })}
        </div>

        <div key={activeGroup.id} className="mt-6 fade-in">
          <div className="rounded-lg border border-white/10 bg-white/[0.03] p-5">
            <div className="text-white/80 font-medium">{activeGroup.label}</div>
            <p className="mt-2 text-sm text-white/70">{activeSummary}</p>
          </div>
        </div>
      </Section>
    </Container>
  );
}


