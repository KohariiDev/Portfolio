import React, { useRef, useMemo } from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { useInViewAnimation } from "../../hooks/useInViewAnimation";

const slideUp = (delay, y) => ({
  open: (index) => ({
    y: 0,
    rotate: 0,
    opacity: 1,
    transition: {
      delay: index * 0.02 + delay / 1000,
      duration: 1.2,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
  closed: { y: y, opacity: 0, rotate: 20 },
});

const FadeUp = ({ phrase, paragraphClass, delay = 0, lineHeight, y = 150 }) => {
  const description = useRef(null);
  const isInView = useInViewAnimation(description, true);

  const animationVariants = useMemo(() => slideUp(delay, y), [delay, y]);
  const words = useMemo(() => phrase.split(" "), [phrase]);

  return (
    <LazyMotion features={domAnimation}>
      <div ref={description} className="overflow-hidden">
        <p className={paragraphClass} style={{ lineHeight }}>
          {words.map((word, index) => (
            <span className="inline-block overflow-hidden" key={index}>
              <m.span
                className="inline-block"
                variants={animationVariants}
                custom={index}
                animate={isInView ? "open" : "closed"}
              >
                {word}
                {index < words.length - 1 && "\u00A0"}
              </m.span>
            </span>
          ))}
        </p>
      </div>
    </LazyMotion>
  );
};

export default React.memo(FadeUp);
