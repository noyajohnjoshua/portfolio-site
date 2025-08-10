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
              I worked hands-on coordinating campaigns and keeping teams in sync — from creative to accounts to clients.
              My focus was reducing friction at handover points and making sure trackers told the real story.
            </p>
            <p>
              I prioritize clarity, consistent updates, and thoughtful process improvements that help everyone move faster.
            </p>
          </div>
          <div className="sm:col-span-1">
            <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4 text-sm text-white/70">
              <div className="font-medium text-white/90">Key skills</div>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>Campaign coordination</li>
                <li>Stakeholder communication</li>
                <li>Task tracking and process improvement</li>
                <li>Managing live trackers / reporting</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </Container>
  );
}


