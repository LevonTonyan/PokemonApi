import React from 'react'
import { IPokemon } from './../models';
import pok from './../images/pokemon.png'
import { Link } from "react-router-dom";
import './Pokemon.css'

interface PokemonProps { 
    data:IPokemon
}

const Pokemon = ({data}: PokemonProps) => {
    let url = data.url.split("/")[6]

    return (
        <Link to={url}>
            <div className='pokemon'>              
                <img src={pok} alt="no" />
                <div>{data.name}</div>
            </div>
        </Link>
  )
}

export default Pokemon