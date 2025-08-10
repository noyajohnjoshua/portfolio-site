import React from "react";
import Container from "@/components/Container";
import Section from "@/components/Section";

type Testimonial = {
  quote: string;
  author?: string;
  role?: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "JJ was the glue between our creative and accounts teams — kept everyone on track.",
    author: "Creative Lead",
  },
  {
    quote: "He spots gaps before they turn into problems.",
    author: "Account Manager",
  },
];

export default function Testimonials() {
  return (
    <Container>
      <Section id="testimonials" title="Testimonials">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {testimonials.map((t) => (
            <figure
              key={t.quote}
              className="rounded-lg border border-white/10 bg-white/[0.03] p-4"
            >
              <blockquote className="text-sm text-white/80">“{t.quote}”</blockquote>
              {(t.author || t.role) && (
                <figcaption className="mt-3 text-xs text-white/60">
                  {t.author}
                  {t.role ? ` — ${t.role}` : ""}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      </Section>
    </Container>
  );
}


