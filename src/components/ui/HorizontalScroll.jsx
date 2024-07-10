"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import FirstPanel from "./horizontal-components/FirstPanel";
import SecondPanel from "./horizontal-components/SecondPanel";
import ThirdPanel from "./horizontal-components/ThirdPanel";
import FourthPanel from "./horizontal-components/FourthPanel";

import BackButton from "./horizontal-components/BackButton";
import VisitButton from "./horizontal-components/VisitButton";

import useWindowSize from "@/hooks/useWindowSize";

import PageMobile from "../PageMobile";

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = ({ project }) => {
  const { width } = useWindowSize();
  const containerRef = useRef(null);

  useEffect(() => {
    if (width >= 768) {
      let sections = gsap.utils.toArray(".panel");
      let totalWidth = sections.length * window.innerWidth;

      let scrollTween = gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 0.1,
          end: `+=${totalWidth}`,
        },
      });

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, [width]);

  const isMobile = width < 768;

  return (
    <div ref={containerRef} style={{ overflow: "hidden" }} className="relative">
      {!isMobile ? (
        <>
          <BackButton />
          <VisitButton project={project} />
          <div className="horizontal-container mb-[30vh] flex gap-28 bg-hero-color tracking-wide lg:mb-[90vh] lg:gap-40 2k:mb-[100vh]">
            <FirstPanel project={project} />
            <FourthPanel project={project} />
            <SecondPanel project={project} />
            <ThirdPanel project={project} />
          </div>
        </>
      ) : (
        <PageMobile project={project} />
      )}
    </div>
  );
};

export default HorizontalScroll;
