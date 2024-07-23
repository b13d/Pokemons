import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PokemonsContext } from "../PokemonContext";


export default function PokemonParametrs({ pokemonData, arrColors, name }) {
  const { setShowModal, setNamePokemon } = useContext(PokemonsContext);

  const pokemonStats = (pokemonDataValue, description, unit) => (
    <div>
      <p className="">
        {pokemonDataValue} {unit}
      </p>
      <p className="">
        {description}
      </p>
    </div>
  );

  return (
    <section className="text-3xl flex relative flex-col items-center justify-center gap-2">
      <h1 className="uppercase font-bold">♦ {name} ♦</h1>

      <div className="flex gap-3">
        {pokemonData.types.map((type, index) => {
          return (
            <button
              key={pokemonData.name + index}
              style={{ background: arrColors[index] }}
              className="p-2 rounded-xl"
            >
              {type.type.name}
            </button>
          );
        })}
      </div>

      <div className="flex font-medium gap-4 text-justify w-[100%] justify-around">
        {pokemonStats(pokemonData.height / 10, "Athura", "M")}
        {pokemonStats(pokemonData.weight / 10, "Peso", "KG")}
      </div>

      <button
        onClick={() => {
          setNamePokemon(name);
          setShowModal();
        }}
        className="bg-[rgb(0,0,0,.35)] font-bold px-4 py-4 rounded-md shadow-lg my-6"
      >
        Show details
      </button>
    </section>
  );
}
