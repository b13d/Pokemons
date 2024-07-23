import axios from "axios";
import { useContext, useEffect, useMemo, useState } from "react";
import useColorPokemon from "../hooks/useColorPokemon";
import { PokemonsContext } from "../PokemonContext";
import Loader from "./Loader";
import PokemonParametrs from "./PokemonParametrs";

export default function PokemonItem({ name, url }) {
  const [pokemonData, setPokemonData] = useState(null);
  const [typesPokemon, setTypesPokemon] = useState(null);
  const { setShowModal, setNamePokemon } = useContext(PokemonsContext);

  const getPokemonData = useMemo(async () => {
    // console.log("PokemonItem");

    const response = await axios(url);

    setTypesPokemon(response.data.types);
    setPokemonData(response.data);
  }, [url]);

  const arrColors = useColorPokemon(typesPokemon);

  return pokemonData ? (
    <div
      style={{
        backgroundImage: `linear-gradient(black, ${arrColors[0]}  200%)`,
      }}
      className="pokemon-item"
    >
      <div
        onClick={() => {
          setNamePokemon(pokemonData.name);
          setShowModal();
        }}
        className="pokemon-item__container"
      >
        <img
          loading={"lazy"}
          className="pokemon-item__container-sprite"
          src={pokemonData.sprites.other.home.front_default}
          alt="sprite-pokemon"
        />
      </div>

      <PokemonParametrs
        arrColors={arrColors}
        name={name}
        pokemonData={pokemonData}
      />
    </div>
  ) : (
    <Loader />
  );
}
