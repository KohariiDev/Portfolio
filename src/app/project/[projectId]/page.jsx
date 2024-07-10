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
export async function generateMetadata() {
  return {
    title: "Norbert Kohari",
    description:
      "Discover my projects: innovative web designs powered by Next.js and React, enhanced with seamless animations via Framer Motion and GSAP.",
    openGraph: {
      title: "Norbert Kohari",
      description:
        "Discover my projects: innovative web designs powered by Next.js and React, enhanced with seamless animations via Framer Motion and GSAP.",
      url: "https://norbertkohari.com",
      site_name: "NorbertKohari.com",
    },
    keywords: [
      "Website",
      "design",
      "animations",
      "web development",
      "web design",
      "developer",
      "portfolio",
    ],
    author: "Norbert Kohari",
    publisher: "Norbert Kohari",
  };
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
