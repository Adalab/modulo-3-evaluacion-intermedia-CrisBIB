import React from "react";
import "../Styles/App.scss";
import PokeList from "./PokeList";
import PokemonData from "../Data/PokemonData.json";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <PokeList pokemonData={PokemonData} />
      </div>
    );
  }
}

export default App;
