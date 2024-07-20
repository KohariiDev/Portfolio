"use client";

import { createContext, useContext, useEffect, useRef } from "react";
import Lenis from "lenis";

const LenisContext = createContext();

export const useLenis = () => useContext(LenisContext);

export const LenisProvider = ({ children }) => {
  const lenisRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 1.5,
      easing: (t) => (t=== 1 ? 1 : 1 - Math.pow(2, -10 * t)),
      lerp: 0.1, 
      smooth: true,
    });
    lenisRef.current = lenisInstance;

    const raf = (time) => {
      lenisInstance.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    };

    rafRef.current = requestAnimationFrame(raf);

    return () => {
      lenisInstance.destroy();
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <LenisContext.Provider value={lenisRef.current}>
      {children}
    </LenisContext.Provider>
  );
};
