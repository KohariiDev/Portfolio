import { useInView } from "framer-motion";

export const useInViewAnimation = (ref) => {
  const isInView = useInView(ref, { triggerOnce: true });

  return isInView;
};
