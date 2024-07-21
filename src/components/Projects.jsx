"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import useCursorHandlers from "../events/projectsEventHandlers";

import TransitionLink from "../utils/TransitionLink";
import { slugify } from "../utils/slugify";
import CustomCursor from "./ui/CustomCursor";
import VideoInView from "../hooks/useVideoInView";
import Placeholder from "./Placeholder";

const videoSources = {
  Iphone: [
    "https://d34fm3rjhn7e1w.cloudfront.net/iphone/iphone-video.mp4",
    "https://d34fm3rjhn7e1w.cloudfront.net/iphone/iphone-phone-video.mp4",
  ],
  Arlen: [
    "https://d34fm3rjhn7e1w.cloudfront.net/arlen/arlen-video.mp4",
    "https://d34fm3rjhn7e1w.cloudfront.net/arlen/arlen-phone-video.mp4",
  ],
  Podcastr: [
    "https://d34fm3rjhn7e1w.cloudfront.net/podcastr/podcastr-video.mp4",
    "https://d34fm3rjhn7e1w.cloudfront.net/podcastr/podcastr-phone-video.mp4",
  ],
};

function Projects({ projects }) {
  const containerRef = useRef(null);
  const imageHolderRef = useRef(null);
  const cursorRef = useRef(null);
  const { handleMouseEnter, handleMouseLeave } = useCursorHandlers(cursorRef);

  useEffect(() => {
    if (!containerRef.current || !imageHolderRef.current) return;

    const elements = imageHolderRef.current.children;

    gsap.set(elements, { clipPath: "inset(0 0 0 0)" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "20% center",
        end: "bottom bottom",
        scrub: 2,
      },
    });

    tl.to(elements, { clipPath: "inset(0 0 100% 0)", stagger: 1 }, ">-2");

    return () => {
      tl.kill();
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
    };
  }, []);

  const projectStyles = [
    { zIndex: "z-30", bgClass: "bg-iphone" },
    { zIndex: "z-20", bgClass: "bg-arlen" },
    { zIndex: "z-10", bgClass: "bg-brainwave" },
  ];

  return (
    <>
      <CustomCursor ref={cursorRef} />
      <section id="projects" className="mb-0">
        <div ref={containerRef} className="relative h-[600vh]">
          {projects.map((project, i) => (
            <div
              key={i}
              className={`absolute right-14 z-40 hidden flex-col gap-7 lg:flex 2k:right-32 ${
                i === 0 ? "top-80" : i === 1 ? "top-[200vh]" : "top-[350vh]"
              }`}
            >
              {/* Main Video */}
              {videoSources[project.title][0] ? (
                <VideoInView
                  src={videoSources[project.title][0]}
                  className="relative bg-arlen lg:h-24 lg:w-44 xl:h-44 xl:w-80 2k:h-52 2k:w-96"
                />
              ) : (
                <Placeholder />
              )}

              {/* Image */}
              <div className="relative bg-arlen lg:h-24 lg:w-44 xl:h-44 xl:w-80 2k:h-52 2k:w-96">
                <Image
                  src={project.images}
                  fill
                  className="object-cover"
                  alt="Description of the image"
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              {/* Phone Video */}
              {videoSources[project.title][1] ? (
                <VideoInView
                  src={videoSources[project.title][1]}
                  className="relative bg-arlen lg:h-24 lg:w-44 xl:h-44 xl:w-80 2k:h-52 2k:w-96"
                />
              ) : (
                <Placeholder />
              )}
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
                onMouseEnter={() => handleMouseEnter(cursorRef)}
                onMouseLeave={() => handleMouseLeave(cursorRef)}
                className={`${projectStyles[index].bgClass} absolute left-0 top-0 flex h-[100vh] w-full items-center justify-center ${projectStyles[index].zIndex}`}
              >
                <div className="relative h-full w-full overflow-hidden md:h-2/4 md:w-2/4">
                  <Image
                    src={project.src}
                    alt="Description of the image"
                    sizes="70vw"
                    className="h-full w-full object-contain md:object-cover"
                    fill
                  />
                </div>
                <h1 className="absolute top-20 text-8xl font-bold tracking-widest text-secondary-color opacity-75 md:hidden">
                  WORK
                </h1>
                <h1 className="absolute bottom-20 text-2xl tracking-widest text-secondary-color opacity-75 md:hidden">
                  TAP TO VISIT
                </h1>
              </TransitionLink>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default React.memo(Projects);
