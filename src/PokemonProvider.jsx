import { useState } from "react";
import { PokemonsContext } from "./PokemonContext";

export default function PokemonProvider({ children }) {
  const [modal, setModal] = useState(false);
  const [namePokemon, setNamePokemon] = useState("");

  const setShowModal = () => {
    setModal(true);
    document.body.style.overflow = "hidden";
  };

  const setHideModal = () => {
    setModal(false);

  };

  return (
    <PokemonsContext.Provider
      value={{ modal, setShowModal, setHideModal, namePokemon, setNamePokemon }}
    >
      {children}
    </PokemonsContext.Provider>
  );
}
