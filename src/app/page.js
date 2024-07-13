import LazyComponent from "@/components/LazyComponent";

// Components
import PreLoader from "@/components/Preloader";
import Hero from "@/components/Hero";
import SlidingImages from "@/components/SlidingImages";
import Projects from "@/components/Projects";
import TextPath from "@/components/TextPath";
import Services from "@/components/Services";

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
      <TextPath textPath={textPathData} />
      <Projects projects={projectsData} />
      <Services services={servicesData} serviceText={serviceTextData} />

      <LazyComponent component={SlidingImages} margin={"550px"} />
    </main>
  );
}
