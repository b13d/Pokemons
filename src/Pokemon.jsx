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

  const handleClick = () => {
    setHideModal();
    setPokemonData({});
    setNamePokemon("");
  }

  return (
    <AnimatePresence>
      {modal && Object.keys(pokemonData).length > 0 ? (
        <div onClick={handleClick} className="pokemon__background">
          <motion.div
            onClick={handleClick}
            key={namePokemon}
            initial={{scale: 0, opacity: 0}}
            animate={{scale: 1, opacity: 1}}
            exit={{
              scale: 0, opacity: 0,
            }}
            transition={{duration: .2}}
            className="pokemon"
          >
            <button
              className="pokemon__close-modal"
              onClick={() => {
                setNamePokemon("");
                handleClick();
              }}
            >
              &#10006;
            </button>

            <Sprites pokemonData={pokemonData}/>
            <Stats pokemonData={pokemonData}/>
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
      <div className="pokemon__sprites">
        <img
          className="pokemon__sprites-sprite"
          src={props.pokemonData.sprites.other.showdown.front_default}
          alt="pokemon-sprite"
        />
        <img
          className="pokemon__sprites-sprite"
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
