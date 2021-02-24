import React from "react";
import "../Styles/App.scss";
import PokeList from "./PokeList";
import Data from "../Data/PokemonData.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      PokemonData: Data,
    };
  }
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <h1 className="title">Mi lista de pokemon</h1>
        <PokeList pokemonData={this.state.PokemonData} />
      </div>
    );
  }
}

export default App;
