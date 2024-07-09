import { projects } from "../../../../constants";
import { notFound } from "next/navigation";
import { slugify } from "../../../utils/slugify";
import { ContainerScroll } from "../../../components/ui/container-scroll-animation";
import HorizontalScroll from "../../../components/ui/HorizontalScroll";
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

  const firstImage = project.images[0];

  return (
    <>
      <section className="bg-hero-color">
        <ContainerScroll titleComponent={project.title}>
          <Image
            src={firstImage}
            alt="an image of the project"
            className="h-screen rounded-lg md:h-full"
            priority
            
          />
        </ContainerScroll>

        <HorizontalScroll project={project} />
      </section>
    </>
  );
};

export default ProjectPage;
