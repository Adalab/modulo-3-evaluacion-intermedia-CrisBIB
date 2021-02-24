import React from "react";
import "../Styles/App.scss";

class PokemonCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render(props) {
    const types = this.props.infoPokemon.types.map((type, i) => (
      <li key={i}>{type}</li>
    ));

    return (
      <div className="pokemonCard">
        <img src={this.props.infoPokemon.url} alt="" />
        <h2>{this.props.infoPokemon.name}</h2>
        <ul className="pokemonList">{types}</ul>
      </div>
    );
  }
}

export default PokemonCard;
