"use client"

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import Link from "next/link";
import { slugify } from "../utils/slugify";
import CustomCursor from "./ui/CustomCursor";
import Image from "next/image";

import TransitionLink from "../utils/TransitionLink";

export default function Projects({ projects }) {
  const containerRef = useRef(null);
  const imageHolderRef = useRef(null);
  const cursorRef = useRef(null);

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

  const handleMouseEnter = () => {
    if (cursorRef.current) {
      cursorRef.current.style.opacity = 0.9;
      gsap.to(cursorRef.current, {
        scale: 1,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  };

  const handleMouseLeave = () => {
    if (cursorRef.current) {
      gsap.to(cursorRef.current, {
        scale: 0,
        duration: 0.5,
        ease: "power2.in",
      });
    }
  };

  const projectStyles = [
    { zIndex: "z-30", bgClass: "bg-iphone" },
    { zIndex: "z-20", bgClass: "bg-brainwave" },
    { zIndex: "z-10", bgClass: "bg-arlen" },
  ];

  return (
    <>
      <CustomCursor ref={cursorRef} />
      <section className="mb-0">
        <div ref={containerRef} className="relative h-[600vh]">
          {[1, 2, 3].map((_, i) => (
            <div
              key={i}
              className={`absolute right-14 z-40 flex flex-col gap-20`}
              style={{ top: `${i * 170}vh` }}
            >
              {[1, 2, 3].map((_, index) => (
                <div key={index} className="lg:w-44 lg:h-24 xl:w-56 xl:h-32 bg-arlen relative">
                  <Image
                    src={projects[i].images[index]}
                    fill
                    style={{ objectFit: "cover" }}
                    alt="Description of the image"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              ))}
            </div>
          ))}
          <div
            ref={imageHolderRef}
            className="sticky top-0 h-screen flex flex-col justify-center items-center"
          >
            {projects.map((project, index) => (
              <TransitionLink
                key={project.title}
                href={`/project/${slugify(project.title)}`}
                passHref
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={`${projectStyles[index].bgClass} w-full h-[100vh] absolute top-0 left-0 flex justify-center items-center ${projectStyles[index].zIndex}`}
              >
                <video className="w-3/5" autoPlay loop muted playsInline>
                  <source src={project.video} type="video/mp4" />
                  <source src={project.video} type="video/webm" />
                  <source src={project.video} type="video/ogg" />
                  Your browser does not support the video tag.
                </video>
              </TransitionLink>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
