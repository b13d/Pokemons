import axios from "axios";
import React, { useEffect, useState } from "react";

export default function usePokemons(limit) {
  const [pokemons, setPokemons] = useState([]);

  const getPokemons = async () => {
    const response = await axios(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}`
    );

    setPokemons(response.data.results);
  };

  useEffect(() => {
    getPokemons();
  }, [limit]);

  return pokemons;
}
