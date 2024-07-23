import axios from "axios";
import {useContext, useEffect, useMemo, useState} from "react";
import {PokemonsContext} from "./PokemonContext";
import Loader from "./components/Loader";
import {AnimatePresence, motion} from "framer-motion";

export default function Pokemon() {
  const {modal, setHideModal, namePokemon, setNamePokemon} = useContext(PokemonsContext);
  const [pokemonData, setPokemonData] = useState({});
  const [typesPokemon, setTypesPokemon] = useState(null);

  const getPokemon = useMemo(async () => {
    console.log("getPokemon");

    if (namePokemon === "") return;

    const response = await axios(
      `https://pokeapi.co/api/v2/pokemon/${namePokemon}`
    );

    setTypesPokemon(response.data.types);
    setPokemonData(response.data);
  }, [namePokemon]);

  const handleClick = (e) => {
    e.stopPropagation();
    e.preventDefault();

    console.log(e);

    setHideModal();
    setPokemonData({});
    setNamePokemon("");
  }

  return (
    <AnimatePresence>
      {modal && Object.keys(pokemonData).length > 0 ? (
        <div onClick={handleClick} className="bg-[rgb(0,0,0,.8)] w-[100%] h-[100%] fixed top-0 left-0 z-10">
          <motion.div
            // onClick={handleClick}
            key={namePokemon}
            initial={{scale: 0, opacity: 0}}
            animate={{scale: 1, opacity: 1}}
            exit={{
              scale: 0, opacity: 0,
            }}
            transition={{duration: .2}}
            className="z-[100] text-white w-fit h-fit bg-[rgb(0,0,0,.25)] p-12 right-0 left-0 top-0 bottom-0 rounded-[10px] fixed font-white m-auto uppercase text-4xl flex justify-center items-center gap-12"
          >
            <Sprites pokemonData={pokemonData}/>
            <Stats pokemonData={pokemonData}/>
            <button
              className="items-start text-red-600 self-start text-6xl bg-[rgb(245,33,33,.1)] rounded-[50%] px-5 py-3"
              onClick={() => {
                handleClick();
              }}
            >
              &#10006;
            </button>
          </motion.div>
        </div>) : (
        modal && (
          <div className={"loading"}>
            <Loader/>
          </div>)
      )
      }
    </AnimatePresence>
  );
}

function Sprites(props) {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <img
          className="w-[150px]"
          src={props.pokemonData.sprites.other.showdown.front_default}
          alt="pokemon-sprite"
        />
        <img
          className="w-[150px]"
          src={props.pokemonData.sprites.other.showdown.back_default}
          alt="pokemon-sprite"
        />
      </div>
      <p>
        name: <strong>{props.pokemonData.name}</strong>
      </p>
      <p>
        weight: <strong>{props.pokemonData.weight / 10} KG</strong>
      </p>
    </div>
  )
}

function Stats(props) {
  return (
    <div className="pokemon-stats">
      <h2 className="pokemon-stats__h2">stats:</h2>
      {props.pokemonData.stats.map((stat, index) => {
        return (
          <div key={stat.stat.name}>
            <p className="pokemon-stats__stat">
              {stat.stat.name} — <strong>{stat.base_stat}</strong>
            </p>
          </div>
        );
      })}
    </div>
  )
}
