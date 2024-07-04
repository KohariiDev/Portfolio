"use client";
import styles from "./style.module.scss";
import { LazyMotion, m, AnimatePresence } from "framer-motion";
import { opacity, background } from "../animation/nav/anim";
import { useNav } from "../../context/NavContext";
import Nav from "./nav";

import loadFeatures from "../../utils/framerFeatures/loadFeatures";

export default function index() {
  const { isNavActive, setIsNavActive } = useNav();

  return (
    <LazyMotion features={loadFeatures}>
      <div className={`${styles.header}`}>
        <div className={styles.bar}>
          <div
            onClick={() => {
              setIsNavActive(!isNavActive);
            }}
            className={styles.el}
          >
            <div
              className={`${styles.burger} ${
                isNavActive ? styles.burgerActive : ""
              }`}
            ></div>
            <div className={styles.label}>
              <m.p
                variants={opacity}
                animate={!isNavActive ? "open" : "closed"}
              >
                Menu
              </m.p>
              <m.p variants={opacity} animate={isNavActive ? "open" : "closed"}>
                Close
              </m.p>
            </div>
          </div>
        </div>
        <m.div
          variants={background}
          initial="initial"
          animate={isNavActive ? "open" : "closed"}
          className={styles.background}
        ></m.div>
        <AnimatePresence mode="wait">{isNavActive && <Nav />}</AnimatePresence>
      </div>{" "}
    </LazyMotion>
  );
}
