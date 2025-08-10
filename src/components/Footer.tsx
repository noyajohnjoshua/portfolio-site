import React from "react";
import Container from "@/components/Container";

export default function Footer() {
  return (
    <footer id="contact" className="py-12 border-t border-white/10">
      <Container>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="text-white/80 font-medium">Get in touch</div>
            <p className="text-sm text-white/60 mt-1">Simple: email, LinkedIn, optional CV download.</p>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <a
              href="mailto:hello@example.com"
              className="rounded-md border border-white/15 px-3 py-2 text-white/80 hover:bg-white/5"
            >
              Email
            </a>
            <a
              href="#"
              className="rounded-md border border-white/15 px-3 py-2 text-white/80 hover:bg-white/5"
            >
              LinkedIn
            </a>
            <a
              href="/cv.pdf"
              className="rounded-md border border-white/15 px-3 py-2 text-white/80 hover:bg-white/5"
              download
            >
              Download CV
            </a>
          </div>
        </div>
        <div className="mt-6 text-xs text-white/40">© {new Date().getFullYear()} JJ Noya</div>
      </Container>
    </footer>
  );
}


