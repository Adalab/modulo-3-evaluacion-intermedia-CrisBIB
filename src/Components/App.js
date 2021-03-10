import "../Styles/App.scss";
import PokeList from "./PokeList";
import Data from "../Data/PokemonData.json";
import { useState } from "react";

const App = () => {
  const [PokemonData, setPokemonData] = useState(Data);
  const [Favorites, setFavorites] = useState([]);

  const handleFavorites = (clickedItem) => {
    const pokemonFav = PokemonData.find((pokemon) => {
      return pokemon.id === clickedItem;
    });
    if (!Favorites.includes(pokemonFav)) {
      return setFavorites([...Favorites, pokemonFav]);
    } else if (Favorites.includes(pokemonFav)) {
      const indexPokemon = Favorites.findIndex((pokemon) => {
        return pokemon.id === clickedItem;
      });
      Favorites.splice(indexPokemon, 1);
    }
    return setFavorites([...Favorites]);
  };
  return (
    <div className="App">
      <h1 className="title">Mi lista de pokemon</h1>
      <PokeList
        handleFavorites={handleFavorites}
        favorites={Favorites}
        pokemonData={PokemonData}
      />
    </div>
  );
};

export default App;
