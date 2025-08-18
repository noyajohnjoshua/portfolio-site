import React from "react";
import Container from "@/components/Container";

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(99,102,241,0.20),transparent_60%),radial-gradient(600px_300px_at_80%_10%,rgba(16,185,129,0.15),transparent_60%),radial-gradient(800px_400px_at_20%_0%,rgba(99,102,241,0.12),transparent_60%)]" />
      <Container>
        <div className="pt-24 sm:pt-32 pb-12">
          <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight">
            <span className="block text-white">Hi, I&apos;m JJ.</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-400">
              I design strategies that connect.
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-amber-300">
            I create campaigns that deliver.
            </span>
         
          </h1>
 
          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-emerald-200">
              OPEN TO WORK
            </span>
            <span className="inline-flex items-center rounded-full border border-sky-400/25 bg-sky-400/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-sky-200">
              AGENCY TRAINED
            </span>
            <span className="inline-flex items-center rounded-full border border-purple-400/25 bg-purple-400/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-purple-200">
              FULL SERVICE CREATIVE
            </span>
            <span className="inline-flex items-center rounded-full border border-amber-400/25 bg-amber-400/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-amber-200">
              RESULTS DRIVEN
            </span>
            <span className="inline-flex items-center rounded-full border border-rose-400/25 bg-rose-400/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-rose-200">
              DATA DRIVEN
            </span>
          </div>
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


