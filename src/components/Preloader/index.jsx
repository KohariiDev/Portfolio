"use client";
import styles from "./style.module.scss";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { opacity, slideUp } from "./anim";

export default function Index() {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

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
              initial={{ y: -300 }} // Start from above the screen
              animate={{
                y: 0, // End at the original position
                transition: {
                  type: "spring",
                  delay: 0.5,
                  stiffness: 80, // How rigid the spring is
                  damping: 2, // Resistance, lower for more bounciness
                  mass: 0.2, // Mass of the object, affects the momentum
                  bounce: 0.2, // Bounciness of the spring, 0 to 1 (0 for no bounce, 1 for super bouncy)
                  duration: 1, // Duration of the animation in seconds (optional)
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
  );
}
