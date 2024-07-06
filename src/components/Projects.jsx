"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

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
          start: "20% center",
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
    { zIndex: "z-20", bgClass: "bg-arlen" },
    { zIndex: "z-10", bgClass: "bg-brainwave" },
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
              style={{ top: `${i === 0 ? 60 : i * 190}vh` }}
            >
              {[1, 2, 3].map((_, index) => (
                <div
                  key={index}
                  className="lg:w-44 lg:h-24 xl:w-56 xl:h-32 bg-arlen relative"
                >
                  {index === 0 || index === 2 ? (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                      src={projects[i].video[index === 0 ? 0 : 1]}
                    />
                  ) : (
                    <Image
                      src={projects[0].images[index]}
                      fill
                      style={{ objectFit: "cover" }}
                      alt="Description of the image"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  )}
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
                <div className="relative w-2/4 h-2/4 overflow-hidden">
                  <Image
                    src={project.src[index]}
                    alt="Description of the image"
                    sizes="50vw"
                    className="w-full h-full object-cover"
                    fill
                  />
                </div>
              </TransitionLink>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
