"use client";

import { useState, useEffect } from "react";
import { Oswald } from "next/font/google";
import Header from "../components/header";
import { motion } from "framer-motion";
import useScrollSections from "../hooks/useScrollSections";
import useScrollToSection from "@/hooks/useScrollToSection";

import { NavProvider } from "@/context/NavContext";

// Custom hook
import { useSmoothScroll } from "../hooks/useSmoothScroll";

const oswald = Oswald({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const sections = [
  { id: "hero", color: "bg-hero-color" },
  { id: "projects", color: "bg-projects-color" },
  { id: "textPath", color: "bg-hero-color" },
  { id: "work", color: "bg-projects-color" },
  { id: "service", color: "bg-hero-color" },
];

export default function ClientLayout({ children }) {
  const activeSection = useScrollSections(sections);
  const [navbarColor, setNavbarColor] = useState(sections[0].color);
  const scrollToSection = useScrollToSection();
  useSmoothScroll();

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash) {
        scrollToSection(hash);
      }
    };

    // Handle hash changes when the component mounts
    handleHashChange();

    // Add event listener for hash changes
    window.addEventListener("hashchange", handleHashChange);

    // Clean up the event listener
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [scrollToSection]);

  useEffect(() => {
    const activeSectionDetails = sections.find(
      (section) => section.id === activeSection
    );
    if (activeSectionDetails) {
      setNavbarColor(activeSectionDetails.color);
    }
  }, [activeSection]);

  return (
    <div className={oswald.className}>
      <motion.div
        className={`${navbarColor}`}
        initial={{ backgroundColor: "transparent" }}
        animate={{ backgroundColor: navbarColor }}
        transition={{ duration: 0.5 }}
      >
        <NavProvider>
          <Header color={navbarColor} />
        </NavProvider>
      </motion.div>
      {children}
    </div>
  );
}
