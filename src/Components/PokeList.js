import React from "react";
import "../Styles/App.scss";
import PokemonCard from "./PokemonCard";
import "../Styles/PokeList.scss";
import PropTypes from "prop-types";

class PokeList extends React.Component {
  render() {
    const eachPokemon = this.props.pokemonData.map((pokemonItem) => {
      return (
        <li key={pokemonItem.id} className="eachPokemon">
          <PokemonCard infoPokemon={pokemonItem} />
        </li>
      );
    });
    return <ul className="pokemonList">{eachPokemon}</ul>;
  }
}
export default PokeList;

PokeList.propTypes = {
  pokemonData: PropTypes.array,
};
