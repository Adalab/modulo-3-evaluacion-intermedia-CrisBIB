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
          <PokemonCard
            handleFavorites={this.props.handleFavorites}
            infoPokemon={pokemonItem}
          />
        </li>
      );
    });
    const eachFavorite = this.props.favorites.map((favorite) => {
      return (
        <li key={favorite.id}>
          <img src={favorite.url} alt={"Imageden de: " + favorite.name} />
        </li>
      );
    });
    return (
      <div>
        <ul className="pokemonList">{eachPokemon}</ul>
        <h3>Mis Pokemons favoritos son...</h3>
        <ul className="favoritesList">{eachFavorite}</ul>
      </div>
    );
  }
}
export default PokeList;

PokeList.propTypes = {
  pokemonData: PropTypes.array,
};
