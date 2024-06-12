import { useEffect, useState } from "react";

const useScrollSections = (sections) => {
  const [activeSection, setActiveSection] = useState(sections[0].id);

  useEffect(() => {
    const handleScroll = () => {
      let newActiveSection = activeSection;
      const viewportHeight = window.innerHeight;
      const triggerPoint = viewportHeight * 0.1;

      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= triggerPoint && rect.bottom >= triggerPoint) {
            newActiveSection = section.id;
          }
        }
      });

      if (newActiveSection !== activeSection) {
        setActiveSection(newActiveSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize the active section on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections, activeSection]);

  return activeSection;
};

export default useScrollSections;
