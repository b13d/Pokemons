import {useContext, useEffect, useMemo, useState} from "react";
import FindPokemon from "./components/FindPokemon";
import PokemonList from "./components/PokemonList";
import usePokemons from "./hooks/usePokemons";
import SpawnIcons from "./components/SpawnIcons";
import {PokemonsContext} from "./PokemonContext";
import Pokemon from "./Pokemon";

export default function Pokemons() {
  const [pokemons, setPokemons] = useState([]);
  const [limit, setLimit] = useState(20);
  const listPokemons = usePokemons(limit);
  const [allPokemons, setAllPokemons] = useState([]);
  const [inputText, setInputText] = useState('');

  useMemo(() => {
    setAllPokemons(listPokemons);
    if (inputText.length === 0) {
      setPokemons(listPokemons);
    }
  }, [listPokemons])


  const handleClickShowMore = () => {
    setLimit(limit + 20);
  };

  console.log("Pokemons")

  return (
    <>
      <article className="pokemons-wrapper">
        <div>
          {/*все иконки сайта, у них есть баг, они спавняться все сразу, если вернуться на страницу*/}
          <SpawnIcons/>
        </div>
        <Pokemon/>
        <FindPokemon
          inputText={inputText}
          setInputText={setInputText}
          limit={limit}
          pokemons={pokemons}
          setPokemons={setPokemons}
        />
        <PokemonList
          pokemons={pokemons}
          handleClickShowMore={handleClickShowMore}
        />
      </article>
    </>
  );
}
