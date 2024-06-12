import { projects } from "../../../../constants";
import { notFound } from "next/navigation";
import { slugify } from "../../../../utils/slugify";
import { ContainerScroll } from "@/components/design/ui/container-scroll-animation";
import HorizontalScroll from "@/components/design/ui/HorizontalScroll";
import Image from "next/image";

export async function generateStaticParams() {
  return projects.map((project) => ({
    projectId: slugify(project.title),
  }));
}

const ProjectPage = ({ params }) => {
  const projectId = params.projectId;
  const project = projects.find((proj) => slugify(proj.title) === projectId);

  if (!project) {
    notFound();
  }

  const firstImage = project.src[3];

  return (
    <>
      <section className="bg-hero-color fade-in">
        <ContainerScroll titleComponent={project.title}>
          <Image
            src={firstImage}
            alt={project.alt}
            className="h-screen md:h-full rounded-lg"
          />
        </ContainerScroll>

        <HorizontalScroll project={project} />
      </section>
    </>
  );
};

export default ProjectPage;
