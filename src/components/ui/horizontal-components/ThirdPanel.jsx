import FadeUp from "@/components/animation/FadeUp";
import React from "react";

const FourthPanel = ({ project }) => {
  return (
    <section className="panel w-screen items-center justify-center bg-hero-color pr-14 tracking-widest lg:pr-0">
      <div className="mb-5 ml-48 w-[1200px] 2k:w-[1800px] text-sm uppercase text-slate-800 lg:mb-0 lg:text-4xl 2k:text-6xl">
        <span>
          <FadeUp
            phrase={project.projectsPageData.panelThree.description}
            lineHeight="1.2em"
          />
        </span>
      </div>
    </section>
  );
};

export default FourthPanel;
