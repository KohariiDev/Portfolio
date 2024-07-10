import FadeUp from "@/components/animation/FadeUp";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";
import Image from "next/image";
import React, { useRef } from "react";

const FirstPanel = ({ project }) => {
  const imageRef = useRef(null);

  const isImageInView = useInViewAnimation(imageRef);

  return (
    <div className="panel bg-hero-color pb-20 pl-10 lg:pl-0">
      <div className="flex flex-col justify-end">
        <div className="justify-between pb-5 lg:flex">
          <h1 className="mb-5 text-lg text-slate-800 lg:mb-0 lg:text-5xl 2k:text-9xl">
            {project.projectsPageData.panelOne.title}
          </h1>
          <span className="text-slate-600 lg:w-2/5 2k:ml-10 2k:text-3xl">
            <FadeUp phrase={project.projectsPageData.panelOne.description} />
          </span>
        </div>
        <div
          ref={imageRef}
          className="relative flex h-2/5 w-full flex-col items-center justify-center overflow-hidden bg-black xl:h-2/3 2k:h-3/6"
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
  );
};

export default FirstPanel;
