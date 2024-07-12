"use client";

import React, { useRef } from "react";
import { useInViewAnimation } from "../hooks/useInViewAnimation";

const LazyComponent = ({ component: Component, ...props }) => {
  const ref = useRef();
  const isInView = useInViewAnimation(ref, true, "500px", 0);

  return <div ref={ref}>{isInView ? <Component {...props} /> : null}</div>;
};

export default LazyComponent;
