import { useInView } from "framer-motion";
import { useMemo } from "react";

export const useInViewAnimation = (
  ref,
  once = false,
  margin = "0px",
  amount = 0,
) => {
  const isInView = useInView(ref, {
    once: once,
    margin: margin,
    amount: amount,
  });

  return useMemo(() => isInView, [isInView]);
};
