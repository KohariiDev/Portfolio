"use client";

import Image from "next/image";
import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import Rounded from "./ui/button";
import GsapMagnetic from "./animation/gsap";
import FadeUp from "./animation/FadeUp";
import useScrollToSection from "../hooks/useScrollToSection";
import { useInViewAnimation } from "../hooks/useInViewAnimation";
import Link from "next/link";

import openEmailClient from "../utils/openEmailClient";

export default function Footer({ footer }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);

  const redDotRef = useRef(null);

  useInViewAnimation(redDotRef);

  const scrollToSection = useScrollToSection();

  return (
    <motion.div
      style={{ y }}
      ref={container}
      className="relative flex flex-col items-center justify-center overflow-hidden bg-[#141516] text-white"
    >
      <div className="w-full max-w-[1800px] bg-[#141516] pt-[200px] 2k:max-w-[2200px]">
        <Image
          src={footer.textImage}
          className="h-full w-full"
          sizes="55vw"
          alt="Footer Text"
        />
        <div className="relative border-b border-gray-500 pb-[100px] md:mx-[200px]">
          {/* Navigation */}
          <motion.div
            style={{ x }}
            className="absolute right-[calc(100%-100px)] top-[calc(100%-50px)] flex md:right-[calc(100%-0px)] lg:right-[calc(100%-100px)]"
          >
            <div>
              <ul>
                <li className="flex flex-col gap-6 uppercase">
                  <span className="font-extrabold tracking-wider text-red-500 md:text-3xl">
                    <FadeUp phrase="NAVIGATION" />
                  </span>
                  {footer.links.map((link, index) => (
                    <GsapMagnetic key={index}>
                      <Link
                        href={link.href}
                        scroll={false}
                        passHref
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection(link.href.slice(1));
                        }}
                        className="max-w-16 cursor-pointer uppercase text-hero-color transition-colors duration-300 ease-in-out hover:text-secondary-color 2k:max-w-[200px] 2k:text-2xl"
                      >
                        <FadeUp phrase={link.title} />
                      </Link>
                    </GsapMagnetic>
                  ))}
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Navigation button */}
          <motion.div className="right-[calc(100%-100px)] top-[calc(100%-90px)] hidden items-center justify-center md:right-[calc(100%-0px)] md:flex lg:absolute lg:left-[calc(100%-0%)]">
            <div>
              <Rounded
                backgroundColor="#ef4444"
                className="flex h-[180px] w-[180px] cursor-pointer items-center justify-center rounded-full bg-hero-color text-slate-900 transition-colors duration-300 ease-in-out hover:text-slate-300"
              >
                <button
                  onClick={() =>
                    openEmailClient(
                      "kohari.dev@gmail.com",
                      "Contact Us",
                      "Please enter your message here",
                    )
                  }
                  className="relative z-50 m-0 font-semibold uppercase"
                >
                  Contact
                </button>
              </Rounded>
            </div>
          </motion.div>

          {/* Socials */}
          <motion.div
            style={{ x }}
            className="absolute left-[calc(100%-150px)] top-[calc(100%-50px)] flex md:left-[calc(100%-100px)] lg:left-[calc(100%-400px)]"
          >
            <div>
              <ul>
                <li className="flex flex-col gap-6 uppercase">
                  <span className="font-extrabold tracking-wider text-red-500 md:text-3xl">
                    <FadeUp phrase="SOCIALS" />
                  </span>
                  {footer.socials.map((social, index) => (
                    <GsapMagnetic key={index}>
                      <Link
                        href={social.href}
                        className="max-w-16 cursor-pointer uppercase text-hero-color transition-colors duration-300 ease-in-out hover:text-secondary-color 2k:max-w-[200px] 2k:text-2xl"
                      >
                        <FadeUp phrase={social.title} />
                      </Link>
                    </GsapMagnetic>
                  ))}
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.svg
            style={{ rotate, scale: 2 }}
            width="9"
            height="9"
            viewBox="0 0 9 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-full top-[30%]"
          ></motion.svg>
        </div>
        <div className="relative mt-[300px] flex flex-col text-3xl font-bold leading-none md:px-10 md:py-5 md:text-6xl lg:text-8xl">
          <span className="text-red-500">
            <FadeUp phrase="© 2024" />
          </span>
          <span className="text-nowrap uppercase">
            <FadeUp phrase="NORBERT KOHARI" />
          </span>
          <motion.span
            ref={redDotRef}
            className="absolute left-[713px] top-[105px] hidden h-[20px] w-[20px] rounded-full bg-secondary-color lg:flex"
          ></motion.span>
        </div>
      </div>
    </motion.div>
  );
}
