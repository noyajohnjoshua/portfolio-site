import React from "react";
import Container from "@/components/Container";
import Section from "@/components/Section";

export default function About() {
  return (
    <Container>
      <Section id="about" title="About">
        <div className="space-y-6">
          <div className="text-white/70 text-sm leading-6 space-y-6 max-w-4xl">
            <h2 className="text-2xl sm:text-3xl font-semibold leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-400">
                Creative Marketing Strategist delivering end-to-end campaigns from concept to launch.
              </span>
            </h2>
            
            <p className="text-base leading-7 text-white/70">
              I bring experience from a top creative agency, where I learned how to align brand goals with audience insights and turn strategies into campaigns that execute with impact. I bridge strategy and execution—developing brand narratives while crafting the creative assets that bring them to life.
            </p>
            <p className="text-base leading-7 text-white/70">
              From campaign planning to delivery, I manage the complete creative process to keep messages sharp and results measurable.
            </p>
            
            <p className="text-lg sm:text-xl font-medium leading-relaxed">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-amber-300">
                Strategic vision meets creative execution. Lets make your brand connect and convert.
              </span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.03] p-6 text-sm">
              <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(280px_140px_at_12%_0%,rgba(56,189,248,0.10),transparent_60%),radial-gradient(260px_120px_at_95%_100%,rgba(16,185,129,0.08),transparent_60%)]" />
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1.5 text-[12px] font-semibold uppercase tracking-wide text-sky-200">
                Campaign Planning Skills
              </div>
              <ul className="mt-4 space-y-3 text-white/80">
                <li className="flex items-center gap-3">
                  <span aria-hidden>🔎</span>
                  <span>Research</span>
                </li>
                <li className="flex items-center gap-3">
                  <span aria-hidden>🎯</span>
                  <span>Strategy</span>
                </li>
                <li className="flex items-center gap-3">
                  <span aria-hidden>📊</span>
                  <span>Performance and Metric Tracking</span>
                </li>
                <li className="flex items-center gap-3">
                  <span aria-hidden>📋</span>
                  <span>Coordination and Compliance</span>
                </li>
                <li className="flex items-center gap-3">
                  <span aria-hidden>💬</span>
                  <span>Team Communication</span>
                </li>
                <li className="flex items-center gap-3">
                  <span aria-hidden>⚙️</span>
                  <span>Workflow Optimization</span>
                </li>
              </ul>
            </div>

            <div className="relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.03] p-6 text-sm">
              <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(280px_140px_at_12%_0%,rgba(16,185,129,0.10),transparent_60%),radial-gradient(260px_120px_at_95%_100%,rgba(56,189,248,0.08),transparent_60%)]" />
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-[12px] font-semibold uppercase tracking-wide text-emerald-200">
                Campaign Execution Skills
              </div>
              <ul className="mt-4 space-y-3 text-white/80">
                <li className="flex items-center gap-3">
                  <span aria-hidden>📱</span>
                  <span>Social Media</span>
                </li>
                <li className="flex items-center gap-3">
                  <span aria-hidden>🎨</span>
                  <span>Graphic Design</span>
                </li>
                <li className="flex items-center gap-3">
                  <span aria-hidden>🎬</span>
                  <span>Video Editing</span>
                </li>
                <li className="flex items-center gap-3">
                  <span aria-hidden>✍️</span>
                  <span>Copywriting</span>
                </li>
                <li className="flex items-center gap-3">
                  <span aria-hidden>📝</span>
                  <span>Content Creation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </Container>
  );
}


