import React from "react";
import "../Styles/App.scss";
import PokeList from "./PokeList";
import Pokemon from "./Pokemon";
import PokemonData from "../Data/PokemonData.json";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div className="App"></div>;
  }
}

export default App;
