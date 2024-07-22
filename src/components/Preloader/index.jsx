"use client";
import styles from "./style.module.scss";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { opacity, slideUp } from "./anim";

export default function Index() {
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

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          variants={slideUp}
          initial="initial"
          exit="exit"
          className={`${styles.introduction} text-6xl font-bold text-hero-color`}
        >
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
          </>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
