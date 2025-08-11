import React from "react";
import Container from "@/components/Container";
import Section from "@/components/Section";

export default function About() {
  return (
    <Container>
      <Section id="about" title="About" subtitle="Internship focus, communication, and process reliability.">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="sm:col-span-2 text-white/70 text-sm leading-6 space-y-4">
            <p>
              I worked hands-on coordinating campaigns and keeping teams in sync, from creative to accounts to clients.
              My focus was reducing friction at key points and making sure that campaigns are on track.
            </p>
            <p>
              I prioritize clarity, consistency, creating calculated risks, and thoughtful process improvements that help everyone move faster.
              <span className="block font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-300 to-emerald-300">
                Ultimately serving the client and the team.
              </span>
            </p>
          </div>
          <div className="sm:col-span-1">
            <div className="relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.03] p-4 text-sm">
              <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(280px_140px_at_12%_0%,rgba(56,189,248,0.10),transparent_60%),radial-gradient(260px_120px_at_95%_100%,rgba(16,185,129,0.08),transparent_60%)]" />
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-200">
                Key skills
              </div>
              <ul className="mt-3 space-y-2 text-white/80">
                <li className="flex items-center gap-2">
                  <span aria-hidden>📋</span>
                  <span>Campaign coordination and compliance</span>
                </li>
                <li className="flex items-center gap-2">
                  <span aria-hidden>💬</span>
                  <span>Team communication</span>
                </li>
                <li className="flex items-center gap-2">
                  <span aria-hidden>⚙️</span>
                  <span>Workflow optimization</span>
                </li>
                <li className="flex items-center gap-2">
                  <span aria-hidden>✅</span>
                  <span>Ad Standards Council compliance</span>
                </li>
                <li className="flex items-center gap-2">
                  <span aria-hidden>🔎</span>
                  <span>Research</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </Container>
  );
}


