"use client";
import styles from "./style.module.scss";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { opacity, slideUp } from "./anim";

export default function Index() {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setisLoading(false);
      document.body.style.cursor = "default";
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
    dimension.height
  }  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          variants={slideUp}
          initial="initial"
          exit="exit"
          className={`${styles.introduction} text-6xl font-bold text-hero-color`}
        >
          {dimension.width > 0 && (
            <>
              <motion.p variants={opacity} initial="initial" animate="enter">
                <motion.span
                  initial={{ y: -300 }}
                  animate={{
                    y: 0,
                    transition: {
                      type: "spring",
                      delay: 0.5,
                      stiffness: 80,
                      damping: 2,
                      mass: 0.2,
                      bounce: 0.2,
                      duration: 1,
                    },
                  }}
                ></motion.span>
                HELLO
              </motion.p>
              <svg>
                <motion.path
                  variants={curve}
                  initial="initial"
                  exit="exit"
                ></motion.path>
              </svg>
            </>
          )}
        </motion.div>
      )}{" "}
    </AnimatePresence>
  );
}
