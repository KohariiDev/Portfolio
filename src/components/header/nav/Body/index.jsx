import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./style.module.scss";
import { blur, translate } from "../../anim";
import useScrollToSection from "@/hooks/useScrollToSection";
import { useNav } from "@/context/NavContext";

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

  const getChars = (word) => {
    let chars = [];
    word.split("").forEach((char, i) => {
      chars.push(
        <motion.span
          custom={[i * 0.02, (word.length - i) * 0.01]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
          key={char + i}
        >
          {char}
        </motion.span>
      );
    });
    return chars;
  };

  return (
    <div className={styles.body}>
      {links.map((link, index) => {
        const { title, href } = link;
        return (
          <motion.div
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
              <motion.p
                onClick={(e) => handleNavigation(e, href)}
                className="cursor-pointer"
              >
                {getChars(title)}
              </motion.p>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}