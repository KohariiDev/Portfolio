"use client"

import { useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export default function TextPath({ textPath }) {
  const { text1, text2 } = textPath;
  const container = useRef();
  const paths = useRef([]);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  useEffect(() => {
    scrollYProgress.on("change", (e) => {
      paths.current.forEach((path, i) => {
        path.setAttribute("startOffset", -40 + i * 40 + e * 40 + "%");
      });
    });
  }, [scrollYProgress]);

  return (
    <div id="textPath" ref={container} className="bg-hero-color">
      <svg className="w-full mb-0" viewBox="0 0 250 90">
        <path
          fill="none"
          id="curve"
          d="m0,88.5c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68"
        />
        <text className="text-[6px] uppercase" style={{ fill: "red" }}>
          {[...Array(3)].map((_, i) => (
            <textPath
              key={i}
              ref={(ref) => (paths.current[i] = ref)}
              startOffset={i * 40 + "%"}
              href="#curve"
            >
              {text1}
            </textPath>
          ))}
        </text>
      </svg>
      <Work scrollProgress={scrollYProgress} text2={text2} />
    </div>
  );
}

const Work = ({ scrollProgress, text2 }) => {
  const y = useTransform(scrollProgress, [0, 1], [-700, 0]);
  return (
    <div id="work" className="h-[250px] bg-project-color overflow-hidden">
      <motion.div
        style={{ y }}
        className="h-full relative bg-iphone flex justify-center items-center p-10"
      >
        <div className="flex">
          <h1 className="text-projects-color text-8xl md:text-14xl flex justify-center items-center tracking-widest font-semibold">
            WORK
          </h1>
        </div>
      </motion.div>
    </div>
  );
};
