"use client"

import Image from "next/image";
import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import Rounded from "./ui/button";
import GsapMagnetic from "./animation/gsap";
import FadeUp from "./animation/FadeUp";
import useScrollToSection from "@/hooks/useScrollToSection";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";
import Link from "next/link";

import openEmailClient from "@/utils/openEmailClient";

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
      className="text-white overflow-hidden flex flex-col items-center justify-center bg-[#141516] relative"
    >
      <div className="pt-[200px] w-full max-w-[1800px] bg-[#141516]">
        <Image
          src={footer.textImage}
          className="w-full h-full"
          sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt="Footer Text"
        />
        <div className="border-b border-gray-500 pb-[100px] md:mx-[200px] relative">
          {/* Navigation */}
          <motion.div
            style={{ x }}
            className="absolute flex right-[calc(100%-100px)] md:right-[calc(100%-0px)] lg:right-[calc(100%-100px)] top-[calc(100%-50px)]"
          >
            <div>
              <ul>
                <li className="flex flex-col gap-6 uppercase">
                  <span className="text-red-500 font-extrabold tracking-wider md:text-3xl">
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
                        className="text-hero-color uppercase cursor-pointer max-w-16 hover:text-secondary-color transition-colors duration-300 ease-in-out"
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
          <motion.div className="lg:absolute flex items-center justify-center right-[calc(100%-100px)] md:right-[calc(100%-0px)] lg:left-[calc(100%-0%)] top-[calc(100%-90px)]">
            <div>
              <Rounded
                backgroundColor="#ef4444"
                className="w-[180px] h-[180px] bg-hero-color text-slate-900 rounded-full flex items-center justify-center cursor-pointer hover:text-slate-300 transition-colors duration-300 ease-in-out"
              >
                <button
                  onClick={() =>
                    openEmailClient(
                      "kohari.dev@gmail.com",
                      "Contact Us",
                      "Please enter your message here"
                    )
                  }
                  className="m-0 uppercase font-semibold z-50 relative"
                >
                  Contact
                </button>
              </Rounded>
            </div>
          </motion.div>

          {/* Socials */}
          <motion.div
            style={{ x }}
            className="absolute flex left-[calc(100%-150px)] md:left-[calc(100%-100px)] lg:left-[calc(100%-400px)] top-[calc(100%-50px)]"
          >
            <div>
              <ul>
                <li className="flex flex-col gap-6 uppercase">
                  <span className="text-red-500 font-extrabold tracking-wider md:text-3xl">
                    <FadeUp phrase="SOCIALS" />
                  </span>
                  {footer.socials.map((social, index) => (
                    <GsapMagnetic key={index}>
                      <a
                        href={social.href}
                        className="text-hero-color uppercase cursor-pointer max-w-16 hover:text-secondary-color transition-colors duration-300 ease-in-out"
                      >
                        <FadeUp phrase={social.title} />
                      </a>
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
            className="absolute top-[30%] left-full"
          ></motion.svg>
        </div>
        <div className="relative flex text-3xl md:text-6xl lg:text-8xl flex-col mt-[300px] md:px-10 md:py-5 font-bold leading-none">
          <span className="text-red-500">
            <FadeUp phrase="© 2024" />
          </span>
          <span className=" uppercase text-nowrap">
            <FadeUp phrase="NORBERT KOHARI" />
          </span>
          <motion.span
            ref={redDotRef}
            className="hidden lg:flex absolute left-[713px] top-[105px] w-[20px] h-[20px] bg-secondary-color rounded-full"
          ></motion.span>
        </div>
      </div>
    </motion.div>
  );
}
