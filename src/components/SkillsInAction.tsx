"use client";

import React, { useRef, useState, useEffect } from "react";
import Container from "@/components/Container";
import Section from "@/components/Section";

type Story = {
  title: string;
  challenge: string;
  action: string;
  impact: string;
  media?: Array<{
    type: 'image' | 'video';
    url: string;
    alt?: string;
  }>;
};

const stories: Story[] = [
  {
    title: "Content Production Workflow",
    challenge:
      "Managed four soccer league accounts requiring high-volume daily content while maintaining brand consistency.",
    action:
      "Streamlined production with trend monitoring, real-time event capture, and efficient editing workflows.",
    impact:
      "Delivered consistent posting schedules, strengthened social presence, and built an efficient content pipeline supporting league goals.",
    media: [
      {
        type: 'image',
        url: 'https://www.instagram.com/reel/DIfFjFnAWAA/embed/?theme=dark',
        alt: 'Content Production Reel 1'
      },
      {
        type: 'image', 
        url: 'https://www.instagram.com/reel/C-db3iKATPR/embed/?theme=dark',
        alt: 'Content Production Reel 2'
      },
      {
        type: 'image',
        url: 'https://www.instagram.com/reel/C-xS8cyqbzJ/embed/?theme=dark',
        alt: 'Content Production Reel 3'
      },
      {
        type: 'image',
        url: 'https://www.instagram.com/p/C-V9o2nopyt/embed/?theme=dark',
        alt: 'Content Production Post'
      }
    ]
  },
  {
    title: "Brand Identity & Content Strategy",
    challenge:
      "Multiple soccer leagues needed cohesive branding to stand out in a competitive market.",
    action:
      "Built a visual content strategy combining design, photography, and video storytelling to capture each league's essence.",
    impact:
      "Boosted brand recognition and audience engagement with consistent, high-quality visual content.",
    media: [
      {
        type: 'image',
        url: 'https://www.instagram.com/p/DIKuhHUuWDZ/embed/?theme=dark',
        alt: 'Corporate Soccer Reel'
      },
      {
        type: 'image', 
        url: 'https://www.instagram.com/p/DJK6avCI-oL/embed/?theme=dark',
        alt: 'Premiership Montreal Post'
      },
      {
        type: 'image',
        url: 'https://www.instagram.com/p/C93UOOOoeMj/embed/?theme=dark',
        alt: 'FIFCO Official Post'
      },
      {
        type: 'image',
        url: 'https://www.instagram.com/reel/DJE7OR5ooV1/embed/?theme=dark',
        alt: 'Liga 7 Reel'
      }
    ]
  },
  {
    title: "Market Strategy Development",
    challenge:
      "The company needed clearer direction in a competitive market to identify opportunities for growth.",
    action:
      "Analyzed market trends and competitor activities, translating insights into data-driven strategic plans.",
    impact:
      "Enhanced operational efficiency and informed decision-making, contributing to improved profitability.",
    media: [
      {
        type: 'image',
        url: 'https://drive.google.com/file/d/1NmDwWxLORd72kIbKKIsqOw7UYrqJv4bl/preview',
        alt: 'Market Strategy Analysis Document'
      }
    ]
  },
  {
    title: "Brand Identity Strengthening",
    challenge:
      "Inconsistent branding weakened recognition and reduced audience trust.",
    action:
      "Established brand guidelines and created cohesive, impactful materials that aligned with identity.",
    impact:
      "Boosted brand recognition and customer engagement through consistent, memorable branding.",
    media: [
      {
        type: 'image',
        url: 'https://drive.google.com/file/d/1kWhhaqF9dp2yV7gRG0E0P0U361P3sqkJ/preview',
        alt: 'Brand Guidelines - Logomark and Wordmark'
      },
      {
        type: 'image', 
        url: 'https://drive.google.com/file/d/1d8Kcws14POH_Lvd8iiMAfTNO7L14aifC/preview',
        alt: 'Brand Guidelines - Color Palette and Logo Variations'
      }
    ]
  },
  {
    title: "Creative Content Systems",
    challenge:
      "Content production across multiple channels was fragmented, limiting engagement.",
    action:
      "Built and managed content calendars, created engaging multimedia content, and designed compelling graphics using Adobe Creative Suite.",
    impact:
      "Streamlined production workflows, increased audience interaction, and strengthened the company's overall visual presence.",
    media: [
      {
        type: 'image',
        url: 'https://drive.google.com/file/d/1429Pbi3CFBY5WcMXtx6NKUyFl4I-rXWy/preview',
        alt: 'Creative Content System Documentation'
      },
      {
        type: 'image',
        url: 'https://drive.google.com/file/d/1F4ADFvBSeMLCW2CohZ9ZqTJIcHl4JyPp/preview',
        alt: 'Content Production Workflow Guide'
      }
    ]
  },
  {
    title: "ASC Compliance & Documentation Streamlining",
    challenge:
      "Complex ASC submissions with varying requirements risked delays and compliance issues.",
    action:
      "Standardized documentation using client research and test results, formatting creative materials to meet ASC standards across campaigns.",
    impact:
      "Achieved 100% compliance approval while accelerating submission timelines, enabling faster campaign launches.",
  },
  {
    title: "Campaign Tracking System Optimization",
    challenge:
      "Campaign trackers lacked visibility, causing confusion across teams and delaying approvals during peak periods.",
    action:
      "Redesigned the workflow with real-time status updates and clearer communication protocols between Social Media and Creative teams.",
    impact:
      "Improved accountability and reduced turnaround time, eliminating bottlenecks during high-volume campaigns.",
  },
];

