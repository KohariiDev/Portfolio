"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { videos } from "../../constants/";
import Link from "next/link";
import { slugify } from "../../utils/slugify";

import CustomCursor from "./design/ui/CustomCursor";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";

export default function Projects({ projects }) {
  const containerRef = useRef(null);
  const imageHolderRef = useRef(null);
  const cursorRef = useRef(null);
  const videoRefs = useRef();
  const isInView = useInViewAnimation(videoRefs);

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

  useEffect(() => {
    if (isInView) {
      videoRefs.current.play();
    } else {
      videoRefs.current.pause();
    }
  }, [isInView]);

  return (
    <>
      <CustomCursor ref={cursorRef} />
      <section className="mb-0">
        <div ref={containerRef} className="relative h-[300vh]">
          <div
            ref={imageHolderRef}
            className="sticky top-0 h-screen flex flex-col justify-center items-center"
          >
            <Link
              href={`/project/${slugify(projects[0].title)}`}
              passHref
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="video-container bg-iphone w-full h-[100vh] absolute top-0 left-0 flex justify-center items-center z-30"
            >
              <video
                ref={videoRefs}
                className="w-3/5"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={videos[0]} type="video/mp4" />
                <source src={videos[0]} type="video/webm" />
                <source src={videos[0]} type="video/ogg" />
                Your browser does not support the video tag.
              </video>
            </Link>

            <Link
              href={`/project/${slugify(projects[1].title)}`}
              passHref
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="video-container bg-brainwave w-full h-[100vh] absolute top-0 left-0 flex justify-center items-center z-20"
            >
              <video
                ref={videoRefs}
                className="w-3/5"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={videos[1]} type="video/mp4" />
                <source src={videos[1]} type="video/webm" />
                <source src={videos[1]} type="video/ogg" />
                Your browser does not support the video tag.
              </video>
            </Link>

            <Link
              href={`/project/${slugify(projects[2].title)}`}
              passHref
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="video-container bg-iphone w-full h-[100vh] absolute top-0 left-0 flex justify-center items-center z-10"
            >
              <video
                ref={videoRefs}
                className="w-3/5"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={videos[0]} type="video/mp4" />
                <source src={videos[0]} type="video/webm" />
                <source src={videos[0]} type="video/ogg" />
                Your browser does not support the video tag.
              </video>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
