import { LazyMotion, m } from "framer-motion";
import React, { useMemo } from "react";
import loadFeatures from "../../utils/framerFeatures/loadFeatures";

const getFadeUpTitleAnimation = (additionalDelay = 0) => ({
  initial: { y: 300 },
  animate: { y: 0 },
  transition: {
    duration: 1,
    ease: [1, 0.16, 0.38, 0.97],
    delay: additionalDelay,
  },
});

const FadeUpTitle = ({ word, delay = 0 }) => {
  const FadeUpTitleAnimation = useMemo(
    () => getFadeUpTitleAnimation(delay / 1000),
    [delay]
  );

  return (
    <LazyMotion features={loadFeatures}>
      <div style={{ display: "inline-block", overflow: "hidden" }}>
        {word.split("").map((char, index) => (
          <m.span
            key={index}
            className="md:inline-block"
            style={{ marginRight: char === " " ? "0.125em" : undefined }}
            variants={FadeUpTitleAnimation}
            initial="initial"
            animate="animate"
            transition={{
              ...FadeUpTitleAnimation.transition,
              delay: FadeUpTitleAnimation.transition.delay + index * 0.1,
            }}
          >
            {char}
          </m.span>
        ))}
      </div>
    </LazyMotion>
  );
};

export default React.memo(FadeUpTitle);
