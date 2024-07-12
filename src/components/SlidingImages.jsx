"use client";

import React, { useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";

import { slider1, slider2 } from "../data/sliderData";

function SlidingImages() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    console.log("SlidingImages component re-rendered");
  })

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  return (
    <div
      ref={container}
      className="relative mt-28 flex flex-col gap-[3vw] overflow-hidden bg-hero-color md:z-[1]"
    >
      <motion.div
        style={{ x: x1 }}
        className="relative left-[-10vw] flex w-[120vw] gap-[3vw]"
      >
        {slider1.map((project, index) => {
          const { color, src } = project;
          return (
            <div
              key={index}
              className="flex h-[20vw] w-[25%] items-center justify-center rounded-xl"
              style={{ backgroundColor: color }}
            >
              <div className="relative h-[80%] w-[80%]">
                <Image
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt="image"
                  src={src.src}
                  className="rounded-xl object-cover"
                />
              </div>
            </div>
          );
        })}
      </motion.div>
      <motion.div
        style={{ x: x2 }}
        className="relative left-[-10vw] flex w-[120vw] gap-[3vw]"
      >
        {slider2.map((project, index) => {
          const { color, src } = project;
          return (
            <div
              key={index}
              className="flex h-[20vw] w-[25%] items-center justify-center rounded-xl"
              style={{ backgroundColor: color }}
            >
              <div className="relative h-[80%] w-[80%]">
                <Image
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt="image"
                  src={src.src}
                  className="rounded-xl object-cover"
                />
              </div>
            </div>
          );
        })}
      </motion.div>
      <motion.div
        style={{ height }}
        className="relative mt-[500px] md:mt-[200px] lg:mt-[100px]"
      >
        <div className="absolute left-[-10%] z-[1] w-[120%] rounded-b-full bg-hero-color shadow-[0px_60px_50px_rgba(0,0,0,0.748)] lg:h-[1550%]"></div>
      </motion.div>
    </div>
  );
}

export default React.memo(SlidingImages);
