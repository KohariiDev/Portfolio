import { projects } from "../../../../constants";
import { notFound } from "next/navigation";
import { slugify } from "../../../utils/slugify";
import PageVideo from "../../../components/PageVideo";
import HorizontalScroll from "../../../components/ui/HorizontalScroll";
import ProjectVideo from "../../../components/ProjectVideo";

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

  return (
    <>
      <section className="bg-hero-color">
        <PageVideo>
          <ProjectVideo />
        </PageVideo>

        <HorizontalScroll project={project} />
      </section>
    </>
  );
};

export default ProjectPage;
