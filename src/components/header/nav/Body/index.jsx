import { LazyMotion, m } from "framer-motion";
import Link from "next/link";
import styles from "./style.module.scss";
import { blur, translate } from "@/components/animation/nav/anim";
import useScrollToSection from "@/hooks/useScrollToSection";
import { useNav } from "@/context/NavContext";
import { handleNavigation } from "@/events/handleNavigation";

import getChars from "@/utils/getChars";

import loadFeatures from "@/utils/framerFeatures/loadFeatures";

export default function Body({ links, selectedLink, setSelectedLink }) {
  const scrollToSection = useScrollToSection();
  const { setIsNavActive } = useNav();

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
                  onClick={(e) =>
                    handleNavigation(e, href, scrollToSection, setIsNavActive)
                  }
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
