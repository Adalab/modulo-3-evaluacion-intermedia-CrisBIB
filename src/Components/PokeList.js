import React from "react";
import "../Styles/App.scss";
import PokemonCard from "./PokemonCard";

class PokeList extends React.Component {
  constructor(props) {
    super(props);
  }
  render(props) {
    const eachPokemon = this.props.pokemonData.map((pokemonItem) => {
      return (
        <li key={pokemonItem.id}>
          <PokemonCard infoPokemon={pokemonItem} />
        </li>
      );
    });
    return <ul className="pokemonList">{eachPokemon}</ul>;
  }
}
export default PokeList;
