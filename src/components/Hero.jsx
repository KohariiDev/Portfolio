"use client";

import GsapMagnetic from "./animation/gsap";
import Rounded from "./ui/button";
import FadeUp from "./animation/FadeUp";
import FadeUpTitle from "./animation/FadeUpTitle";
import { LazyMotion, m } from "framer-motion";
import loadFeatures from "../utils/framerFeatures/loadFeatures";
import handleEmailClick from "../events/handleEmailClick";
import React, { useMemo } from "react";
import useWindowSize from "@/hooks/useWindowSize";

const Hero = React.memo(({ socials, hero }) => {
  const { width } = useWindowSize();

  const socialsArray = useMemo(() => Object.values(socials), [socials]);
  const { title, para, cta, buttonAction } = hero;

  const handleClick = handleEmailClick();

  return (
    <LazyMotion features={loadFeatures}>
      <section
        id="home"
        className="relative flex min-h-screen flex-col overflow-hidden bg-hero-color px-1 pt-36 text-slate-900 md:px-8 xl:px-20"
      >
        {/* title */}
        <m.h1 className="absolute left-2/4 top-12 -translate-x-2/4 overflow-hidden text-center text-7xl font-semibold tracking-wider md:top-20 md:text-nowrap md:text-left md:text-[7rem] md:tracking-tight lg:top-20 lg:text-9.5xl xl:top-10 xl:text-14xl 2k:text-20xl">
          <FadeUpTitle word={title} delay={2000} />
          <m.span
            initial={{ x: 100 }}
            animate={{
              x: 0,
              transition: {
                type: "spring",
                delay: 7,
                stiffness: 80,
                damping: 2,
                mass: 0.2,
                bounce: 0.2,
                duration: 1,
              },
            }}
            className="ml-auto mr-1 hidden rounded-full bg-secondary-color md:block md:h-[15px] md:w-[15px] lg:mr-2 lg:h-[20px] lg:w-[20px] xl:mr-3 xl:h-[30px] xl:w-[30px]"
          ></m.span>
        </m.h1>

        {/* socials */}
        <div className="absolute bottom-5 right-5 ml-auto hidden items-center gap-10 opacity-90 lg:flex">
          {socialsArray.map((social, i) => (
            <m.span
              key={i}
              initial={{ y: 100 }}
              animate={{
                y: 0,
                transition: {
                  delay: 3 + i * 0.3,
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  mass: 1,
                },
              }}
              className="cursor-pointer fill-slate-600 hover:fill-secondary-color"
            >
              <GsapMagnetic>{social}</GsapMagnetic>
            </m.span>
          ))}
        </div>

        {/* button */}
        {width > 425 ? (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 6, duration: 1 } }}
            className="mx-auto mt-24 md:mt-24 lg:mt-40 xl:mt-40 2k:mt-72"
          >
            <Rounded
              backgroundColor="#ef4444"
              className="flex h-[90px] w-[90px] cursor-pointer items-center justify-center rounded-full border-[1px] border-secondary-color text-slate-700 transition-colors duration-500 ease-in-out hover:text-slate-200 lg:h-[130px] lg:w-[130px] 2k:h-[200px] 2k:w-[200px]"
            >
              <button
                onClick={handleClick}
                className="z-50 text-xs uppercase md:text-base"
              >
                {buttonAction}
              </button>
            </Rounded>
          </m.div>
        ) : (
          <div className="mx-auto mt-24 md:mt-24 lg:mt-40 xl:mt-40 2k:mt-72">
            <Rounded
              backgroundColor="#ef4444"
              className="flex h-[90px] w-[90px] cursor-pointer items-center justify-center rounded-full border-[1px] border-secondary-color text-slate-700 transition-colors duration-500 ease-in-out hover:text-slate-200 lg:h-[130px] lg:w-[130px] 2k:h-[200px] 2k:w-[200px]"
            >
              <button
                onClick={handleClick}
                className="z-50 text-xs uppercase md:text-base"
              >
                {buttonAction}
              </button>
            </Rounded>
          </div>
        )}

        {/* paragraph */}
        <div className="mx-auto mb-20 mt-10 max-w-xl text-center md:mb-auto md:px-4 lg:mb-[75px] lg:mt-[50px] xl:mb-auto 2k:max-w-[1300px]">
          {width > 425 ? (
            <FadeUp
              phrase={para}
              delay={3500}
              paragraphClass="text-lg opacity-85 2k:text-7xl"
              y={400}
            />
          ) : (
            <p className="px-4 text-left leading-relaxed tracking-widest text-slate-800">
              {para}
            </p>
          )}
        </div>
        {/* Version */}
        <div className="absolute bottom-5 left-0">
          <m.p
            initial={{ y: 100 }}
            animate={{
              y: 0,
              transition: {
                delay: 3,
                type: "spring",
                stiffness: 100,
                damping: 10,
                mass: 1,
              },
            }}
            className="hidden w-48 justify-center font-mono text-lg font-semibold opacity-60 lg:flex"
          >
            Version 1.0
          </m.p>
        </div>
        {/* CTA */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 transform">
          <m.p
            initial={{ y: 100 }}
            animate={{
              y: 0,
              transition: {
                delay: 3,
                type: "spring",
                stiffness: 100,
                damping: 10,
                mass: 1,
              },
            }}
            className="hidden uppercase tracking-widest text-slate-800 opacity-85 lg:flex"
          >
            {cta}
          </m.p>
        </div>
      </section>
    </LazyMotion>
  );
});

export default Hero;
