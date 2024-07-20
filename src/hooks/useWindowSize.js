"use client"

import { useState, useEffect } from "react";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
      });
    }

    function debounce(func, wait) {
      let timeout;
      return function () {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, arguments), wait);
      };
    }

    const debouncedHandleResize = debounce(handleResize, 100);

    window.addEventListener("resize", debouncedHandleResize);
    handleResize();

    return () => window.removeEventListener("resize", debouncedHandleResize);
  }, []);

  return windowSize;
}

export default useWindowSize;