type BadgeVariant = "challenge" | "action" | "impact";

function Badge({ children, variant }: { children: React.ReactNode; variant: BadgeVariant }) {
  const base =
    "inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium uppercase tracking-wide";
  const styleMap: Record<BadgeVariant, string> = {
    challenge: "border border-red-400/20 bg-red-400/10 text-red-200",
    action: "border border-sky-400/20 bg-sky-400/10 text-sky-200",
    impact: "border border-emerald-400/20 bg-emerald-400/10 text-emerald-200",
  };
  return <span className={`${base} ${styleMap[variant]}`}>{children}</span>;
}

export default function SkillsInAction() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Auto-scroll to center the active button when it changes
  useEffect(() => {
    if (isMounted && scrollRef.current) {
      const activeButton = scrollRef.current.children[activeStoryIndex] as HTMLElement;
      if (activeButton) {
        const container = scrollRef.current;
        const buttonLeft = activeButton.offsetLeft;
        const buttonWidth = activeButton.offsetWidth;
        const containerWidth = container.offsetWidth;
        
        const scrollLeft = buttonLeft - (containerWidth / 2) + (buttonWidth / 2);
        container.scrollTo({
          left: scrollLeft,
          behavior: 'smooth'
        });
      }
    }
  }, [activeStoryIndex, isMounted]);

  function highlightCustom(phrases: string[], accentTextClass: string, text: string) {
    if (!phrases || phrases.length === 0) return text;
    const escaped = phrases
      .slice()
      .sort((a, b) => b.length - a.length)
      .map((h) => h.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
    if (escaped.length === 0) return text;
    const regex = new RegExp(`(${escaped.join("|")})`, "gi");
    const parts = text.split(regex);
    const lower = phrases.map((p) => p.toLowerCase());
    return parts.map((part, idx) =>
      lower.includes(part.toLowerCase()) ? (
        <span key={idx} className={accentTextClass}>{part}</span>
      ) : (
        <React.Fragment key={idx}>{part}</React.Fragment>
      )
    );
  }

  const storyHighlights = [
    {
      challenge: ["four soccer league accounts", "high-volume daily content", "brand consistency"],
      action: ["streamlined production", "trend monitoring", "real-time event capture", "efficient editing workflows"],
      impact: ["consistent posting schedules", "strengthened social presence", "efficient content pipeline", "league goals"],
    },
    {
      challenge: ["multiple soccer leagues", "cohesive branding", "competitive market"],
      action: ["visual content strategy", "design", "photography", "video storytelling", "league's essence"],
      impact: ["brand recognition", "audience engagement", "consistent, high-quality visual content"],
    },
    {
      challenge: ["company needed clearer direction", "competitive market", "opportunities for growth"],
      action: ["analyzed market trends", "competitor activities", "data-driven strategic plans"],
      impact: ["enhanced operational efficiency", "informed decision-making", "improved profitability"],
    },
    {
      challenge: ["inconsistent branding", "weakened recognition", "reduced audience trust"],
      action: ["established brand guidelines", "cohesive materials", "aligned with identity"],
      impact: ["boosted brand recognition", "customer engagement", "consistent, memorable branding"],
    },
    {
      challenge: ["content production", "multiple channels", "fragmented", "limiting engagement"],
      action: ["content calendars", "multimedia content", "compelling graphics", "Adobe Creative Suite"],
      impact: ["streamlined production workflows", "increased audience interaction", "strengthened visual presence"],
    },
    {
      challenge: ["complex ASC submissions", "varying requirements", "delays and compliance issues"],
      action: ["standardized documentation", "client research and test results", "ASC standards", "creative materials"],
      impact: ["100% compliance approval", "accelerating submission timelines", "faster campaign launches"],
    },
    {
      challenge: ["campaign trackers", "lacked visibility", "confusion across teams", "delaying approvals"],
      action: ["redesigned workflow", "real-time status updates", "clearer communication protocols", "Social Media and Creative teams"],
      impact: ["improved accountability", "reduced turnaround time", "eliminating bottlenecks", "high-volume campaigns"],
    },
  ];

  function nextMedia() {
    const currentStory = stories[activeStoryIndex];
    if (currentStory.media) {
      setActiveMediaIndex((prev) => (prev + 1) % currentStory.media!.length);
    }
  }

  function prevMedia() {
    const currentStory = stories[activeStoryIndex];
    if (currentStory.media) {
      setActiveMediaIndex((prev) => (prev - 1 + currentStory.media!.length) % currentStory.media!.length);
    }
  }

  const currentStory = stories[activeStoryIndex];

  // Don't render until component is mounted to prevent hydration mismatch
  if (!isMounted) {
    return (
      <Container>
        <Section
          id="work"
          title="Skills in Action"
          subtitle="Short case stories showing the challenge, actions taken, and impact."
        >
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2 max-w-full" ref={scrollRef}>
                {stories.map((_, idx) => (
                  <div
                    key={idx}
                    className="shrink-0 px-4 py-2 rounded-md text-sm font-medium bg-white/[0.04] border border-white/10 text-white/70 whitespace-nowrap"
                  >
                    {idx === 0 ? "Content Production" : idx === 1 ? "Brand Identity" : idx === 2 ? "Market Strategy" : idx === 3 ? "Brand Strengthening" : idx === 4 ? "Creative Systems" : idx === 5 ? "ASC Compliance" : "Tracking System"}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/[0.03] p-6">
              <div className="text-white/90 text-xl font-medium mb-4">{stories[0].title}</div>
              <div className="h-0.5 w-16 rounded bg-white/20 mb-6" />
              <div className="space-y-4 text-sm text-white/70">
                <div>
                  <Badge variant="challenge">CHALLENGE</Badge>
                  <p className="mt-2 leading-relaxed">{stories[0].challenge}</p>
                </div>
                <div>
                  <Badge variant="action">ACTION</Badge>
                  <p className="mt-2 leading-relaxed">{stories[0].action}</p>
                </div>
                <div>
                  <Badge variant="impact">IMPACT</Badge>
                  <p className="mt-2 leading-relaxed">{stories[0].impact}</p>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </Container>
    );
  }

  return (
    <Container>
      <Section
        id="work"
        title="Skills in Action"
        subtitle="Short case stories showing the challenge, actions taken, and impact."
      >
        <div className="max-w-4xl mx-auto">
          {/* Story Navigation */}
          <div className="flex justify-center mb-8">
            <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2 max-w-full" ref={scrollRef}>
              {stories.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setActiveStoryIndex(idx);
                    setActiveMediaIndex(0);
                  }}
                  className={`shrink-0 px-4 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
                    idx === activeStoryIndex
                      ? "bg-sky-400/20 border border-sky-400/30 text-sky-200"
                      : "bg-white/[0.04] border border-white/10 text-white/70 hover:bg-white/[0.08]"
                  }`}
                >
                  {idx === 0 ? "Content Production" : idx === 1 ? "Brand Identity" : idx === 2 ? "Market Strategy" : idx === 3 ? "Brand Strengthening" : idx === 4 ? "Creative Systems" : idx === 5 ? "ASC Compliance" : "Tracking System"}
                </button>
              ))}
            </div>
          </div>

          {/* Single Card Display */}
          <div className="relative">
            <div className="rounded-lg border border-white/10 bg-white/[0.03] p-6">
              <div className="text-white/90 text-xl font-medium mb-4">{currentStory.title}</div>
              <div className="h-0.5 w-16 rounded bg-white/20 mb-6" />
              
              {/* Media Carousel */}
              {currentStory.media && currentStory.media.length > 0 && (
                <div className="mb-6">
                  <div className="relative">
                    <div className="relative w-full rounded-lg overflow-hidden bg-white/5 border border-white/10">
                      {currentStory.media[activeMediaIndex] && currentStory.media[activeMediaIndex].type === 'image' ? (
                        <div className="w-full flex justify-center">
                          <iframe
                            src={currentStory.media[activeMediaIndex].url}
                            className={`w-full ${
                              // Different sizing based on story type
                              activeStoryIndex === 0 || activeStoryIndex === 1 
                                ? 'max-w-sm' // Instagram embeds - keep compact
                                : 'max-w-4xl' // Brand guidelines - full width
                            }`}
                            style={{ 
                              height: activeStoryIndex === 0 || activeStoryIndex === 1 ? '600px' : 'auto',
                              minHeight: activeStoryIndex === 0 || activeStoryIndex === 1 ? '600px' : '500px',
                              backgroundColor: '#000000'
                            }}
                            title={currentStory.media[activeMediaIndex].alt || `Media ${activeMediaIndex + 1}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            scrolling="no"
                            onLoad={(e) => {
                              // Only apply dynamic sizing for brand guideline stories (index 5+)
                              if (activeStoryIndex >= 5) {
                                const iframe = e.target as HTMLIFrameElement;
                                if (iframe.contentWindow) {
                                  try {
                                    const iframeDoc = iframe.contentWindow.document;
                                    if (iframeDoc.body) {
                                      const img = iframeDoc.querySelector('img');
                                      if (img) {
                                        const aspectRatio = img.naturalHeight / img.naturalWidth;
                                        const newHeight = Math.max(500, iframe.offsetWidth * aspectRatio);
                                        iframe.style.height = `${newHeight}px`;
                                      }
                                    }
                                  } catch {
                                    // Cross-origin restrictions may prevent access
                                    console.log('Could not access iframe content for sizing');
                                  }
                                }
                              }
                            }}
                          />
                        </div>
                      ) : currentStory.media[activeMediaIndex] && currentStory.media[activeMediaIndex].type === 'video' ? (
                        <div className="w-full flex justify-center">
                          <iframe
                            src={currentStory.media[activeMediaIndex].url}
                            className="w-full max-w-xl"
                            style={{ 
                              height: '400px',
                              backgroundColor: '#000000'
                            }}
                            title={currentStory.media[activeMediaIndex].alt || `Media ${activeMediaIndex + 1}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                      ) : null}
                    </div>
                    
                    {/* Media Navigation Arrows */}
                    {currentStory.media && currentStory.media.length > 1 && (
                      <>
                        <button
                          onClick={prevMedia}
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                          aria-label="Previous media"
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </button>
                        <button
                          onClick={nextMedia}
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                          aria-label="Next media"
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </button>
                      </>
                    )}
                  </div>
                  
                  {/* Media Indicators */}
                  {currentStory.media && currentStory.media.length > 1 && (
                    <div className="flex justify-center mt-4 gap-2">
                      {currentStory.media.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveMediaIndex(idx)}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            idx === activeMediaIndex ? "bg-sky-400" : "bg-white/30"
                          }`}
                          aria-label={`Go to media ${idx + 1}`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              )}
              
              {/* Story Content */}
              <div className="space-y-4 text-sm text-white/70">
                <div>
                  <Badge variant="challenge">CHALLENGE</Badge>
                  <p className="mt-2 leading-relaxed">{highlightCustom(storyHighlights[activeStoryIndex]?.challenge ?? [], "text-red-300", currentStory.challenge)}</p>
                </div>
                <div>
                  <Badge variant="action">ACTION</Badge>
                  <p className="mt-2 leading-relaxed">{highlightCustom(storyHighlights[activeStoryIndex]?.action ?? [], "text-sky-300", currentStory.action)}</p>
                </div>
                <div>
                  <Badge variant="impact">IMPACT</Badge>
                  <p className="mt-2 leading-relaxed">{highlightCustom(storyHighlights[activeStoryIndex]?.impact ?? [], "text-emerald-300", currentStory.impact)}</p>
                </div>
                
                {/* Skills Used in This Story */}
                <div className="mt-6 pt-4 border-t border-white/10">
                  <div className="text-xs font-medium text-white/60 mb-3 uppercase tracking-wide">Skills Applied in This Story</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {(() => {
                      // Define skills for each story
                      const storySkills = [
                        // Story 0: Content Production
                        {
                          planning: ["Research", "Strategy", "Communication"],
                          execution: ["Videography", "Video Editing", "Social Media"]
                        },
                        // Story 1: Brand Identity
                        {
                          planning: ["Research", "Strategy", "Communication"],
                          execution: ["Videography", "Video Editing", "Social Media"]
                        },
                        // Story 2: Market Strategy
                        {
                          planning: ["Research", "Strategy", "Communication", "Auditing"],
                          execution: ["Presentation", "Graphic Design"]
                        },
                        // Story 3: Brand Strengthening
                        {
                          planning: ["Research", "Strategy", "Communication"],
                          execution: ["Presentation", "Graphic Design", "Branding"]
                        },
                        // Story 4: Creative Systems
                        {
                          planning: ["Calendar", "Strategy", "Planning", "Research", "Communication"],
                          execution: ["Graphic Design", "Social Media", "Copywriting", "Branding"]
                        },
                        // Story 5: ASC Compliance
                        {
                          planning: ["Research", "Documentation", "Quality Assurance"],
                          execution: ["Compliance", "Workflow", "Communication"]
                        },
                        // Story 6: Tracking System
                        {
                          planning: ["Workflow Design", "System Analysis", "Process Improvement"],
                          execution: ["Real-Time Reporting", "Communication", "Management"]
                        }
                      ];

                      // Define consistent colors for each skill
                      const skillColors: Record<string, string> = {
                        // Planning Skills
                        "Research": "border-blue-400/20 bg-blue-400/10 text-blue-200",
                        "Strategy": "border-indigo-400/20 bg-indigo-400/10 text-indigo-200",
                        "Communication": "border-cyan-400/20 bg-cyan-400/10 text-cyan-200",
                        "Auditing": "border-purple-400/20 bg-purple-400/10 text-purple-200",
                        "Documentation": "border-slate-400/20 bg-slate-400/10 text-slate-200",
                        "Quality Assurance": "border-emerald-400/20 bg-emerald-400/10 text-emerald-200",
                        "Calendar": "border-orange-400/20 bg-orange-400/10 text-orange-200",
                        "Planning": "border-amber-400/20 bg-amber-400/10 text-amber-200",
                        "Workflow Design": "border-rose-400/20 bg-rose-400/10 text-rose-200",
                        "System Analysis": "border-violet-400/20 bg-violet-400/10 text-violet-200",
                        "Process Improvement": "border-teal-400/20 bg-teal-400/10 text-teal-200",
                        
                        // Execution Skills
                        "Videography": "border-red-400/20 bg-red-400/10 text-red-200",
                        "Video Editing": "border-pink-400/20 bg-pink-400/10 text-pink-200",
                        "Social Media": "border-green-400/20 bg-green-400/10 text-green-200",
                        "Presentation": "border-yellow-400/20 bg-yellow-400/10 text-yellow-200",
                        "Graphic Design": "border-lime-400/20 bg-lime-400/10 text-lime-200",
                        "Branding": "border-fuchsia-400/20 bg-fuchsia-400/10 text-fuchsia-200",
                        "Copywriting": "border-sky-400/20 bg-sky-400/10 text-sky-200",
                        "Compliance": "border-stone-400/20 bg-stone-400/10 text-stone-200",
                        "Workflow": "border-neutral-400/20 bg-neutral-400/10 text-neutral-200",
                        "Real-Time Reporting": "border-amber-400/20 bg-amber-400/10 text-amber-200",
                        "Management": "border-blue-400/20 bg-blue-400/10 text-blue-200"
                      };

                      const currentSkills = storySkills[activeStoryIndex] || storySkills[0];

                      return (
                        <>
                          <div className="space-y-2">
                            <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-sky-200">
                              Campaign Planning Skills
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                              {currentSkills.planning.map((skill, idx) => (
                                <span 
                                  key={idx} 
                                  className={`inline-flex items-center rounded-full border px-2 py-1 text-[10px] ${
                                    skillColors[skill] || "border-white/10 bg-white/5 text-white/60"
                                  }`}
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-emerald-200">
                              Campaign Execution Skills
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                              {currentSkills.execution.map((skill, idx) => (
                                <span 
                                  key={idx} 
                                  className={`inline-flex items-center rounded-full border px-2 py-1 text-[10px] ${
                                    skillColors[skill] || "border-white/10 bg-white/5 text-white/60"
                                  }`}
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </>
                      );
                    })()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Container>
  );
}


