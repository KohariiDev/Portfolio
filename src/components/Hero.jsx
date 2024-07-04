"use client";

import GsapMagnetic from "@/utils/animations/gsap";
import Rounded from "@/ui/button";
import FadeUp from "@/utils/animations/FadeUp";
import FadeUpTitle from "@/utils/animations/FadeUptitle";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";
import { LazyMotion, domAnimation, m } from "framer-motion";

import { useRef } from "react";

const Hero = ({ socials, hero, openEmailClient }) => {
  const redDotRef = useRef(null);
  const socialsRef = useRef(null);
  const currentTimeRef = useRef(null);
  const ctaRef = useRef(null);

  useInViewAnimation(redDotRef);
  useInViewAnimation(socialsRef);
  useInViewAnimation(currentTimeRef);
  useInViewAnimation(ctaRef);

  const socialsArray = Object.values(socials);
  const { title, para, cta, buttonAction, link } = hero;

  return (
    <LazyMotion features={domAnimation}>
      <section
        id="hero"
        className="relative min-h-screen overflow-hidden bg-hero-color text-slate-900 flex flex-col pt-36 px-1 md:px-8 xl:px-20 "
      >
        <m.h1 className="absolute left-2/4 overflow-hidden -translate-x-2/4 top-12 text-7xl text-center md:text-left md:top-20 md:text-[7rem] lg:top-20 lg:text-9.5xl xl:top-10 xl:text-14xl tracking-tight md:text-nowrap font-semibold">
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
            ref={redDotRef}
            className="md:block hidden md:w-[15px] md:h-[15px] lg:w-[20px] lg:h-[20px] xl:w-[30px] xl:h-[30px] bg-secondary-color rounded-full ml-auto mr-1 lg:mr-2 xl:mr-3"
          ></m.span>
        </m.h1>

        <div className="hidden lg:flex items-center gap-10 opacity-90 ml-auto absolute right-5 bottom-5">
          {socialsArray.map((socials, i) => {
            return (
              <m.span
                key={i}
                ref={socialsRef}
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
                <GsapMagnetic>{socials}</GsapMagnetic>
              </m.span>
            );
          })}
        </div>

        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 6, duration: 1 } }}
          className="ml-auto mr-auto mt-16 md:mt-24 xl:mt-40 mb-10"
        >
          <Rounded
            backgroundColor="#ef4444"
            className="rounded-full w-[130px] h-[130px] flex items-center justify-center border-[1px] cursor-pointer border-secondary-color text-slate-700 hover:text-slate-200 duration-500 ease-in-out transition-colors"
          >
            <button
              onClick={() =>
                openEmailClient(
                  "kohari.dev@gmail.com",
                  "Contact Us",
                  "Please enter your message here"
                )
              }
              className="uppercase z-50"
            >
              {buttonAction}
            </button>
          </Rounded>
        </m.div>

        <div className=" md:mb-auto lg:mb-[75px] xl:mb-auto text-center max-w-xl ml-auto mr-auto">
          <FadeUp
            phrase={para}
            delay={3300}
            paragraphClass="text-lg opacity-85"
          />
        </div>

        <div className="absolute bottom-5 left-0">
          <m.p
            ref={currentTimeRef}
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
            className="hidden lg:flex opacity-60 text-lg font-mono font-semibold w-48 justify-center"
          >
            Version 1.0
          </m.p>
        </div>
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
          <m.p
            ref={ctaRef}
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
            className="hidden lg:flex opacity-85 text-slate-800 tracking-widest uppercase"
          >
            {cta}
          </m.p>
        </div>
      </section>
    </LazyMotion>
  );
};

export default Hero;
