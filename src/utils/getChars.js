import { LazyMotion, m } from "framer-motion";
import loadFeatures from "./framerFeatures/loadFeatures";

const getChars = (word, variant) => {
  let chars = [];
  word.split("").forEach((char, i) => {
    chars.push(
      <LazyMotion features={loadFeatures}>
        <m.span
          custom={[i * 0.02, (word.length - i) * 0.01]}
          variants={variant}
          initial="initial"
          animate="enter"
          exit="exit"
          key={char + i}
        >
          {char}
        </m.span>
      </LazyMotion>,
    );
  });
  return chars;
};
export default getChars;
