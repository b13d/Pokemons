import React, {useMemo} from "react";
import usePokemons from "../hooks/usePokemons";

export default function FindPokemon(props) {
  // {allPokemons, limit, pokemons, setPokemons, setInputText }
  const listPokemons = usePokemons(props.limit);

  useMemo(() => {
    console.log("Вызов внутри МЕМО")

    let temp = listPokemons.filter(
      (pokemon) =>
        pokemon.name.slice(0, props.inputText.length).toLowerCase() ===
        props.inputText.toLowerCase()
    );

    props.setInputText(props.inputText.toLowerCase());
    props.setPokemons(temp);
  }, [listPokemons])



  const handleChange = (e) => {
    if (e.target.value.trim().length === 0) {
      props.setInputText("");
      props.setPokemons(listPokemons);
      return;
    }

    let temp = listPokemons.filter(
      (pokemon) =>
        pokemon.name.slice(0, e.target.value.length).toLowerCase() ===
        e.target.value.toLowerCase()
    );

    props.setInputText(e.target.value.toLowerCase());
    props.setPokemons(temp);
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
