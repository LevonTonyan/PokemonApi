import React from 'react'
import { IPokemon } from './../models';
import Pokemon from './Pokemon';
import './Pokemon.css'




const PokemonList = ({pokemonList}:any) => {


  
  return (
      <div className='listContainer'>
        {pokemonList.map((pokemon:IPokemon, i:number) => { 
          return <Pokemon data={pokemon} key={ i} />
        }) }
      </div>
    )
}

export default PokemonList