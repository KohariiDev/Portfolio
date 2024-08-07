"use client";
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
          className={`fixed z-[1000] flex h-screen w-screen items-center justify-center bg-[#0e0e0e] text-6xl font-bold text-hero-color`}
        >
          <>
            <motion.p
              variants={opacity}
              initial="initial"
              animate="enter"
              className="absolute z-10"
            >
              <motion.span
                className="mr-2.5 block h-3.5 w-3.5 rounded-full bg-[rgb(255,57,57)]"
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
