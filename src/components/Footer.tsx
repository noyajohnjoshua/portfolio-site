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
          <div className="flex flex-wrap items-center justify-end gap-3 gap-y-2 text-sm w-full sm:w-auto">
            <a
              href="mailto:noyajohnjoshua@gmail.com"
              className="rounded-md border border-white/15 px-3 py-2 text-white/80 hover:bg-white/5"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/john-joshua-noya-20781423b/"
              className="rounded-md border border-[#0A66C2]/40 px-3 py-2 text-[#0A66C2] hover:bg-[#0A66C2]/10"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/jj.noya/"
              className="relative inline-flex rounded-md p-[1px] hover:opacity-90 bg-gradient-to-r from-[#f58529] via-[#dd2a7b] via-[#8134af] to-[#515bd4]"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <span className="inline-flex rounded-[inherit] px-3 py-2" style={{ backgroundColor: "var(--background)" }}>
                <span className="bg-gradient-to-r from-[#f58529] via-[#dd2a7b] via-[#8134af] to-[#515bd4] bg-clip-text text-transparent">
                  Instagram
                </span>
              </span>
            </a>
            <a
              href="https://wa.me/15147140129"
              className="rounded-md border border-[#25D366]/40 px-3 py-2 text-[#25D366] hover:bg-[#25D366]/10"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              WhatsApp
            </a>
            <a
              href="/cv.pdf"
              className="rounded-md bg-white text-black px-3 py-2 font-medium hover:bg-white/90"
              download="JJ - Resume"
            >
              Download Resume
            </a>
          </div>
        </div>
        <div className="mt-6 text-xs text-white/40">© {new Date().getFullYear()} JJ Noya</div>
      </Container>
    </footer>
  );
}


