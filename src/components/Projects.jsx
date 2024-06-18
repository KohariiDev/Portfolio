"use client";

import React, { useCallback, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import Link from "next/link";
import { slugify } from "../../utils/slugify";

import CustomCursor from "./design/ui/CustomCursor";

const Projects = ({ projects }) => {
  const containerRef = useRef(null);
  const imageHolderRef = useRef(null);
  const cursorRef = useRef(null);
  const videoRefs = useRef([]);

  useEffect(() => {
    if (!containerRef.current || !imageHolderRef.current) return;

    const elements = imageHolderRef.current.children;

    gsap.set(elements, { clipPath: "inset(0 0 0 0)" });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 2,
        },
      })
      .to(elements, { clipPath: "inset(0 0 100% 0)", stagger: 1 }, ">-2");
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (cursorRef.current) {
      cursorRef.current.style.opacity = 0.9;
      gsap.to(cursorRef.current, {
        scale: 1,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (cursorRef.current) {
      gsap.to(cursorRef.current, {
        scale: 0,
        duration: 0.5,
        ease: "power2.in",
      });
    }
  }, []);

  return (
    <>
      <CustomCursor ref={cursorRef} />
      <section className="mb-0">
        <div ref={containerRef} className="relative h-[300vh]">
          <div
            ref={imageHolderRef}
            className="sticky top-0 h-screen flex flex-col justify-center items-center"
          >
            {projects.map((project, index) => (
              <Link
                key={index}
                href={`/project/${slugify(project.title)}`}
                passHref
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={`video-container bg-${
                  index === 1 ? "brainwave" : "iphone"
                } w-full h-[100vh] absolute top-0 left-0 flex justify-center items-center z-${
                  30 - index * 10
                }`}
              >
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  className="w-3/5"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={project.video} type="video/mp4" />
                  <source src={project.video} type="video/webm" />
                  <source src={project.video} type="video/ogg" />
                  Your browser does not support the video tag.
                </video>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default React.memo(Projects);
