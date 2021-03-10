import "../Styles/App.scss";
import "../Styles/PokemonCard.scss";
import PropTypes from "prop-types";
import { useState } from "react";

const PokemonCard = (props) => {
  const [favorite, setFavorite] = useState("");

  const checkFavorite = () => {
    if (favorite === "") {
      setFavorite("favPokemon");
    } else {
      return setFavorite("");
    }
  };

  const types = props.infoPokemon.types.map((type, i) => (
    <li key={i} className="eachType">
      {type}
    </li>
  ));
  const handleClick = () => {
    checkFavorite();
    const pokemonId = props.infoPokemon.id;
    props.handleFavorites(pokemonId);
  };
  return (
    <article onClick={handleClick}>
      <img
        src={props.infoPokemon.url}
        alt={"Imageden de: " + props.infoPokemon.name}
      />
      <h3 className={`pokemonName ${favorite}`}>{props.infoPokemon.name}</h3>
      <ul className="pokemonTypes">{types}</ul>
    </article>
  );
};

export default PokemonCard;

PokemonCard.propTypes = {
  types: PropTypes.array,
  name: PropTypes.string,
  url: PropTypes.string,
};
