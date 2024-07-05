import useMousePosition from "../../hooks/useMousePosition";
import { useEffect, useRef, forwardRef } from "react";
import gsap from "gsap";

const CustomCursor = forwardRef((props, ref) => {
  const { x, y } = useMousePosition();

  useEffect(() => {
    if (ref.current) {
      gsap.to(ref.current, {
        left: x,
        top: y,
        duration: 1,
        ease: "power4.out",
      });
    }
  }, [x, y, ref]);

  useEffect(() => {
    if (ref.current) {
      gsap.fromTo(
        ref.current,
        { scale: 0 },
        { scale: 1, duration: 0.5, ease: "power3.out" }
      );
    }
  }, []);

  return (
    <div
      ref={ref}
      className="fixed w-[110px] h-[110px] uppercase rounded-full bg-secondary-color text-xs tracking-widest text-slate-100 flex items-center justify-center pointer-events-none z-50"
      style={{ transform: "translate(-50%, -50%)", opacity: 0 }}
    >
      View project
    </div>
  );
});

export default CustomCursor;
