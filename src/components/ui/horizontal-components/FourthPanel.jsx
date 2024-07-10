import FadeUp from "@/components/animation/FadeUp";
import React from "react";

const FourthPanel = ({ project }) => {
  return (
    <section className="panel items-center justify-center bg-hero-color pr-14 tracking-wider lg:pr-0">
      <div className="text-slate-600 lg:flex lg:gap-20 xl:gap-32 lg:w-[900px] xl:w-[1200px] 2k:w-[1900px]">
        <div className="mb-5 flex-1 lg:mb-0 2k:text-4xl">
          <span>
            <FadeUp
              phrase={project.projectsPageData.panelFour.descriptionOne}
            />
          </span>
        </div>
        <div className="flex-1 2k:text-4xl">
          <span>
            <FadeUp
              phrase={project.projectsPageData.panelFour.descriptionTwo}
            />
          </span>
        </div>
      </div>
    </section>
  );
};

export default FourthPanel;
