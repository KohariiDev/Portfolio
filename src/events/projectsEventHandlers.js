import { useCallback } from "react";
import { gsap } from "gsap";

function useCursorHandlers(ref) {
  const handleMouseEnter = useCallback(() => {
    if (ref.current) {
      ref.current.style.opacity = 0.9;
      gsap.to(ref.current, {
        scale: 1,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  }, [ref]);

  const handleMouseLeave = useCallback(() => {
    if (ref.current) {
      gsap.to(ref.current, {
        scale: 0,
        duration: 0.5,
        ease: "power2.in",
      });
    }
  }, [ref]);

  return { handleMouseEnter, handleMouseLeave };
}

export default useCursorHandlers;
