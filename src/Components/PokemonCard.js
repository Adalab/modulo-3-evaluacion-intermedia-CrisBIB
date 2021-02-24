import "../Styles/App.scss";

const PokemonCard = (props) => {
  const types = props.infoPokemon.types.map((type, i) => (
    <li key={i} className="eachType">
      {type}
    </li>
  ));
  return (
    <>
      <img src={props.infoPokemon.url} alt="" />
      <h3 className="pokemonName">{props.infoPokemon.name}</h3>
      <ul className="pokemonTypes">{types}</ul>
    </>
  );
};

export default PokemonCard;
