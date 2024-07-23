import React, { useEffect, useState } from "react";
import {motion} from "framer-motion";

export default function PokemonIcon({ id, handleCheck }) {
  const [iconID, setIconID] = useState(0);

  function changeIcon() {
    setIconID(Math.floor(Math.random() * 9) + 1);
  }
  useEffect(() => {
    changeIcon();
  }, []);

  const rnd = Math.floor(Math.random() * 100);

  return (
    <motion.div
      className="pokemon-icon"
      initial={{
        y: Math.floor((Math.random() * document.body.clientHeight) / 4),
        x: Math.floor(Math.random() * document.body.clientWidth),
        rotate: rnd > 50 ? [-15, 0, 15] : [15, 0, -15],
        opacity: 1,
      }}
      animate={{
        y: document.body.clientHeight,
        opacity: 0,
      }}
      transition={{
        duration: Math.random() * 20 + 30,
      }}
      onAnimationComplete={() => {
        handleCheck(id);
        changeIcon();
      }}
    >
      <motion.img
        initial={{
          scale: 0,
        }}
        animate={{
          scale: 1,
        }}
        width={50}
        height={50}
        src={`/images/pokemon-icon-${iconID}.png`}
        alt="pokemon-icon"
      />
    </motion.div>
  );
}
