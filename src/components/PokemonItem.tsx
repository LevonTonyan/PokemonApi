import React from 'react'
import { PokemonInList } from '../models';
import pokemonImage from '../images/pokemon.png'
import { Link } from "react-router-dom";
import './Pokemon.css'

interface Props { 
    data:PokemonInList
}

const Pokemon:React.FC<Props> = ({data}) => {
    let url = data.url.split("/")[6]

    return (
        <Link to={url}>
            <div className='pokemon'>              
                <img src={pokemonImage} alt="no" />
                <div>{data.name}</div>
            </div>
        </Link>
  )
}

export default Pokemon