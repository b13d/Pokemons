import {useContext, useState} from "react";
import usePokemons from "./hooks/usePokemons.jsx";
import {PokemonsContext} from "./PokemonContext.js";
import {AnimatePresence, motion} from "framer-motion";

export default function TestAnimate() {
  const [showText, setShowText] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [numbers, setNumbers] = useState([1,2,3])

  return (
    <AnimatePresence>
      {showText && <motion.h1
        key={[numbers[activeIndex]]}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
      >Hello world!</motion.h1>}

      <button onClick={() => {
        setActiveIndex(() => {
          if (activeIndex + 1 < numbers.length) {
            return activeIndex + 1;
          }  else {
            return 0;
          }
        });
        setShowText(!showText)
      }}>{showText ? "hide" : "show"}</button>
    </AnimatePresence>
  )
}


