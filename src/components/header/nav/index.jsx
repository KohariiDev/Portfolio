"use client";
import styles from "./style.module.scss";
import { useState } from "react";
import { LazyMotion, m } from "framer-motion";
import { height } from "../../animation/nav/anim";
import Body from "./Body";
import Footer from "./Footer";
import Image from "./Image";
import { links } from "../../../data/navData";
import { useNav } from "../../../context/NavContext";

import loadFeatures from "../../../utils/framerFeatures/loadFeatures";

export default function Index() {
  const [selectedLink, setSelectedLink] = useState({
    isActive: false,
    index: 0,
  });

  const { setIsNavActive } = useNav();

  return (
    <LazyMotion features={loadFeatures}>
      <m.div
        variants={height}
        initial="initial"
        animate="enter"
        exit="exit"
        className={styles.nav}
      >
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <Body
              links={links}
              setIsNavActive={setIsNavActive}
              selectedLink={selectedLink}
              setSelectedLink={setSelectedLink}
            />
            <Footer />
          </div>
          <Image
            src={links[selectedLink.index].src}
            isActive={selectedLink.isActive}
          />
        </div>
      </m.div>{" "}
    </LazyMotion>
  );
}
