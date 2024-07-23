import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PokemonsContext } from "../PokemonContext";


export default function PokemonParametrs({ pokemonData, arrColors, name }) {
  const { setShowModal, setNamePokemon } = useContext(PokemonsContext);

  const pokemonStats = (pokemonDataValue, description, unit) => (
    <div>
      <p className="pokemon-parametrs__specifications-significance">
        {pokemonDataValue} {unit}
      </p>
      <p className="pokemon-parametrs__specifications-description">
        {description}
      </p>
    </div>
  );

  return (
    <section className="pokemon-parametrs">
      <h1 className="pokemon-parametrs__name">♦ {name} ♦</h1>

      <div className="pokemon-parametrs__types">
        {pokemonData.types.map((type, index) => {
          return (
            <button
              key={pokemonData.name + index}
              style={{ background: arrColors[index] }}
              className="button button__pokemon-type"
            >
              {type.type.name}
            </button>
          );
        })}
      </div>

      <div className="pokemon-parametrs__specifications">
        {pokemonStats(pokemonData.height / 10, "Athura", "M")}
        {pokemonStats(pokemonData.weight / 10, "Peso", "KG")}
      </div>

      <button
        onClick={() => {
          setNamePokemon(name);
          setShowModal();
        }}
        className="button button__pokemon-details"
      >
        Show details
      </button>
    </section>
  );
}
