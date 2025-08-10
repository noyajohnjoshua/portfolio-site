import React from "react";
import Container from "@/components/Container";

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(99,102,241,0.20),transparent_60%),radial-gradient(600px_300px_at_80%_10%,rgba(16,185,129,0.15),transparent_60%),radial-gradient(800px_400px_at_20%_0%,rgba(99,102,241,0.12),transparent_60%)]" />
      <Container>
        <div className="pt-24 sm:pt-32 pb-12">
          <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white">
            Coordinating people, campaigns, and chaos into results.
          </h1>
          <p className="mt-4 max-w-2xl text-base sm:text-lg text-white/70">
            I interned across marketing operations and campaign coordination — keeping stakeholders aligned,
            information flowing, and deliverables moving. I focused on clear handovers, reliable tracking,
            and proactive communication.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3 text-sm">
            <a href="#contact" className="rounded-md bg-white text-black px-4 py-2 font-medium hover:bg-white/90">
              Contact
            </a>
            <a href="#work" className="rounded-md border border-white/15 px-4 py-2 text-white/80 hover:bg-white/5">
              View work
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}


