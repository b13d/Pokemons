import React from "react";
import {motion} from "framer-motion";

export default function Loader() {
  return (
    <div className="lodaer-wrapper">
      <motion.div
        initial={{scale: 1.5}}
        animate={{rotate: 45}}
        transition={{
          repeat: Infinity,
          duration: .2,
          ease: "easeInOut",
        }}
        className="loader"
      ></motion.div>
    </div>
  );
}
