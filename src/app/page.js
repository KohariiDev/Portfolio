"use client";

// Components
import Hero from "@/components/Hero";
import TextPath from "@/components/TextPath";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import SlidingImages from "@/components/SlidingImages";
import Footer from "@/components/Footer";
import PreLoader from "../components/Preloader";

// Constants
import {
  socials,
  hero,
  textPath,
  projects,
  services,
  serviceText,
  footer,
} from "../../constants";

//utils
import openEmailClient from "../../utils/openEmailClient";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
      document.body.style.cursor = "default";
    }, 2000);
  });

  return (
    <main>
      <AnimatePresence mode="wait">
        {isLoading && <PreLoader />}
      </AnimatePresence>
      <section id="home">
        <Hero socials={socials} hero={hero} openEmailClient={openEmailClient} />
      </section>
      <section id="textpath">
        <TextPath textPath={textPath} />
      </section>
      <section id="projects">
        <Projects projects={projects} />
      </section>
      <section id="about">
        <Services services={services} serviceText={serviceText} />
      </section>
      <section id="sliding-images">
        <SlidingImages />
      </section>
      <section id="footer">
        <Footer footer={footer} openEmailClient={openEmailClient} />
      </section>
    </main>
  );
}
