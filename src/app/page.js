import dynamic from "next/dynamic";
import { Suspense } from "react";

import LazyComponent from "@/components/LazyComponent";

// Components
import PreLoader from "@/components/Preloader";

const Hero = dynamic(() => import("@/components/Hero"));
const TextPath = dynamic(() => import("@/components/TextPath"));
const Projects = dynamic(() => import("@/components/Projects"));
const Services = dynamic(() => import("@/components/Services"));

import SlidingImages from "@/components/SlidingImages";

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
      <Suspense>
        <Hero socials={socialsData} hero={heroData} />
      </Suspense>
      <Suspense>
        <TextPath textPath={textPathData} />
      </Suspense>
      <Suspense>
        <Projects projects={projectsData} />
      </Suspense>
      <Suspense>
        <Services services={servicesData} serviceText={serviceTextData} />
      </Suspense>

      <LazyComponent component={SlidingImages} />
    </main>
  );
}
