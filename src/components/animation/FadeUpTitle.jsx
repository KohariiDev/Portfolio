import { motion } from "framer-motion";

// Function to generate animation settings with an optional delay
const getFadeUpTitleAnimation = (additionalDelay = 0) => ({
  initial: { y: 300 }, // Start from below the initial position
  animate: { y: 0 }, // Move to the original position
  transition: {
    duration: 1,
    ease: [1, 0.16, 0.38, 0.97],
    delay: additionalDelay, // This will be the base delay
  },
});

const FadeUpTitle = ({ word, delay = 0 }) => {
  // Generate animation settings with the provided delay
  const FadeUpTitleAnimation = getFadeUpTitleAnimation(delay / 1000);

  return (
    <div style={{ display: "inline-block", overflow: "hidden" }}>
      {word.split("").map((char, index) => (
        <motion.span
          key={index}
          className="md:inline-block"
          style={{ marginRight: char === " " ? "0.125em" : undefined }} // Only add space if character is a space
          variants={FadeUpTitleAnimation}
          initial="initial"
          animate="animate"
          transition={{
            ...FadeUpTitleAnimation.transition,
            delay: FadeUpTitleAnimation.transition.delay + index * 0.1,
          }}
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
};

export default FadeUpTitle;
