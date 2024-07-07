"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import {
  handleMouseEnter,
  handleMouseLeave,
} from "../events/projectsEventHandlers";

import TransitionLink from "../utils/TransitionLink";
import { slugify } from "../utils/slugify";
import CustomCursor from "./ui/CustomCursor";

// have to import videos directly here because Vercel can't recognize the path
// Iphone Project Videos
import iphoneVideo from "../../public/videos/Iphone/Iphone-video.mp4";
import iphonePhoneVideo from "../../public/videos/Iphone/Iphone-phone-video.mp4";

// Arlen Project Videos
import arlenVideo from "../../public/videos/Arlen/Arlen-video.mp4";
import arlenPhoneVideo from "../../public/videos/Arlen/Arlen-phone-video.mp4";

// Podcastr Project Videos
import podcastrVideo from "../../public/videos/Podcastr/Podcastr-video.mp4";
import podcastrPhoneVideo from "../../public/videos/Podcastr/Podcastr-phone-video.mp4";

const videoSources = {
  Iphone: [iphoneVideo, iphonePhoneVideo],
  Arlen: [arlenVideo, arlenPhoneVideo],
  Podcastr: [podcastrVideo, podcastrPhoneVideo],
};

export default function Projects({ projects }) {
  const containerRef = useRef(null);
  const imageHolderRef = useRef(null);
  const cursorRef = useRef(null);

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
      <section className="mb-0">
        <div ref={containerRef} className="relative h-[600vh]">
          {projects.map((project, i) => (
            <div
              key={i}
              className={`absolute right-14 z-40 hidden flex-col gap-20 lg:flex`}
              style={{ top: `${i === 0 ? 60 : i * 190}vh` }}
            >
              {/* Main Video */}
              <div className="relative bg-arlen lg:h-24 lg:w-44 xl:h-32 xl:w-56">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-full w-full object-cover"
                  src={videoSources[project.title][0]}
                />
              </div>
              {/* Image */}
              <div className="relative bg-arlen lg:h-24 lg:w-44 xl:h-32 xl:w-56">
                <Image
                  src={project.images[0]}
                  fill
                  style={{ objectFit: "cover" }}
                  alt="Description of the image"
                  sizes="50vw,"
                />
              </div>
              {/* Phone Video */}
              <div className="relative bg-arlen lg:h-24 lg:w-44 xl:h-32 xl:w-56">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-full w-full object-cover"
                  src={videoSources[project.title][1]}
                />
              </div>
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
