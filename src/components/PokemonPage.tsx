import React from "react";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import LinearProgress from "@mui/material/LinearProgress";
import { getOne } from "../api/api";
import PokemonCard from "./PokemonCard";
import { SinglePokemon } from "../models";






const PokemonPage: React.FC = () => {
  let location = useLocation();
  const pokemonId = location.pathname;
  const [pokemon, setPokemon] = useState({} as SinglePokemon);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getOne(pokemonId)
      .then((response) =>
        setPokemon({
          abilities: response.data.abilities,
          base_experience: response.data.base_experience,
          height: response.data.height,
          name: response.data.name,
          weight: response.data.weight,
          is_default: response.data.is_default,
          order: response.data.order,
          sprites: response.data.sprites,
        })
      )
      .then(() => setIsLoading(false));
  }, [pokemonId]);

  return (
    <>{isLoading ? <LinearProgress /> : <PokemonCard pokemon={pokemon} />}</>
  );
};

export default PokemonPage;
