import { LazyMotion, m } from "framer-motion";
import Link from "next/link";
import styles from "./style.module.scss";
import { blur, translate } from "../../../animation/nav/anim";
import useScrollToSection from "../../../../hooks/useScrollToSection";
import { useNav } from "../../../../context/NavContext";

import getChars from "@/utils/getChars";

import loadFeatures from "../../../../utils/framerFeatures/loadFeatures";

export default function Body({ links, selectedLink, setSelectedLink }) {
  const scrollToSection = useScrollToSection();
  const { setIsNavActive } = useNav();

  const handleNavigation = (e, href) => {
    e.preventDefault();
    const id = href.slice(1);
    const currentPath = window.location.pathname;

    if (currentPath.includes("/project/")) {
      window.location.href = `/#${id}`;
      setTimeout(() => {
        scrollToSection(id, () => {
          setIsNavActive(false);
        });
      }, 100); // Small timeout to allow route change
    } else {
      scrollToSection(id, () => {
        setIsNavActive(false);
      });
    }
  };

  return (
    <div className={styles.body}>
      {links.map((link, index) => {
        const { title, href } = link;
        return (
          <LazyMotion features={loadFeatures}>
            <m.div
              key={`l_${index}`}
              onMouseOver={() => {
                setSelectedLink({ isActive: true, index });
              }}
              onMouseLeave={() => {
                setSelectedLink({ isActive: false, index });
              }}
              variants={blur}
              animate={
                selectedLink.isActive && selectedLink.index !== index
                  ? "open"
                  : "closed"
              }
            >
              <Link href={href} passHref>
                <m.p
                  onClick={(e) => handleNavigation(e, href)}
                  className="cursor-pointer"
                >
                  {getChars(title, translate)}
                </m.p>
              </Link>
            </m.div>
          </LazyMotion>
        );
      })}
    </div>
  );
}
