import React from "react";

type SectionProps = {
  id?: string;
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  className?: string;
};

export default function Section({ id, title, subtitle, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`py-14 sm:py-20 ${className}`}>
      <div className="mb-8 sm:mb-12">
        {title && (
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-white/90">
            {title}
          </h2>
        )}
        {subtitle && (
          <p className="mt-2 text-sm text-white/60 max-w-prose">{subtitle}</p>
        )}
      </div>
      {children}
    </section>
  );
}


