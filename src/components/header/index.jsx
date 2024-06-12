"use client";
import styles from "./style.module.scss";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { opacity, background } from "./anim";
import { useNav } from "@/context/NavContext";
import Nav from "./nav";

export default function index({ color }) {
  const { isNavActive, setIsNavActive } = useNav();

  return (
    <div className={`${color} ${styles.header}`}>
      <div className={styles.bar}>
        {/* <Link href="/">Norbert</Link> */}
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
            <motion.p
              variants={opacity}
              animate={!isNavActive ? "open" : "closed"}
            >
              Menu
            </motion.p>
            <motion.p
              variants={opacity}
              animate={isNavActive ? "open" : "closed"}
            >
              Close
            </motion.p>
          </div>
        </div>
      </div>
      <motion.div
        variants={background}
        initial="initial"
        animate={isNavActive ? "open" : "closed"}
        className={styles.background}
      ></motion.div>
      <AnimatePresence mode="wait">{isNavActive && <Nav />}</AnimatePresence>
    </div>
  );
}
