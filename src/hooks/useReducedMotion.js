import { useState, useEffect } from 'react';

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

/**
 * Hook to detect whether the user prefers reduced motion.
 * Listens for system media query changes and updates state reactively.
 * @returns {boolean} True if user prefers reduced motion, false otherwise.
 */
export function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return false;
    return window.matchMedia(REDUCED_MOTION_QUERY).matches;
  });

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;

    const mediaQueryList = window.matchMedia(REDUCED_MOTION_QUERY);
    const listener = (event) => {
      setPrefersReducedMotion(event.matches);
    };

    // Modern API
    if (mediaQueryList.addEventListener) {
      mediaQueryList.addEventListener('change', listener);
      return () => mediaQueryList.removeEventListener('change', listener);
    }

    // Legacy fallback
    mediaQueryList.addListener(listener);
    return () => mediaQueryList.removeListener(listener);
  }, []);

  return prefersReducedMotion;
}

export default useReducedMotion;
