import { createContext, useState, useContext } from "react";

const NavContext = createContext();

export const NavProvider = ({ children }) => {
  const [isNavActive, setIsNavActive] = useState(false);

  return (
    <NavContext.Provider value={{ isNavActive, setIsNavActive }}>
      {children}
    </NavContext.Provider>
  );
};

export const useNav = () => useContext(NavContext);
