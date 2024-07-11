import { useInViewAnimation } from "@/hooks/useInViewAnimation";
import Image from "next/image";
import React, { useRef } from "react";

const SecondPanel = ({ project }) => {
  const imageRef = useRef(null);

  const isImageInView = useInViewAnimation(imageRef, true, "0px", 0.5);
  return (
    <section className="panel">
      <div className="relative h-full w-full">
        <div
          ref={imageRef}
          className={`absolute left-0 top-0 z-50 h-full w-full bg-hero-color transition-transform delay-300 duration-1000 ease-in-out ${
            isImageInView ? "translate-x-full" : "translate-x-0"
          }`}
        ></div>
        <Image
          src={project.projectsPageData.panelTwo.image}
          alt="hero"
          fill
          sizes="100vw"
          className="h-1/2 w-1/2 object-contain"
        />
      </div>
    </section>
  );
};

export default SecondPanel;
