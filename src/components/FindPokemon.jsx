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
    <div className="flex justify-center items-center m-32">
      <input
        onChange={(e) => handleChange(e)}
        className="text-white border-none outline-0 p-4 w-[80%] rounded-2xl text-2xl bg-[rgb(0,0,0,.5)]"
        type="search"
        placeholder="Введите имя покемона..."
      />
      <div className="findpokemon__loupe"></div>
    </div>
  );
}
