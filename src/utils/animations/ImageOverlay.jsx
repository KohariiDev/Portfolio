import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect } from "react";

const ImageOverlay = ({ src, alt, overlayColor }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ x: "-100%" });
    }
  }, [controls, inView]);

  return (
    <div
      ref={ref}
      className={`relative h-2/3 w-full overflow-hidden ${overlayColor}`}
    >
      <motion.div
        className="absolute top-0 left-0 z-50 w-full h-full"
        initial={{ x: 0 }}
        animate={controls}
        transition={{ duration: 1, ease: "easeInOut" }}
      ></motion.div>
      <img src={src} alt={alt} className="object-cover w-full h-full" />
    </div>
  );
};

export default ImageOverlay;
