import React from "react";
import "./Pokemon.css";

import { SinglePokemon } from "./../models";

interface Props {
  pokemon: SinglePokemon;
}

const PokemonCard: React.FC<Props> = ({ pokemon }: Props) => {
  return (
    <div className="pok">
      <h1>{pokemon.name?.toLocaleUpperCase()}</h1>
      <img src={pokemon.sprites?.other.dream_world.front_default} alt="" />
      <div>
        <p>Weight: {pokemon.weight}</p>
        <p>Height: {pokemon.height}</p>
        <p>base_experience: {pokemon.base_experience}</p>
      </div>
    </div>
  );
};

export default PokemonCard;
