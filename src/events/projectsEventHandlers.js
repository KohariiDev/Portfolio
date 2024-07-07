import { gsap } from "gsap";

const handleMouseEnter = (ref) => {
  if (ref.current) {
    ref.current.style.opacity = 0.9;
    gsap.to(ref.current, {
      scale: 1,
      duration: 0.5,
      ease: "power2.out",
    });
  }
};

const handleMouseLeave = (ref) => {
  if (ref.current) {
    gsap.to(ref.current, {
      scale: 0,
      duration: 0.5,
      ease: "power2.in",
    });
  }
};

export { handleMouseEnter, handleMouseLeave };
