"use client"

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";

import { slider1, slider2 } from "../data/sliderData";

export default function SlidingImages() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  return (
    <div
      ref={container}
      className="mt-28 flex flex-col gap-[3vw] relative bg-hero-color md:z-[1] overflow-hidden"
    >
      <motion.div
        style={{ x: x1 }}
        className="flex relative gap-[3vw] w-[120vw] left-[-10vw]"
      >
        {slider1.map((project, index) => {
          const { color, src } = project;
          return (
            <div
              key={index}
              className="w-[25%] h-[20vw] flex items-center justify-center rounded-xl"
              style={{ backgroundColor: color }}
            >
              <div className="relative w-[80%] h-[80%]">
                <Image
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt="image"
                  src={src.src}
                  className="object-cover rounded-xl"
                />
              </div>
            </div>
          );
        })}
      </motion.div>
      <motion.div
        style={{ x: x2 }}
        className="flex relative gap-[3vw] w-[120vw] left-[-10vw]"
      >
        {slider2.map((project, index) => {
          const { color, src } = project;
          return (
            <div
              key={index}
              className="w-[25%] h-[20vw] flex items-center justify-center rounded-xl"
              style={{ backgroundColor: color }}
            >
              <div className="relative w-[80%] h-[80%]">
                <Image
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt="image"
                  src={src.src}
                  className="object-cover rounded-xl"
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
        <div className="lg:h-[1550%] w-[120%] left-[-10%] rounded-b-full bg-hero-color z-[1] absolute shadow-[0px_60px_50px_rgba(0,0,0,0.748)]"></div>
      </motion.div>
    </div>
  );
}
