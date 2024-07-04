import { useCallback } from "react";

const useScrollToSection = () => {
  const scrollToSection = useCallback((id, callback) => {
    const element = document.getElementById(id);
    if (element) {
      
      document.body.style.pointerEvents = "none";

      element.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        if (callback) {
          callback();
        }
      }, 900);
      setTimeout(() => {
        // Enable pointer events
        document.body.style.pointerEvents = "auto";
      }, 1500);
    }
  }, []);

  return scrollToSection;
};

export default useScrollToSection;
