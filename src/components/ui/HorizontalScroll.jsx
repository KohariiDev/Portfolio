"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import FadeUp from "../animation/FadeUp";

import { useInViewAnimation } from "../../hooks/useInViewAnimation";

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = ({ project }) => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  const isImageInView = useInViewAnimation(imageRef);

  useEffect(() => {
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
  }, []);

  return (
    <div ref={containerRef} style={{ overflow: "hidden" }}>
      <div className="horizontal-container flex gap-10 lg:gap-20 mb-[30vh] lg:mb-[90vh] 2k:mb-[100vh] bg-hero-color">
        <div className="panel bg-hero-color pb-20 pl-10 lg:pl-0">
          <div className="flex flex-col justify-end">
            <div className="lg:flex justify-between pb-5">
              <h1 className="text-lg mb-5 lg:mb-0 lg:text-4xl text-slate-800 font-semibold">
                {project.projectsPageData.panelOne.title}
              </h1>
              <span className="text-sm lg:w-2/5 text-slate-600">
                <FadeUp
                  phrase={project.projectsPageData.panelOne.description}
                />
              </span>
            </div>
            <div
              ref={imageRef}
              className="h-2/3 w-full flex flex-col items-center justify-center bg-black overflow-hidden relative"
            >
              <div
                className={`absolute top-0 left-0 z-50 w-full h-full bg-hero-color transition-transform duration-1000 delay-300 ease-in-out ${
                  isImageInView ? "-translate-x-full" : "translate-x-0"
                }`}
              ></div>
              <Image
                src={project.projectsPageData.panelOne.image}
                alt="hero"
                className="w-1/2"
              />
            </div>
          </div>
        </div>
        <section className="panel">
          <div className="w-full h-full relative">
            <Image
              src={project.projectsPageData.panelTwo.image}
              alt="hero"
              fill
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain w-1/2 h-1/2"
            />
          </div>
        </section>
        <section className="panel">
          <div className="w-full h-full relative">
            <video
              src={project.projectsPageData.panelThree.image}
              loop
              autoPlay
              muted
              playsInline
              className="object-cover w-full h-full"
              style={{ objectFit: "contain" }}
            />
          </div>
        </section>
        <section className="panel bg-hero-color justify-center items-center pr-14 lg:pr-0">
          <div className="lg:flex lg:gap-32 text-lg text-slate-600">
            <div className="mb-5 lg:mb-0">
              <span className="max-w-sm text-sm">
                <FadeUp
                  phrase={project.projectsPageData.panelFour.descriptionOne}
                />
              </span>
            </div>
            <div>
              <span className="max-w-sm text-sm">
                <FadeUp
                  phrase={project.projectsPageData.panelFour.descriptionTwo}
                />
              </span>
            </div>
          </div>
        </section>
      </div>
      <section className="bg-hero-color justify-center items-center">
        <div className="flex gap-32 text-lg text-slate-600 border-2">
          <div>
            <p className="max-w-sm">
              {project.projectsPageData.panelFive.description}
            </p>
          </div>
          <div>
            <p className="max-w-sm">
              {project.projectsPageData.panelFive.description}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HorizontalScroll;
