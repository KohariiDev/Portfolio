"use client";

import { useEffect, useRef } from "react";
import back from "@/../public/images/back.svg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import FadeUp from "../animation/FadeUp";

import Rounded from "@/components/ui/button";

import { useInViewAnimation } from "../../hooks/useInViewAnimation";
import Link from "next/link";

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
    <div ref={containerRef} style={{ overflow: "hidden" }} className="relative">
      <Link href="/">
        <Rounded
          backgroundColor="#ef4444"
          className="fixed left-10 top-[610px] z-50 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-red-400 tracking-wider text-hero-color"
        >
          <button className="z-50 uppercase">
            <Image src={back} className="w-7" alt="back button" />
          </button>
        </Rounded>
      </Link>
      <Link href="/">
        <Rounded
          backgroundColor="#ef4444"
          className="fixed right-10 top-[610px] z-50 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-red-400 tracking-widest text-hero-color"
        >
          <button className="z-50 uppercase">VISIT</button>
        </Rounded>
      </Link>

      <div className="horizontal-container mb-[30vh] flex gap-10 bg-hero-color tracking-wide lg:mb-[90vh] lg:gap-20 2k:mb-[100vh]">
        <div className="panel bg-hero-color pb-20 pl-10 lg:pl-0">
          <div className="flex flex-col justify-end">
            <div className="justify-between pb-5 lg:flex">
              <h1 className="mb-5 text-lg text-slate-800 lg:mb-0 lg:text-5xl">
                {project.projectsPageData.panelOne.title}
              </h1>
              <span className="text-slate-600 lg:w-2/5">
                <FadeUp
                  phrase={project.projectsPageData.panelOne.description}
                />
              </span>
            </div>
            <div
              ref={imageRef}
              className="relative flex h-2/3 w-full flex-col items-center justify-center overflow-hidden bg-black"
            >
              <div
                className={`absolute left-0 top-0 z-50 h-full w-full bg-hero-color transition-transform delay-300 duration-1000 ease-in-out ${
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
          <div className="relative h-full w-full">
            <Image
              src={project.projectsPageData.panelTwo.image}
              alt="hero"
              fill
              sizes="55vw"
              className="h-1/2 w-1/2 object-contain"
            />
          </div>
        </section>
        <section className="panel">
          <div className="relative h-full w-full">
            <video
              src={project.projectsPageData.panelThree.image}
              loop
              autoPlay
              muted
              playsInline
              className="h-full w-full object-cover"
              style={{ objectFit: "contain" }}
            />
          </div>
        </section>
        <section className="panel items-center justify-center bg-hero-color pr-14 tracking-wider lg:pr-0">
          <div className="text-slate-600 lg:flex lg:gap-32">
            <div className="mb-5 flex-1 lg:mb-0">
              <span className="max-w-sm text-sm lg:text-base">
                <FadeUp
                  phrase={project.projectsPageData.panelFour.descriptionOne}
                />
              </span>
            </div>
            <div className="flex-1">
              <span className="max-w-sm text-sm lg:text-base">
                <FadeUp
                  phrase={project.projectsPageData.panelFour.descriptionTwo}
                />
              </span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HorizontalScroll;
