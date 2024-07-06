"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { slugify } from "../utils/slugify";
import CustomCursor from "./ui/CustomCursor";
import Image from "next/image";

import iphoneVideo from "../../public/videos/iphone/iphone-video.mp4";

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
              className={`absolute right-14 z-40 hidden flex-col gap-20 lg:flex`}
              style={{ top: `${i === 0 ? 60 : i * 190}vh` }}
            >
              {[1, 2, 3].map((_, index) => (
                <div
                  key={index}
                  className="relative bg-arlen lg:h-24 lg:w-44 xl:h-32 xl:w-56"
                >
                  {index === 0 || index === 2 ? (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="h-full w-full object-cover"
                      src={iphoneVideo}
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
            className="sticky top-0 flex h-screen flex-col items-center justify-center"
          >
            {projects.map((project, index) => (
              <TransitionLink
                key={project.title}
                href={`/project/${slugify(project.title)}`}
                passHref
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={`${projectStyles[index].bgClass} absolute left-0 top-0 flex h-[100vh] w-full items-center justify-center ${projectStyles[index].zIndex}`}
              >
                <div className="relative h-2/4 w-2/4 overflow-hidden">
                  <Image
                    src={project.src[index]}
                    alt="Description of the image"
                    sizes="50vw"
                    className="h-full w-full object-cover"
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
