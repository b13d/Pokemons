import React from "react";
import usePokemons from "../hooks/usePokemons";

export default function FindPokemon({ limit, pokemons, setPokemons }) {
  const listPokemons = usePokemons(limit);

  const handleChange = (e) => {
    console.log(e.target.value);
    if (e.target.value.trim().length === 0) {
      setPokemons(listPokemons);
      return;
    }

    let temp = pokemons.filter(
      (pokemon) =>
        pokemon.name.slice(0, e.target.value.length).toLowerCase() ===
        e.target.value.toLowerCase()
    );
    setPokemons(temp);
  };

  return (
    <div className="findpokemon">
      <input
        onChange={(e) => handleChange(e)}
        className="findpokemon__input"
        type="search"
        placeholder="Введите имя покемона..."
      />
      <div className="findpokemon__loupe"></div>
    </div>
  );
}
