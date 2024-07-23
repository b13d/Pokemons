import { Outlet } from "react-router";
import "./App.css";
import Pokemons from "./Pokemons";
import PokemonProvider from "./PokemonProvider";
import Loader from "./components/Loader.jsx";

function App() {
  console.log("I am in App")

  return (
    <>
      <PokemonProvider>
        <Pokemons />
        <Outlet />
      </PokemonProvider>
    </>
  );
}

export default App;
