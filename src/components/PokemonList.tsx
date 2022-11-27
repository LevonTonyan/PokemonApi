import React from "react";
import { PokemonInList } from "./../models";
import Pokemon from "./PokemonItem";
import "./Pokemon.css";


interface Props {
    pokemonList:PokemonInList[]
 }


const PokemonList:React.FC<Props> = ({ pokemonList }) => {
  return (
    <div className="listContainer">
      {pokemonList.map((pokemon: PokemonInList, i: number) => {
        return <Pokemon data={pokemon} key={i} />;
      })}
    </div>
  );
};

export default PokemonList;
