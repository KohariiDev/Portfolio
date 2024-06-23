import React, { useRef, useEffect, useState, useMemo } from "react";
import { useInView, motion } from "framer-motion";

const slideUp = (delay) => ({
  open: (index) => ({
    y: 0,
    rotate: 0,
    opacity: 1,
    transition: {
      delay: index * 0.02 + delay / 1000,
      duration: 2,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
  closed: { y: 800, opacity: 0, rotate: 20 },
});

const FadeUp = ({ phrase, paragraphClass, delay = 0, lineHeight }) => {
  const description = useRef(null);
  const isInView = useInView(description);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  const animationVariants = useMemo(() => slideUp(delay), [delay]);
  const words = useMemo(() => phrase.split(" "), [phrase]);

  return (
    <div ref={description} className="overflow-hidden">
      <div>
        <p className={`${paragraphClass}`} style={{ lineHeight }}>
          {words.map((word, index) => (
            <span className="inline-block overflow-hidden" key={index}>
              <motion.span
                className="inline-block"
                variants={animationVariants}
                custom={index}
                animate={hasAnimated ? "open" : "closed"}
              >
                {word}
                {index < words.length - 1 && "\u00A0"}
              </motion.span>
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default React.memo(FadeUp);
