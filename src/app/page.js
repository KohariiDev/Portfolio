import dynamic from "next/dynamic";

// Components
import Hero from "../components/Hero";
import TextPath from "../components/TextPath";
import Projects from "../components/Projects";
import PreLoader from "../components/Preloader";

const Services = dynamic(() => import("../components/Services"), {
  loading: () => <p>Loading...</p>,
});

const SlidingImages = dynamic(() => import("../components/SlidingImages"), {
  loading: () => <p>Loading...</p>,
});

const Footer = dynamic(() => import("../components/Footer"), {
  loading: () => <p>Loading...</p>,
});

import {
  heroData,
  footerData,
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
      <section id="home">
        <Hero socials={socialsData} hero={heroData} />
      </section>
      <section id="textpath">
        <TextPath textPath={textPathData} />
      </section>
      <section id="projects">
        <Projects projects={projectsData} />
      </section>
      <section id="about">
        <Services services={servicesData} serviceText={serviceTextData} />
      </section>
      <section id="sliding-images">
        <SlidingImages />
      </section>
      <section id="footer">
        <Footer footer={footerData} />
      </section>
    </main>
  );
}
