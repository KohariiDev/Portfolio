export const handleNavigation = (e, href, scrollToSection, setIsNavActive) => {
  e.preventDefault();
  const id = href.slice(1);
  const currentPath = window.location.pathname;

  if (currentPath.includes("/project/")) {
    window.location.href = `/#${id}`;
    setTimeout(() => {
      scrollToSection(id, () => {
        if (setIsNavActive) setIsNavActive(false);
      });
    }, 100); // timeout for route change
  } else {
    scrollToSection(id, () => {
      if (setIsNavActive) setIsNavActive(false);
    });
  }
};
