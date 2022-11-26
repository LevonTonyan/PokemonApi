import React from 'react';
import { useState,useEffect } from 'react';
import './App.css';
import { IPokemon } from './models';
import {getList} from './api/api'
import PokemonList from './components/PokemonList';
import { Route, Routes} from 'react-router-dom';
import PokemonPage from './components/PokemonPage';




function App() {
  const [pokemonsList, setPokemonsList] = useState<IPokemon[]>([]);



  useEffect(() => {
    getList().then((r) => setPokemonsList(r.data.results))
  }, []);




  return (
    <>
      <Routes>
        <Route path="/" element={<PokemonList pokemonList={pokemonsList} />} />
        <Route path="/*" element={<PokemonPage /> }/>  
      </Routes>
      </>
    
  );
}

export default App;
