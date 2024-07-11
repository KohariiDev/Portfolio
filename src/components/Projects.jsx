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
import VideoInView from "../hooks/useVideoInView";
import Placeholder from "./Placeholder";

// import videos directly here because Vercel can't recognize the path
// Iphone Project Videos
import iphoneVideo from "../../public/videos/iphone/iphone-video.mp4";
import iphonePhoneVideo from "../../public/videos/iphone/iphone-phone-video.mp4";

// Arlen Project Videos
import arlenVideo from "../../public/videos/arlen/arlen-video.mp4";
import arlenPhoneVideo from "../../public/videos/arlen/arlen-phone-video.mp4";

// Podcastr Project Videos
import podcastrVideo from "../../public/videos/podcastr/podcastr-video.mp4";
import podcastrPhoneVideo from "../../public/videos/podcastr/podcastr-phone-video.mp4";

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
      <section id="projects" className="mb-0">
        <div ref={containerRef} className="relative h-[600vh]">
          {projects.map((project, i) => (
            <div
              key={i}
              className={`absolute right-14 z-40 hidden flex-col gap-20 lg:flex 2k:right-32`}
              style={{ top: `${i === 0 ? 60 : i * 190}vh` }}
            >
              {/* Main Video */}
              {videoSources[project.title][0] ? (
                <VideoInView
                  src={videoSources[project.title][0]}
                  className="relative bg-arlen lg:h-24 lg:w-44 xl:h-32 xl:w-56 2k:h-52 2k:w-80"
                />
              ) : (
                <Placeholder />
              )}

              {/* Image */}
              <div className="relative bg-arlen lg:h-24 lg:w-44 xl:h-32 xl:w-56 2k:h-52 2k:w-80">
                <Image
                  src={project.images[0]}
                  fill
                  style={{ objectFit: "cover" }}
                  alt="Description of the image"
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              {/* Phone Video */}
              {videoSources[project.title][1] ? (
                <VideoInView
                  src={videoSources[project.title][1]}
                  className="relative bg-arlen lg:h-24 lg:w-44 xl:h-32 xl:w-56 2k:h-52 2k:w-80"
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
                    src={project.src[index]}
                    alt="Description of the image"
                    sizes="100vw"
                    className="h-full w-full object-contain md:object-cover"
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
