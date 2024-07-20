"use client";

import React, { useEffect, useRef } from "react";
import FadeUp from "./animation/FadeUp";
import FadeUpTitle from "./animation/FadeUpTitle";
import { useInViewAnimation } from "../hooks/useInViewAnimation";
import useWindowSize from "@/hooks/useWindowSize";

import { motion, useScroll, useTransform } from "framer-motion";

function Services({ services, serviceText }) {
  const { title, intro, description } = serviceText;
  const { width } = useWindowSize();

  const titleRef = useRef(null);
  const isInView = useInViewAnimation(titleRef, true);
  const container = useRef(null);

  const textRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ["start end", "start 20%"],
  });

  const characterOpacity = (chars) => {
    return chars.split("").map((char, index) => (
      <motion.span
        key={index}
        style={{
          opacity: useTransform(
            scrollYProgress,
            [index / chars.length, (index + 1) / chars.length],
            [0, 1],
          ),
        }}
      >
        {char}
      </motion.span>
    ));
  };

  return (
    <section
      ref={container}
      id="about"
      className="mt-[-350px] overflow-hidden bg-hero-color px-4 pb-8 md:px-16 md:pb-16 xl:px-24"
    >
      <div className="mb-28 flex flex-col justify-between md:flex-row">
        <div className="relative ml-auto mr-auto flex flex-col">
          <motion.h1
            ref={titleRef}
            className="mb-4 text-8xl font-medium uppercase tracking-tight text-slate-900 md:mb-0 md:text-nowrap md:text-9xl lg:text-16xl 2k:text-20xl"
          >
            {isInView && <FadeUpTitle word={title} />}
          </motion.h1>
        </div>
      </div>
      <div>
        <div className="mb-10 flex flex-col gap-20 md:flex-row md:gap-0 xl:my-40">
          <div className="relative flex-1">
            <motion.h1
              ref={textRef}
              className="w-[150px] text-sm font-bold uppercase tracking-wide text-secondary-color md:text-2xl lg:text-[3rem] 2k:text-5xl"
            >
              {characterOpacity(intro)}
            </motion.h1>
            <h1 className="absolute left-0 top-0 w-[150px] text-sm font-bold uppercase tracking-wide text-secondary-color opacity-10 md:text-2xl lg:text-[3rem] 2k:text-5xl">
              {intro}
            </h1>
          </div>

          <div className="flex-1">
            <span className="ml-auto w-3/4 text-justify tracking-wider text-slate-800 lg:text-lg 2k:text-3xl">
              {width > 425 ? (
                <FadeUp delay={700} phrase={description} />
              ) : (
                description
              )}
            </span>
          </div>
        </div>

        {services.map((service, index) => {
          const { title, description, number } = service;
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-between border-t border-gray-300 py-16 text-slate-800 md:flex-row 2k:justify-around"
            >
              <div className="w-full md:w-1/2">
                <h2 className="lg:mg-0 mb-5 text-3xl uppercase xl:text-5xl 2k:text-8xl">
                  {title}{" "}
                  <span className="text-lg text-secondary-color">
                    ({number})
                  </span>
                </h2>
              </div>
              <div className="max-w-lg text-xs text-slate-600 md:w-1/2 lg:w-2/5 xl:w-1/3 xl:text-base 2k:max-w-[800px] 2k:text-3xl">
                <FadeUp phrase={description} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default React.memo(Services);
