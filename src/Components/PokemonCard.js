import "../Styles/App.scss";

const PokemonCard = (props) => {
  const types = props.infoPokemon.types.map((type, i) => (
    <li key={i}>{type}</li>
  ));
  return (
    <div className="pokemonCard">
      <img src={props.infoPokemon.url} alt="" />
      <h2>{props.infoPokemon.name}</h2>
      <ul className="pokemonList">{types}</ul>
    </div>
  );
};

export default PokemonCard;
