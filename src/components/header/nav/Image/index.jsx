import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./style.module.scss";
import { opacity } from "../../anim";

export default function Index({ src, isActive }) {
  return (
    <motion.div
      variants={opacity}
      initial="initial"
      animate={isActive ? "open" : "closed"}
      className={styles.imageContainer}
    >
      <Image
        src={`/images/${src}`}
        fill={true}
        alt="image"
        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </motion.div>
  );
}
