import { useInView } from "framer-motion";

export const useInViewAnimation = (ref, once = false) => {
  const isInView = useInView(ref, { once: once });

  return isInView;
};
