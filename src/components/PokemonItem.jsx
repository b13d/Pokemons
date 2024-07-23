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
        backgroundImage: `linear-gradient(rgb(0,0,0,.8), ${arrColors[0]}  100%)`,
      }}
      className="z-10 justify-end w-[240px] h-[280px] rounded-2xl text-white flex flex-col"
    >
      <div
        onClick={() => {
          setNamePokemon(pokemonData.name);
          setShowModal();
        }}
        className="relative flex flex-col items-center justify-center bg-white rounded-md shadow-lg"
      >
        <img
          loading={"lazy"}
          className="absolute top-[-160px] max-w-[160px]"
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
