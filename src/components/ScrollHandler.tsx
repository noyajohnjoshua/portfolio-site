"use client";

import { useEffect } from "react";

export default function ScrollHandler() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Disable browser scroll restoration immediately
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Immediately scroll to top to prevent any initial scroll
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Function to handle scroll position
    const handleScroll = () => {
      const hash = window.location.hash;
      
      if (hash) {
        // First ensure we're at top
        window.scrollTo({ top: 0, behavior: 'instant' });
        
        // Then scroll to target after a short delay
        setTimeout(() => {
          const targetId = hash.substring(1); // Remove the #
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      } else {
        // If no hash, ensure we start at the top
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    };

    // Run immediately
    handleScroll();

    // Also run after a small delay to catch any late scrolls
    const timeoutId = setTimeout(() => {
      handleScroll();
    }, 0);

    // Run on window load as well
    const handleLoad = () => {
      handleScroll();
    };
    window.addEventListener('load', handleLoad);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return null;
}

