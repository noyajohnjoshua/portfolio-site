import React from "react";
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
    title: "Streamlining Campaign Handovers",
    challenge: "Campaign briefs were often missing info, causing delays.",
    action:
      "Created a checklist and ran quick syncs with creatives before handover.",
    impact:
      "Reduced back-and-forth emails by ~40% in my team’s busiest week.",
  },
  {
    title: "Live Tracker Reliability",
    challenge: "Updates across trackers were inconsistent and late.",
    action:
      "Standardized the tracker, added owners and due times, and set gentle reminders.",
    impact: "Missed updates decreased noticeably; status stayed trustworthy.",
  },
  {
    title: "Stakeholder Syncs that Stick",
    challenge: "Misalignment between accounts and creatives led to rework.",
    action:
      "Introduced a 10‑minute weekly sync doc with decisions, owners, and next steps.",
    impact: "Fewer last‑minute changes and smoother approvals.",
  },
];

export default function SkillsInAction() {
  return (
    <Container>
      <Section
        id="work"
        title="Skills in Action"
        subtitle="Short case stories showing the challenge, actions taken, and impact."
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {stories.map((s) => (
            <div
              key={s.title}
              className="rounded-lg border border-white/10 bg-white/[0.03] p-4"
            >
              <div className="text-white/90 font-medium">{s.title}</div>
              <div className="mt-2 space-y-1 text-sm text-white/70">
                <p><span className="text-white/60">Challenge:</span> {s.challenge}</p>
                <p><span className="text-white/60">Action:</span> {s.action}</p>
                <p><span className="text-white/60">Impact:</span> {s.impact}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </Container>
  );
}


