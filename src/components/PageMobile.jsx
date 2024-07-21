import Image from "next/image";
import React from "react";
import VisitButton from "./ui/horizontal-components/VisitButton";

const PageMobile = ({ project }) => {
  return (
    <section className="mb-[600px] min-h-screen px-4 text-slate-800">
      <VisitButton project={project} />
      <h1 className="mb-32 text-5xl">
        {project.projectsPageData.panelOne.title}
      </h1>

      <Image
        src={project.images[0]}
        alt="Description of the image"
        width={1000}
        height={600}
        className="mb-24 object-cover"
      />

      <h2 className="mb-24 text-xl leading-relaxed">
        {project.projectsPageData.panelOne.description}
      </h2>

      <Image
        src={project.images[1]}
        alt="Description of second image"
        width={1000}
        height={600}
        className="mb-24 object-cover"
      />

      <h2 className="mb-24 text-xl leading-relaxed">
        {project.projectsPageData.panelFour.descriptionOne}
      </h2>

      <Image
        src={project.images[2]}
        alt="Description of third image"
        width={1000}
        height={600}
        className="mb-24 object-cover"
      />

      <h2 className="mb-24 text-xl leading-relaxed">
        {project.projectsPageData.panelFour.descriptionTwo}
      </h2>
    </section>
  );
};

export default PageMobile;
