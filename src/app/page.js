import dynamic from "next/dynamic";
import { Suspense } from "react";

import LazyComponent from "@/components/LazyComponent";

// Components
import PreLoader from "@/components/Preloader";
import Hero from "@/components/Hero";
import SlidingImages from "@/components/SlidingImages";
import Projects from "@/components/Projects";

const TextPath = dynamic(() => import("@/components/TextPath"));
const Services = dynamic(() => import("@/components/Services"));

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

      <LazyComponent
        component={Projects}
        preloadAfter={1800}
        projects={projectsData}
      />

      <Suspense>
        <Services services={servicesData} serviceText={serviceTextData} />
      </Suspense>

      <LazyComponent component={SlidingImages} />
    </main>
  );
}
