import {useState} from "react";
import PokemonItem from "./PokemonItem";
import {motion} from "framer-motion";


export default function PokemonList({
                                      setModal,
                                      pokemons,
                                      handleClickShowMore,
                                    }) {
  const variants = {
    anim: () => ({
      scale: [1, 1.25, 1.5, 1.25, 1],
      transition: {
        repeat: Infinity,
        ease: "linear",
        duration: 1,
      },
    }),
  };

  return (
    <>
      <article className="grid z-[5] grid-cols-[1fr,1fr,1fr] gap-10 max-w-[1000px] m-auto grid">
        {pokemons.map((pokemon) => {
          return (
            <PokemonItem
              key={pokemon.name}
              name={pokemon.name}
              url={pokemon.url}
              setModal={setModal}
            />
          );
        })}
      </article>
      <div style={{textAlign: "center"}}>
        <button
          className="max-w-[100px] my-16"
          onClick={() => handleClickShowMore()}
        >
          <motion.img
            animate="anim"
            variants={variants}
            src="/public/images/down-arrow.png"
            alt="arrow"
          />
        </button>
      </div>
    </>
  );
}
