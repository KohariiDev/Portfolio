"use client";

import React, { useRef } from "react";
import { useInViewAnimation } from "../hooks/useInViewAnimation";

const LazyComponent = ({ component: Component, margin, ...props }) => {
  const ref = useRef();
  const isInView = useInViewAnimation(ref, true, margin, 0);

  return <div ref={ref}>{isInView ? <Component {...props} /> : null}</div>;
};

export default LazyComponent;
