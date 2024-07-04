import styles from "./style.module.scss";
import { translate } from "@/components/animation/nav/anim";
import { LazyMotion, m } from "framer-motion";

import loadFeatures from "@/utils/framerFeatures/loadFeatures";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <LazyMotion features={loadFeatures}>
        <ul>
          <m.li
            custom={[0.3, 0]}
            variants={translate}
            initial="initial"
            animate="enter"
            exit="exit"
          >
            <span>Made by:</span>Studio Lumio
          </m.li>
        </ul>
        <ul>
          <m.li
            custom={[0.3, 0]}
            variants={translate}
            initial="initial"
            animate="enter"
            exit="exit"
          >
            <span>Typography:</span> Google Fonts
          </m.li>
        </ul>
        <ul>
          <m.li
            custom={[0.3, 0]}
            variants={translate}
            initial="initial"
            animate="enter"
            exit="exit"
          >
            <span>Images:</span> Freepik, Envato
          </m.li>
        </ul>
        <ul>
          <m.li
            custom={[0.3, 0]}
            variants={translate}
            initial="initial"
            animate="enter"
            exit="exit"
          >
            Privacy Policy
          </m.li>
          <m.li
            custom={[0.3, 0]}
            variants={translate}
            initial="initial"
            animate="enter"
            exit="exit"
          >
            Terms & Conditions
          </m.li>
        </ul>
      </LazyMotion>
    </div>
  );
}
