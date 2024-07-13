"use client";

import React, { useRef, useState, useEffect } from "react";
import { useInViewAnimation } from "../hooks/useInViewAnimation";
import Placeholder from "@/components/Placeholder";

const LazyComponent = ({ component: Component, preloadAfter, ...props }) => {
  const [isTrue, setIsTrue] = useState(false);
  const ref = useRef();
  const isInView = useInViewAnimation(ref, true, "650px", 0);

  useEffect(() => {
    if (preloadAfter) {
      const timer = setTimeout(() => {
        setIsTrue(true);
      }, preloadAfter);
      return () => clearTimeout(timer);
    }
  }, [preloadAfter]);

  return (
    <div ref={ref}>
      {isInView || isTrue ? <Component {...props} /> : <Placeholder />}
    </div>
  );
};

export default LazyComponent;
