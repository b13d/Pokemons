import { useState } from "react";
import { PokemonsContext } from "./PokemonContext";

export default function PokemonProvider({ children }) {
  const [modal, setModal] = useState(false);
  const [namePokemon, setNamePokemon] = useState("");

  const setShowModal = () => {
    setModal(true);
    document.body.classList.add("body__hide");
    // document.body.style.overflow = "hidden";
  };

  const setHideModal = () => {
    setModal(false);
    document.body.classList.remove("body__hide");
    // document.body.style.overflow = "";
  };

  return (
    <PokemonsContext.Provider
      value={{ modal, setShowModal, setHideModal, namePokemon, setNamePokemon }}
    >
      {children}
    </PokemonsContext.Provider>
  );
}
