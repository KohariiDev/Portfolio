import dynamic from "next/dynamic";
import { Suspense } from "react";

// Components
import Hero from "../components/Hero";
import PreLoader from "../components/Preloader";

const TextPath = dynamic(() => import("../components/TextPath"));
const Projects = dynamic(() => import("../components/Projects"));
const Services = dynamic(() => import("../components/Services"));

const SlidingImages = dynamic(() => import("../components/SlidingImages"));

import {
  heroData,
  projectsData,
  servicesData,
  serviceTextData,
  socialsData,
  textPathData,
} from "../data/index";

export default function Home() {
  return (
    <main>
      <PreLoader />
      <Hero socials={socialsData} hero={heroData} />
      <Suspense>
        <TextPath textPath={textPathData} />
      </Suspense>
      <Suspense>
        <Projects projects={projectsData} />
      </Suspense>
      <Suspense>
        <Services services={servicesData} serviceText={serviceTextData} />
      </Suspense>
      <Suspense>
        <SlidingImages />
      </Suspense>
    </main>
  );
}
